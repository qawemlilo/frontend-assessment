<template>
  <div class="col-md-3 m-4 card border border-1">
    <div class="card-header">
      <!-- <img :src="movie.poster_path" alt="" /> -->
      <h2>{{ movie.original_title }}</h2>
    </div>
    <div class="card-body">
      <p>Description: {{ movie.overview }}</p>
    </div>
    <div class="card-footer">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
      >
        View Movie Details
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["movie"],
};

/*

adult
: 
false
backdrop_path
: 
null
genre_ids
: 
[35]
id
: 
810821
original_language
: 
"en"
original_title
: 
"Bathroom"
overview
: 
"\"Speech about cleanliness\" according to its author. Two characters cramped in bathroom. Glamour trash. While Anne talks about her cats, and her mother, making up, Hans Christian tells while blowing into bathroom sink a scene film Boudu sauvé des eaux during which Boudu (Michel Simon) who has the mania to spit on the floor lenght of time in bookseller shop who saved the life of Boudu, is reprimanded by this one ; Hans Christian is recreating to his girl friend the dialogue between two characters' Jean Renoir film."
popularity
: 
0.6
poster_path
: 
"/b4w9MVkqfeLSAisjlSGRlkcZzED.jpg"
release_date
: 
"1970-01-01"
title
: 
"Bathroom"
video
: 
false
vote_average
: 
0
vote_count
: 
0
*/
</script>
