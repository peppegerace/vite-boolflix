<script>
import card from './card.vue';

import { store } from '../../data/store'

export default {
  name: 'MovieContainer',
  components: {
    card
  },
  data() {
    return {
      store
    }
  }
}
</script>


<template>

  <h1 v-if="store.loading">Fai la tua ricerca</h1>

  <div class="container">
    <div class="row">
    <h2 v-if="store.movieList.length > 0">Film</h2>

    <card v-for="film in store.movieList" :details="film" :key="film.id" />
    
  </div>
</div>
  
</template>


<style lang="scss">

</style>