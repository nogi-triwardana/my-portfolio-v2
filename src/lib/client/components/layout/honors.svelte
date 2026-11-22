<script lang="ts">
	import Carousel from "$lib/client/components/ui/carousel/Carousel.svelte";
	import Image from "$lib/client/components/ui/image/Image.svelte";
	import type { HonorItem } from "$lib/types";

  let { honors }: { honors: HonorItem[] } = $props();
</script>

<Carousel items={honors}>
  {#snippet children(honor)}
    <div class="flex flex-row justify-center items-center gap-4 mx-8 w-full h-full p-8">
      <Image
        class="w-64 h-48 object-cover mx-auto"
        src={honor.image}
        alt=""
      />
      <div class="flex flex-col items-start justify-start gap-2">
        <h1 class="font-bold text-lg">{honor.name}</h1>
        <p>{honor.platform} | {honor.years}</p>
        <p class="max-w-96">{honor.description}</p>
      </div>
    </div>
  {/snippet}
</Carousel>