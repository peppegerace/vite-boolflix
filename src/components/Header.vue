<script>
import { store } from '../data/store';

export default {
  name: 'Header',
  data() {
    return {
      store
    }
  }
}
</script>


<template>

  <header class="p-3">

    <div class="container-fluid">
      <div class="row justify-content-between">

        <div class="col">
          <div class="logo">
            <img src="/logo_boolflix.png" alt="">
          </div>
        </div>

        <div class="col-3">
            
          <div class="searchbar d-flex">
            <input
              type="text"
              class="form-control"
              placeholder="Cerca un film o una serie TV"
              v-model="store.apiParams.query"
              @keyup.enter="$emit('mysearch')"
            >
            <button class="btn btn-danger ms-2" @click="$emit('mysearch')">cerca</button>

            <!-- <div class="col-2">

              <select name="" class="form-select" id="">
                <option value="">Seleziona categoria</option>
                <option value="movie">Film</option>
                <option value="tv">Serie TV</option>
              </select>

            </div> -->

          </div>

        </div>

      </div>
    </div>

  </header>
  
</template>


<style lang="scss">

header {
  background: linear-gradient(#000, #313131);
  padding: 15px 10px;

  .logo {
    width: 120px;
    img {
      max-width: 100%;
    }
  }
}

</style>