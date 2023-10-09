<template>
    <div class="col-md-2 mb-2">
      <div class="movie-card" @click="showMovieDetails">
        <div class="card">
          <div class="image-container">
            <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : 'placeholder.jpg'" class="card-img-top" :alt="movie.title">
          </div>
          <div class="card-body">
            <!-- Movie title and overview -->
            <!-- <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieCard',
    props: {
      movie: Object, // Pass movie details as a prop
    },
    methods: {
      showMovieDetails() {
        this.$emit('show-movie-details', this.movie); // Emit the selected movie to the parent component
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add scoped CSS styles for your component here */
  .movie-card {
    margin: 10px;
    position: relative; /* Add this to position the button */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
  
  /* Style the card as per your requirements */
  .card {
    width: 100%;
    height: 250px;
    /* Customize card styles here */
    position: relative;
    transition: transform 0.3s; /* Add a smooth transition on hover */
  }
  
  /* Apply hover effect */
  .movie-card:hover .card {
    transform: scale(1.05); /* Scale up the card on hover */
  }
  
  .image-container img {
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  