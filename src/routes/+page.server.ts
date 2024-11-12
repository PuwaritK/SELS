export const load = async (event) => {
	let signedInAs: string;
	let isSignedIn: boolean;
	if (event.locals.session && event.locals.account) {
		signedInAs = "You're signed in as " + event.locals.account?.username;
		isSignedIn = true;
	} else {
		signedInAs = "You're not signed in.";
		isSignedIn = false;
	}
	return { signedInAs, isSignedIn };
};
