<template>
  <div class="container vh-100">
    <!-- Seach input goes in here --->
    <div class="row my-5">
      <div class="col-md-6 text-center mx-auto">
        <input
          class="form-control"
          type="text"
          name="search"
          id="search"
          v-model="state.searchInput"
          placeholder="Search for movies"
        />
        <button class="btn my-3 btn-primary" @click="searchMovies">Search</button>
      </div>
    </div>
    <div class="row mx-auto">
      <!-- List search results by iterating the search results array and rendering the MovieCard  --->
      <MovieCard
        v-for="movie in state.searchResults"
        :key="movie.id"
        :movie="movie"
        @click="showMovieDetails(movie.id)"
      />
    </div>
    <div v-for="movie in state.searchResults" :key="movie.id">
      <ShowMovie v-if="state.selectedMovie" :movie="state.selectedMovie" />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import MovieCard from "./MovieCard.vue";
import ShowMovie from "./ShowMovie.vue";
import api from "../api/moviedb";

const state = reactive({
  // create a variable to store search input
  searchInput: "",
  // create an array variable to store search results
  searchResults: [],
  selectedMovie: null,
});

// use moviedb api to search based on search input
const searchMovies = async () => {
  try {
    const response = await api.search(state.searchInput);
    // store search results in array
    state.searchResults = response;
  } catch (error) {
    console.error("Error searching for movies:", error);
  }
};

// When a single MovieCard is clicked, render the movie details in the ShowMovie component
const showMovieDetails = async (movie) => {
  console.log(movie);
  let res = await api.getMovie(movie);
  state.selectedMovie = res;
  console.log(state.selectedMovie);
  setTimeout(() => {
    const myModal = new bootstrap.Modal(
      document.getElementById("showmovie" + movie)
    );
    myModal.show();
  }, 500);
};
</script>
