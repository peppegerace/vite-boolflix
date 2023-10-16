<script>
import { store } from '../data/store';

export default {
  name: 'Searchbar',
  data() {
    return {
      store
    }
  }
}
</script>


<template>

  <div class="searchbar d-flex justify-content-end px-3">

    <div class="col-3 me-3 d-flex">
      <input
        type="text"
        class="form-control"
        placeholder="Inserisci il nome di un film o di una serie TV"
        v-model="store.searchMovie"
        @keyup.enter="$emit('mysearch')">
        <button class="btn btn-danger ms-2" @click="$emit('mysearch')">cerca</button>
    </div>

    <!-- <div class="col-2">

      <select name="" class="form-select" id="">
        <option value="">Seleziona categoria</option>
        <option value="movie">Film</option>
        <option value="tv">Serie TV</option>
      </select>

    </div> -->
  </div>
  
</template>


<style lang="scss">

.searchbar {
  background-color: #313131;
  
}

</style>