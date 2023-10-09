import axios from 'axios';

const API_KEY = '52fad48c640dbaac2220e83bd45aaa1a';
const mdb = 'https://api.themoviedb.org/3';

export default {
  // get a list of movies from moviedb 
  async search(movieName) {
    try {
      const response = await axios.get(`${mdb}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: movieName,
        },
      });
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },

  // get single movie
  async getMovie(movieId) {
    try {
      const response = await axios.get(`${mdb}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};