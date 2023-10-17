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

  <div class="col-3 mb-5">

    <div class="poster_card">
      
      <!-- <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" :alt="film.title || film.name"> -->
      <img
        :src="film.poster_path ? `https://image.tmdb.org/t/p/w342/${film.poster_path}` : '/public/img/image_not_found.png'"
        :alt="film.title || film.name"
      />
      <div class="info">
        <h2>{{ film.title || film.name}}</h2>
        <h3>{{ film.original_title || film.original_name}}</h3>
        <p>Lingua: {{ film.original_language }}</p>
        <p>Voto: {{ film.vote_average }}</p>
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
  // transition: 0.4s ease-out;
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
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}

.poster_card:hover img {
  scale: 0.98;
  transition: 0.5s;
}


</style>