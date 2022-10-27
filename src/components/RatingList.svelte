<script>
    import { createEventDispatcher } from "svelte";
    import RatingItem from "./RatingItem.svelte";
    export let ratingList = []

    const dispatch = createEventDispatcher();

    function forward (e) {
        dispatch('delete-rating', e.detail)
    } 
</script>

{#each ratingList as rating (rating.id)}
    <RatingItem {rating} on:delete-rating={forward} />
{/each}