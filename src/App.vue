<script>
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components:{
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods: {
    
    getApi(type) {

      axios.get(store.apiUrl + type, {
        params: store.apiParams
      }) 
        .then(res => {

          store[type] = res.data.results;
          // store.movieList = res.data.results;
          store.loading = false;
          // store.apiMovieUrl += "";
          console.log(res.data.results);

        })
        .catch(err =>{
          console.log(err);
        })
        .finally(() => {
          // store.loading = false;
        })
    },

    mysearch() {
      this.getApi('movie')
      this.getApi('tv')
    }
  },
  mounted() {
    
  }
}
</script>


<template>

  <Header @mysearch="mysearch"/>
  <div class="container">
    <h1 v-if="store.loading">Fai la tua ricerca</h1>
  </div>
  <Main title="Film" type="movie" v-if="!store.loading"/>
  <Main title="Serie TV" type="tv" v-if="!store.loading"/>
  
  
</template>


<style lang="scss">

@use './scss/main.scss' as *;

body {
  font-family: 'Roboto', sans-serif;
  background-color: #313131;
  color: #bdbdbd;
}

</style>
