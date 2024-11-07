export const load = async (event) => {
	let signedInAs: string;
	let isSignedIn: boolean;
	if (event.locals.session && event.locals.user) {
		signedInAs = "You're signed in as " + event.locals.user?.username;
		isSignedIn = true;
	} else {
		signedInAs = "You're not signed in.";
		isSignedIn = false;
	}
	return { signedInAs, isSignedIn };
};
