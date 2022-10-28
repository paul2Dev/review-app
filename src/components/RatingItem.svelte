<script>
    import { ReviewStore } from '../stores';

    export let rating

    const deleteRating = (itemID) => {
        ReviewStore.update((reviewList) => {
            return reviewList.filter((item) => item.id !== itemID)
        })
    }
</script>

<div class="card">
    <div class="rating-score">{rating.rating}</div>
    <button class="close" on:click="{() => deleteRating(rating.id)}">x</button>
    <p class="rating-text">{rating.text}</p>
</div>