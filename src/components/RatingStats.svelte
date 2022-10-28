<script>
    import { ReviewStore } from '../stores';

    $: count = $ReviewStore.length
    $: averageRating = $ReviewStore.reduce((acc, item) => acc + item.rating, 0) / $ReviewStore.length
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Average Rating: {averageRating.toFixed(2)}</h4>
</div>