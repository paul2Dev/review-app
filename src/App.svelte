<script>

import RatingList from './components/RatingList.svelte';
import RatingStats from './components/RatingStats.svelte';
import RatingForm from './components/RatingForm.svelte';

let ratingList = [
  { id: 1, rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, labore?" },
  { id: 2, rating: 4, text: "This is a good product" },
  { id: 3, rating: 3, text: "This is an ok product" },
  { id: 4, rating: 2, text: "This is a bad product" },
  { id: 5, rating: 1, text: "This is a terrible product" },
];

$: count = ratingList.length
$: averageRating = ratingList.reduce((acc, item) => acc + item.rating, 0) / count

const deleteRating = (e) => {
  const itemId = e.detail
  ratingList = ratingList.filter((item) => item.id !== itemId);
};

const saveReview = (e) => { 
  const { text } = e.detail;
  const rating = parseInt(e.detail.rating);
  const id = Math.floor(Math.random() * 1000);
  ratingList = [...ratingList, { id, rating, text }];

  console.log(ratingList)
};

</script>

<main>
  <div class="rating-list">
    <RatingForm on:submit-rating={saveReview} />
    {#if count > 0}
      <RatingStats {count} {averageRating} />
      <RatingList {ratingList} on:delete-rating={deleteRating} />
    {:else}
      <p>No ratings yet</p>
    {/if}
  </div>
</main>

