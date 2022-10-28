<script>
  import { ReviewStore } from './stores';
  import RatingList from './components/RatingList.svelte';
  import RatingStats from './components/RatingStats.svelte';
  import RatingForm from './components/RatingForm.svelte';
</script>

<main>
  <div class="rating-list">
    <RatingForm />
    {#if $ReviewStore.length > 0}
      <RatingStats />
      <RatingList />
    {:else}
      <p class="text-center">No ratings yet</p>
    {/if}
  </div>
</main>

