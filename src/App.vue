<script>
import { store } from './data/store';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl)
        .then(res => {
          console.log(res.data);
        })
        .catch(err =>{
          
        })
    }
  },
  mounted() {
    this.getApi()
  }
}
</script>


<template>
  <h1>Boolflix</h1>
  
</template>


<style lang="scss">

@use './scss/main.scss' as *;

</style>
