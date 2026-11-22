<script lang="ts">
	// import Footer from '$lib/client/components/ui/footer/footer.svelte';
	import Header from '$lib/client/components/ui/header/Header.svelte';
	import { getPersonalDocs } from '$lib/services/getPersonalDocs';
	import Home from '$lib/client/components/layout/home.svelte';
	import Experiences from '$lib/client/components/layout/experiences.svelte';
	// let user: Record<string, unknown> | null = null;

	// onMount(async () => {
	// 	user = await getPersonalDocs();
	// });

	// console.log({ user });

	const userPromise = getPersonalDocs();


</script>

<style>
	.block-size-custom {
		min-block-size: 400svh;
	}
</style>

	<Header />
	{#await userPromise}
		<p>loading...</p>
	{:then user}
		<!-- <div class="flex justify-between flex-col items-center h-full min-h-screen text-white block-size-custom"> -->
			<div class='stack-sections'>
				<div class='section special'>
					<Home 
						identity={user.identity} 
					/>
				</div>
				<div class='section special scroll-mt-6' id="experiences">
					<h1>Experiences</h1>
					<Experiences
						experiences={user.experiences}
					/>
				</div>
				<div class='section special scroll-mt-6' id="projects">
					<h1>Projects</h1>
				</div>
				<div class='section special scroll-mt-6' id="certificates">
					<h1>Certificates</h1>
				</div>
				<div class='section special scroll-mt-6' id="honors">
					<h1>Honors</h1>
				</div>
				<div class='section special scroll-mt-6' id="skills">
					<h1>Skills</h1>
				</div>
				<div class='section special scroll-mt-6' id="contacts">
					<h1>Contacts</h1>
				</div>
			</div>
			<!-- <Footer />
		</div> -->
	{/await}