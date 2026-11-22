<script lang="ts">
	import Carousel from "$lib/client/components/ui/carousel/Carousel.svelte";
	import Image from "$lib/client/components/ui/image/Image.svelte";
	import type { SkillEntry } from "$lib/types";

  let { skills }: { skills: Record<string, SkillEntry[]> } = $props();

  const skillsTuples = $derived(Object.entries(skills));

</script>

<Carousel items={skillsTuples}>
  {#snippet children([category, items]: [string, SkillEntry[]])}
    <div class="flex flex-col justify-center items-center gap-4 mx-8 w-full h-full p-8">
      <h1 class="font-bold text-lg">{category}</h1>
      <div class="flex flex-wrap gap-8 justify-center items-center">
        {#each items as item}
          <div class="flex flex-col gap-2 text-center">
            <p>{item.title}</p>
            <Image
              class="w-auto h-16"
              src={item.image}
              alt=""
            />
          </div>
        {/each}
      </div>
    </div>
  {/snippet}
</Carousel>