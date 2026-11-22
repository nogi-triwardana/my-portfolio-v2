<script lang="ts">
	import Image from "$lib/client/components/ui/image/Image.svelte";

	const { identity } = $props();
</script>

<div class="flex flex-col justify-center items-center pt-64 md:pt-0 gap-4 mx-16 w-full h-full p-8">
	<Image
		class="w-64 h-64 object-cover rounded-full mx-auto"
		src={identity.img}
		alt=""
		isPersonal
	/>
	<div class="text-center">
		<h1 class="font-semibold text-xl">{identity.name}</h1>
		<h1 class="font-semibold text-xl">{identity.role}</h1>
	</div>
	<p>{identity.desc}</p>
</div>