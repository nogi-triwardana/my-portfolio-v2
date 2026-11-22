<script lang="ts">
  import type { ProjectData } from "$lib/types";
  import Carousel from "$lib/client/components/ui/carousel/Carousel.svelte";
  import Icon from "@iconify/svelte";

  let { projects }: { projects: ProjectData[] } = $props();

  function redirectGithubHandler(e: MouseEvent, url: string) {
    if(!url) {
      e.preventDefault();
      return;
    }
  }

  function redirectProjectHandler(e: MouseEvent, url: string) {
    if(!url) {
      e.preventDefault();
      return;
    }
  }
</script>

<Carousel items={projects}>
  {#snippet children(project)}
    <div
      class="flex flex-col justify-end w-full md:w-3/4 absolute place-self-center top-0 bottom-0 left-0 right-0 flex flex-col justify-center p-8 text-white"
    >
      <h2 class="text-white text-lg before:content-[counter(item)'.'] before:[counter-increment:item] before:-ml-6 before:mr-2">
        {project.title}
      </h2>
      <p class="text-sm italic">{project.identity}</p>
      <p class="text-sm">{project.description}</p>
      <ol class="list-[lower-alpha] pl-4">
        {#each project.responsibilities as responsible}
          <li class="text-sm">{responsible}</li>
        {/each}
      </ol>
      <div class="flex gap-4 pt-4">
        <div class="group relative inline-block">
          <a 
            href={project.github_url || undefined} 
            target="_blank" 
            onclick={(e) => redirectGithubHandler(e, project.github_url)}
          >
            <Icon icon="grommet-icons:github" height={'20px'} width={'20px'} />
          </a>
          {#if !project.github_url}
            <div class="pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1/2 -left-[100%] translate-x-1/2 mb-2 translate-full text-black bg-gray-200 rounded-lg p-2 text-sm">
              Unknown URL
            </div>
          {/if}
        </div>
        <div class="group relative inline-block">
          <a 
            href={project.url || undefined} 
            target="_blank" 
            onclick={(e) => redirectProjectHandler(e, project.url)}
          >
            <Icon icon="arcticons:emoji-web" height={'20px'} width={'20px'} />
            {#if !project.url}
              <div class="pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1/2 -left-[100%] translate-x-1/2 mb-2 translate-full text-black bg-gray-200 rounded-lg p-2 text-sm">
                Unknown URL
              </div>
            {/if}
          </a>
        </div>
      </div>
    </div>
  {/snippet}
</Carousel>

<!-- <section
  // bind:this={horizontalSection}
  class="flex justify-center items-center relative mx-auto w-full overflow-hidden rounded-xl px-20"
  // class="flex flex-col justify-center items-center w-full h-full px-6 space-y-8 sm:space-y-16 relative py-16 overflow-y-hidden"
  // onwheel={handleWheel}
> 
    <div class="absolute inset-y-1/2 left-20 z-10">
      <button 
        type="button" 
        class="cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-[#c2c1c0]/50 transition duration-150 ease-in flex justify-center items-center" 
        onclick={previous}
      >
        <ArrowLeftIcon color={'#f2f1ed'} width={'24px'} />
      </button>
    </div>
    <ol
      class="flex h-full w-full list-none [counter-reset:item] transition-transform duration-500 ease-in-out"
      style={`transform: translateX(-${currentSlide * 100}%);`}
    >
      {#each projects as project}
        <li class="relative min-w-full w-full h-screen">
          <div
            class="flex flex-col justify-end w-3/4 absolute place-self-center top-0 bottom-0 left-0 right-0 flex flex-col justify-center p-8 text-white"
          >
            <h2 class="text-white text-lg before:content-[counter(item)'.'] before:[counter-increment:item] before:-ml-6 before:mr-2">
              {project.title}
            </h2>
            <p class="text-sm italic">{project.identity}</p>
            <p class="text-sm">{project.description}</p>
            <ol class="list-[lower-alpha] pl-4">
              {#each project.responsibilities as responsible}
                <li class="text-sm">{responsible}</li>
              {/each}
            </ol>
            <div class="flex gap-4 pt-4">
              <div class="group relative inline-block">
                <a 
                  href={project.github_url || undefined} 
                  target="_blank" 
                  onclick={(e) => redirectGithubHandler(e, project.github_url)}
                >
                  <GithubIcon width={"20px"} class="cursor-pointer" />
                </a>
                {#if !project.github_url}
                  <div class="pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1/2 -left-[100%] translate-x-1/2 mb-2 translate-full text-black bg-gray-200 rounded-lg p-2 text-sm">
                    Unknown URL
                  </div>
                {/if}
              </div>
              <div class="group relative inline-block">
                <a 
                  href={project.url || undefined} 
                  target="_blank" 
                  onclick={(e) => redirectProjectHandler(e, project.url)}
                >
                  <EmojiWebIcon width={"20px"} class="cursor-pointer" />
                  {#if !project.url}
                    <div class="pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1/2 -left-[100%] translate-x-1/2 mb-2 translate-full text-black bg-gray-200 rounded-lg p-2 text-sm">
                      Unknown URL
                    </div>
                  {/if}
                </a>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ol>
    <div class="absolute inset-y-1/2 right-20 z-10">
      <button 
        type="button" 
        class="cursor-pointer w-[32px] h-[32px] rounded-full hover:bg-[#c2c1c0]/50 transition duration-150 ease-in flex justify-center items-center" 
        onclick={next}
      >
        <ArrowRightIcon color={'#f2f1ed'} width={'24px'} />
      </button>
    </div>
</section> -->