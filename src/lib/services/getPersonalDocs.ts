import { db } from "$lib/config/firebase"
import type { PersonalDocsType } from "$lib/types";
import { get, ref } from 'firebase/database'
import { browser } from "$app/environment";

let cachedPromised: Promise<PersonalDocsType | null> | undefined;

export const getPersonalDocs: () => Promise<PersonalDocsType | null> = async () => {
	if(!browser) {
		return Promise.resolve(null);
	}

	if(!cachedPromised) {
		cachedPromised = (async () => {
			const snapshot = await get(ref(db, '/introduction'));
	
			console.log({ snapshot: snapshot.val() });
		
			return snapshot.exists() ? snapshot.val() : null;
		})();
	}

	return cachedPromised;
}