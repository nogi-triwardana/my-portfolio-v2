<script lang="ts">
	import type { ContactType, UtilitiesType } from "$lib/types";
  import Icon from "@iconify/svelte";

  let { contacts, utilities }: { contacts: ContactType, utilities: UtilitiesType } = $props();

  const iconMap = new Map([
    ["instagram", "carbon:logo-instagram"],
    ["linkedin", "carbon:logo-linkedin"],
    ["email", "carbon:email"],
    ["whatsapp", "bi:whatsapp"],
  ]);

  console.log({ contacts, utilities });

</script>

<div class="flex flex-col justify-center items-center gap-4 mx-8 w-full h-full p-8">
  <div class="flex gap-8">
    {#each contacts as contact}
      <a href={contact.link} target="_blank" rel="noopener noreferrer">
        <Icon icon={iconMap.get(contact.name) as string} height={'60px'} width={'60px'} />
      </a>
    {/each}
  </div>
  {#if utilities.button_download_file.is_on}
    <a href={utilities.button_download_file.link} target="_blank" class="rgb-border">
      {utilities.button_download_file.text_button}
    </a>
  {/if}
</div>
