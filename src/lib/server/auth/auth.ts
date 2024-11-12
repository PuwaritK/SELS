import type { account, session } from '@prisma/client';
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from '@oslojs/encoding';
import prisma from '../database/client';
import { sha256 } from '@oslojs/crypto/sha2';
import type { Cookies, RequestEvent } from '@sveltejs/kit';

export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes); // 20 random bytes
	const token = encodeBase32LowerCaseNoPadding(bytes); // encode to base32
	return token;
}

export async function createSession(token: string, userId: number): Promise<session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token))); // Sha256 hashing algorithm
	const session: session = {
		id: sessionId,
		userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days life
	};
	await prisma.session.create({
		data: session
	});
	return session;
}

export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const result = await prisma.session.findUnique({
		// Does the session exists in db
		where: {
			id: sessionId
		},
		include: {
			account: true
		}
	});
	if (result === null) {
		// Session does not exists
		return { session: null, account: null };
	}
	const { account, ...session } = result;
	if (Date.now() >= session.expiresAt.getTime()) {
		// If session expired
		await prisma.session.delete({ where: { id: sessionId } });
		return { session: null, account: null };
	}
	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 3) {
		// If there's less than 3 days before expiration, extends it.
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
		await prisma.session.update({
			where: {
				id: session.id
			},
			data: {
				expiresAt: session.expiresAt
			}
		});
	}
	return { session, account };
}

export async function invalidateSession(sessionId: string): Promise<void> {
	await prisma.session.delete({ where: { id: sessionId } });
}

export type SessionValidationResult =
	| { session: session; account: account }
	| { session: null; account: null };

export function setSessionTokenCookie(cookies: Cookies, token: string, expiresAt: Date): void {
	cookies.set('session', token, {
		httpOnly: true,
		sameSite: 'lax',
		expires: expiresAt,
		path: '/'
	});
}

export function deleteSessionTokenCookie(cookies: Cookies): void {
	cookies.set('session', '', {
		httpOnly: true,
		sameSite: 'lax',
		maxAge: 0,
		path: '/'
	});
}
