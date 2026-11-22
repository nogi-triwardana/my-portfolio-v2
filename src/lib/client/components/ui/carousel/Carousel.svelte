<script lang="ts" generics="T">
  import type { Snippet } from "svelte";
  import Icon from "@iconify/svelte";

  type Props = {
    items: T[];
    children: Snippet<[T, number]>;
  };

  let { items, children }: Props = $props();

  let currentSlide = $state(0);
  const count = $derived(items.length);

  function wrapIndex(index: number) {
    if (count === 0) return 0;
    return ((index % count) + count) % count;
  }

  function goTo(index: number) {
    currentSlide = wrapIndex(index);
  }

  function next() {
    goTo(currentSlide + 1);
  }

  function previous() {
    goTo(currentSlide - 1);
  }

  const swipeThreshold = 40;
  let startX = 0;
  let startY = 0;
  let tracking = false;
  let axis: "x" | "y" | null = null;

  function onPointerDown(event: PointerEvent) {
    if (event.button !== 0 || count < 2) return;
    if (event.target instanceof Element && event.target.closest("button, a")) return;

    tracking = true;
    axis = null;
    startX = event.clientX;
    startY = event.clientY;

    // Capturing on mouse steals click from the arrow/dot buttons.
    if (event.pointerType !== "mouse") {
      (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    }
  }

  function onPointerMove(event: PointerEvent) {
    if (!tracking || axis) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return;
    axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
  }

  function onPointerUp(event: PointerEvent) {
    if (!tracking) return;
    tracking = false;
    if (axis === "x") {
      const dx = event.clientX - startX;
      if (dx <= -swipeThreshold) next();
      else if (dx >= swipeThreshold) previous();
    }
    axis = null;
  }
</script>

<div
  class="relative mx-auto flex h-full min-h-0 w-full max-w-full touch-pan-y items-center overflow-hidden rounded-xl px-11 sm:px-14 md:px-20"
  role="region"
  aria-label="Carousel"
  aria-roledescription="carousel"
  onpointerdown={onPointerDown}
  onpointermove={onPointerMove}
  onpointerup={onPointerUp}
  onpointercancel={onPointerUp}
>
  {#if count > 1}
    <div class="absolute top-1/2 left-1 z-20 -translate-y-1/2 sm:left-2 md:left-6">
      <button
        type="button"
        class="flex size-11 cursor-pointer items-center justify-center rounded-full transition duration-150 ease-in hover:bg-[#c2c1c0]/50 md:size-8"
        aria-label="Previous slide"
        onpointerdown={(event) => event.stopPropagation()}
        onclick={previous}
      >
        <Icon icon="akar-icons:arrow-left" width="20" height="20" />
      </button>
    </div>
  {/if}

  <ol
    class="flex h-full min-h-0 w-full list-none [counter-reset:item] transition-transform duration-500 ease-in-out"
    style={`transform: translateX(-${currentSlide * 100}%);`}
  >
    {#each items as item, index}
      <li
        class="relative h-full min-h-0 w-full min-w-full shrink-0 overflow-y-auto overflow-x-hidden"
        aria-hidden={index !== currentSlide}
        aria-roledescription="slide"
      >
        {@render children(item, index)}
      </li>
    {/each}
  </ol>

  {#if count > 1}
    <div class="absolute top-1/2 right-1 z-20 -translate-y-1/2 sm:right-2 md:right-6">
      <button
        type="button"
        class="flex size-11 cursor-pointer items-center justify-center rounded-full transition duration-150 ease-in hover:bg-[#c2c1c0]/50 md:size-8"
        aria-label="Next slide"
        onpointerdown={(event) => event.stopPropagation()}
        onclick={next}
      >
        <Icon icon="akar-icons:arrow-right" width="20" height="20" />
      </button>
    </div>

    <div
      class="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:bottom-6"
      aria-hidden="true"
    >
      {#each items as _, index}
        <button
          type="button"
          class="size-2 rounded-full transition-colors {index === currentSlide
            ? 'bg-white'
            : 'bg-white/40'}"
          aria-label="Go to slide {index + 1}"
          onpointerdown={(event) => event.stopPropagation()}
          onclick={() => goTo(index)}
        ></button>
      {/each}
    </div>
  {/if}
</div>
