// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

/// <reference types="svelte" />

declare module '*.svelte' {
	import type { SvelteComponentTyped } from 'svelte';

	export default class Component<
		Props,
		Events,
		Slots
	> extends SvelteComponentTyped<Props, Events, Slots> {}
}

export {};
