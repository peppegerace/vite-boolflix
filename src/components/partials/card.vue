<script>
import { store } from '../../data/store'

export default {
  name: 'card',
  props: {
    film: Object
  },
  data() {
    return {
      store
    }
  }
}
</script>


<template>

  <div class="col-3">
    <div class="card mb-3 p-1">
      
      <h5>{{ film.title || film.name}}</h5>
      <h5>{{ film.original_title || film.original_name}}</h5>
      <h5>Lingua: {{ film.original_language }}</h5>
      <h5>Voto: {{ film.vote_average }}</h5>

    </div>
  </div>

</template>


<style>

</style>