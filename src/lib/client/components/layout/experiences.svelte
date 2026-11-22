<script lang="ts">
	import type { ExperienceData } from "$lib/types";
  import { cn } from "$lib/utils";
  import orderBy from 'lodash/orderBy';
  
  let { experiences }: { experiences: ExperienceData[] } = $props();

</script>

<div class="flex flex-col justify-center items-center w-full h-full space-y-8 sm:space-y-16 relative py-16">
  <h1 class="font-semibold text-xl">Experiences</h1>

  <div
    class={cn(
      `flex flex-col w-auto p-4 sm:w-1/2 mx-auto justify-center text-white`
    )}
  >
    {#each orderBy(experiences, ['key'], ['desc']) as item, i}
      <div class={cn(`flex divide-x-4`, i !== experiences.length - 1 ? 'divide-dashed' : 'divide-transparent')}>
        <div class={``}></div>
        <div class={`relative pb-4 pl-3 sm:pl-6`}>
          <div
            class={cn(
              `absolute -left-2.5 w-4 h-4 rounded-full`,
              i === 0 ? `bg-[#0092ac] animate-ping` : `bg-gray-200`,
            )}
          ></div>
          <div
            class={cn(
              `absolute -left-2.5 w-4 h-4 rounded-full`,
              i === 0 ? `bg-[#0092ac]` : `bg-gray-200`,
            )}
          ></div>
          <div class="flex flex-col">
            <div 
              class={cn(
                `px-2 text-sm sm:text-base`, 
                i === 0 ? `font-bold` : `font-semibold`
              )}
            >
              {item.office}
            </div>
            <div
            class={cn(
              `px-2 text-sm sm:text-base`,
              i === 0 ? `font-bold` : `font-semibold`,
            )}
          >
            <div class={`font-medium text-xs sm:text-sm px-2`}>{item.role}</div>
            <div class={`font-medium text-xs sm:text-sm px-2`}>{item.time}</div>
          </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>