<script lang="ts">
	// import ScrollerY from "$lib/client/components/ui/scrollerY/ScrollerY.svelte";
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import Icon from "@iconify/svelte";
	

	type Section = {
		id: string;
		label: string;
		progress: number;
		range: [number, number];
	};

	const sections: Section[] = [
		{ id: 'home',         label: 'Home',         progress: 0,    range: [0,    0.10] },
		{ id: 'experiences',  label: 'Experiences',  progress: 0.15, range: [0.10, 0.20] },
		{ id: 'projects',     label: 'Projects',     progress: 0.25, range: [0.20, 0.30] },
		{ id: 'certificates', label: 'Certificates', progress: 0.35, range: [0.30, 0.40] },
		{ id: 'honors',       label: 'Honors',       progress: 0.45, range: [0.40, 0.50] },
		{ id: 'skills',       label: 'Skills',       progress: 0.55, range: [0.50, 0.65] },
		{ id: 'contacts',     label: 'Contacts',     progress: 0.75, range: [0.65, 1.00] },
	];

	let activeSection = $state('home');
	let widthWindow = $state(0);
	let isOpenDropdown = $state(false);
	let isMobile = $derived(widthWindow < 768);
	let isDesktop = $derived(widthWindow >= 768);

	function getScrollProgress() {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		return max > 0 ? window.scrollY / max : 0;
	}

	function updateActiveSection() {
		const progress = getScrollProgress();
		const current = sections.find(
			(s) => progress >= s.range[0] && progress < s.range[1]
		);
		if(current) activeSection = current.id;
	}

	function scrollToSection(progress: number) {
		isOpenDropdown = false;
		const max = document.documentElement.scrollHeight - window.innerHeight;

		window.scrollTo({
			top: max * progress,
			behavior: "smooth"
		});
	}

	$effect(() => {
		if(isDesktop) isOpenDropdown = false;
		console.log({ isMobile, isOpenDropdown })
	})

	onMount(() => {
		updateActiveSection();
		window.addEventListener('scroll', updateActiveSection, { passive: true });
		return () => window.removeEventListener('scroll', updateActiveSection);
	});
</script>

<svelte:window bind:innerWidth={widthWindow} />

<header class="flex justify-center sticky top-0 z-50 w-full">
	<!-- <ScrollerY /> -->
	<nav class={cn(
		"flex flex-col items-end md:items-center absolute bg-black/50 w-[40%] h-screen md:h-auto right-0 md:w-full md:w-auto md:bg-transparent md:flex-row md:static text-white gap-2 pt-12 md:pt-0 pb-4 md:pb-0 md:gap-8",
		(isOpenDropdown && isMobile)
			? `transition duration-300 ease-out translate-x-full`
			: `transition duration-300 ease-out translate-x-0`,
		)}
	>
		{#each sections as section (section.id)}
			<button
				onclick={() => scrollToSection(section.progress)}
				class={cn(
					'relative px-2 py-1 transition-all w-fit md:w-full duration-300 cursor-pointer',
					'hover:text-white/20',
					activeSection === section.id 
						? 'rgb-text' : 'text-white/70'
				)}
				aria-current={activeSection === section.id ? 'page' : undefined}
			>
				{section.label}

				<span
					class={cn(
						// 'absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-white transition-transform duration-300 origin-left',
						activeSection === section.id ? 'scale-x-100 rgb-line' : 'scale-x-0'
					)}
				></span>

			</button>
		{/each}
	</nav>
	{#if isMobile}
		{#if isOpenDropdown}
			<Icon onclick={() => (isOpenDropdown = !isOpenDropdown)} icon="andrsrxn:list" class="absolute z-20 right-2 top-2" width={24} height={24} />
		{:else}
			<Icon onclick={() => (isOpenDropdown = !isOpenDropdown)} icon="akar-icons:cross" class="absolute z-20 right-2 top-2" width={24} height={24} />
		{/if}	
	{/if}
</header>