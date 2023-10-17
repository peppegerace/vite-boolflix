<script>
import card from './partials/card.vue';
import { store } from '../data/store'

export default {
  name: 'Main',
  props: {
    title: String,
    type: String
  },
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

<main>

  <div class="container">
    <h2>{{ title }}</h2>
    <div class="row">
      <card
        v-for="film in store[type]"
        :key="film.id" 
        :film="film"
      />
    </div>
  </div>

</main>
  
</template>


<style lang="scss">


</style>