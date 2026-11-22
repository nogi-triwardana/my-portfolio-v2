<script lang="ts">
	import Header from '$lib/client/components/ui/header/Header.svelte';
	import { getPersonalDocs } from '$lib/services/getPersonalDocs';
	import Home from '$lib/client/components/layout/home.svelte';
	import Experiences from '$lib/client/components/layout/experiences.svelte';
	import Projects from '$lib/client/components/layout/projects.svelte';
	import Certificates from '$lib/client/components/layout/certificates.svelte';
	import Honors from '$lib/client/components/layout/honors.svelte';
	import Skills from '$lib/client/components/layout/skills.svelte';
	import Contacts from '$lib/client/components/layout/contacts.svelte';
	import { honorsConstants } from '$lib/constants/personalData';
	import { skillConstants } from '$lib/constants/skillData';
	
</script>

	<Header />
	{#await getPersonalDocs()}
		<p>loading...</p>
	{:then user}
		{#if user}
			{console.log({ user })}
			<!-- <div class="flex justify-between flex-col items-center h-full min-h-screen text-white block-size-custom"> -->
				<div class='stack-sections'>
					<div class='section special'>
						<Home 
							identity={user.identity} 
						/>
					</div>
					<div class='section special' id="experiences">
						<Experiences
							experiences={user.experiences}
						/>
					</div>
					<div class='section special' id="projects">
						<Projects 
							projects={user.projects}
						/>
					</div>
					<div class='section special' id="certificates">
						<Certificates
							certificates={user.certificate}
						/>
					</div>
					<div class='section special' id="honors">
						<Honors 
							honors={honorsConstants} 
						/>
					</div>
					<div class='section special' id="skills">
						<Skills
							skills={skillConstants}
						/>
					</div>
					<div class='section special' id="contacts">
						<Contacts 
							contacts={user.contacts}
							utilities={user.utilities}
						/>
					</div>
				</div>
				<!-- <Footer />
			</div> -->
		{:else}
				<p>No data found</p>
		{/if}
	{:catch error}
		<p>Failed to load: {error.message}</p>
	{/await}