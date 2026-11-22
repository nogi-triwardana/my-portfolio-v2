<script lang="ts">
    import placeholderImage from '$lib/assets/placeholder-image.svg?enhanced';
    import placeholderPersonalImage from '$lib/assets/placeholder-personal-image.svg?enhanced';

    const { src, class: className, alt, isPersonal = false } = $props();

    const images = import.meta.glob(
        '/src/lib/assets/**/*.{jpg,jpeg,png,webp,svg,avif}',
        {
            eager: true,
            query: { enhance: true }
        }
    ) as Record<string, { default: string }>;

    const localImage = $derived(
        src.includes('$lib') 
        ? images[src.replace('$lib', '/src/lib')]?.default
        : null
    );

    const defaultImage = $derived(
        isPersonal ? placeholderPersonalImage : placeholderImage
    );

    let failedSrc = $state<string | null>(null);
    const failed = $derived(failedSrc === src);
</script>

{#if localImage}
    <enhanced:img 
        src={localImage}
        class={className}
        {alt}
    />
{:else if src && !failed}
    <img
        src={`/api/file?pathname=${src}`}
        class={className}
        onerror={() => (failedSrc = src)}
        {alt}
    />
{:else}
    <enhanced:img 
        src={defaultImage} 
        class={className} 
        {alt}
    />
{/if}