<script lang="ts">
	import { resolve } from '$app/paths';
	import Footer from '$lib/client/components/ui/footer/footer.svelte';
	import Header from '$lib/client/components/ui/header/Header.svelte';
</script>

<div class="flex justify-between flex-col items-center h-screen">
	<Header />
	<a href={resolve('/demo/paraglide', {})}>paraglide</a>
	<Footer />
</div>