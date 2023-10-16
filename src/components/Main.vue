<script>
import MovieContainer from './partials/MovieContainer.vue';
import TvContainer from './partials/TvContainer.vue';

export default {
  name: 'Main',
  components: {
    MovieContainer,
    TvContainer
  }
}
</script>


<template>

<main>

  <div class="container">
    <MovieContainer />
    <!-- <TvContainer /> -->
  </div>

</main>
  
</template>


<style lang="scss">

main {
  // height: 90vh;
  background-color: #313131;
  color: #bdbdbd;
}

</style>