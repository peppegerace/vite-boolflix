<script>
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';
import Searchbar from './components/Searchbar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components:{
    Header,
    Searchbar,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods: {
    
    getApi() {

      let myUrl = store.apiMovieUrl;

      if (store.searchMovie !== "") {
        myUrl += `${store.searchMovie}`
        console.log(myUrl)
      } else {
        myUrl += ``
      }

      axios.get(myUrl)
        .then(res => {
          store.movieList = res.data.results;
          store.loading = false;
          store.apiMovieUrl += "";
          console.log(res.data.results);

        })
        .catch(err =>{
          console.log(err);
        })
        .finally(() => {
          store.loading = false;
        })
    }
  },
  mounted() {
    // this.getApi()
  }
}
</script>


<template>

  <Header />
  <Searchbar @mysearch="getApi"/>
  <Main />
  
</template>


<style lang="scss">

@use './scss/main.scss' as *;

body {
  background-color: #313131;
}

</style>
