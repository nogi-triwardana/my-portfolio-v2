<script>
  let scrollY = $state(0);

  function autoScrollSection(scroll) {
    if(scroll <= 100) return;
    if(scroll > 175 && scroll < 205) window.scrollTo(0, 189.34);
    if(scroll > 280 && scroll < 336) window.scrollTo(0, 316);
    if(scroll > 416 && scroll < 442.67) window.scrollTo(0, 442.67);
    if(scroll > 550 && scroll < 568.67) window.scrollTo(0, 568.67);
    if(scroll > 668 && scroll < 695.33) window.scrollTo(0, 695.33);
    if(scroll > 920 && scroll <= 948) window.scrollTo(0, 948);
  }

  $effect(() => {
    console.log({ scrollY })
    // window.scrollTo(0, 189.34);
    autoScrollSection(scrollY);
    // 189.34, 316, 442.67, 568.67, 695.33, 948
  })
</script>

<svelte:window bind:scrollY />

<!-- <p>scroll: {scrollY}px</p> -->