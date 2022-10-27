<script>
    import { createEventDispatcher } from "svelte";
    export let rating

    const dispatch = createEventDispatcher();

    const handleDelete = (itemID) => {
        dispatch('delete-rating', itemID)
    }
</script>

<div class="card">
    <div class="rating-score">{rating.rating}</div>
    <button class="close" on:click="{() => handleDelete(rating.id)}">x</button>
    <p class="rating-text">{rating.text}</p>
</div>