<script>
import { store } from '../../data/store';
import Stars from './Stars.vue';


export default {
  name: 'card',
  components: {
    Stars
  },
  props: {
    film: Object
  },
  data() {
    return {
      store,
      flags: ['en','it']
    }
  },
  methods: {
    getImagePath(img){
      return new URL(`../../../public/img/${img}.png`, import.meta.url).href
    }
  }
}
</script>


<template>

  <div class="col-3 mb-5">

    <div class="poster_card">
      
      <!-- <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" :alt="film.title || film.name"> -->
      <img
        :src="film.poster_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path}` : '/img/image_not_found.png'"
        :alt="film.title || film.name"
      />
      <div class="info">

        <h4 class="fw-bold">{{ film.title || film.name}}</h4>
        <h5 class="fw-bold">{{ film.original_title || film.original_name}}</h5>

        <div class="flag">
          <img v-if="flags.includes(film.original_language)" :src="getImagePath(film.original_language)" alt="">
          <p v-else >Lingua: {{ film.original_language }}</p>
        </div>

        <p>Voto: {{ film.vote_average }}</p>

        <Stars :vote="film.vote_average" />

        <p>{{ film.overview }}</p>

      </div>

    </div>

  </div>

</template>


<style lang="scss" scoped>

@use '../../scss/main.scss' as *;

.poster_card {
  height: 360px;
  padding: 1.2rem;
  position: relative;
  display: flex;
  cursor: pointer;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);

  img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  }
  .info {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
  overflow: auto;
  .flag img{
  width: 25px;
  position: relative;
  }
}
}

.poster_card:hover:before {
  opacity: 1;
}
.poster_card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.poster_card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}

.poster_card:hover img {
  scale: 0.97;
  transition: 1s;
}

</style>