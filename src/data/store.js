import { reactive } from "vue";

export const store = reactive({
  apiMovieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3631efd29a957420d92845b4bba7a096&query=',
  searchMovie: "",
  movieList: [],
  loading: true
})