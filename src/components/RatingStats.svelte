<script>
    export let count
    export let averageRating
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Average Rating: {averageRating.toFixed(2)}</h4>
</div>