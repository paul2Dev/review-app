<script>
    import { ReviewStore } from '../stores';
    import {fade, scale} from 'svelte/transition'
    import RatingItem from "./RatingItem.svelte";
</script>

{#each $ReviewStore as rating (rating.id)}
    <div in:scale out:fade>
        <RatingItem {rating} />
    </div>
{/each}