<template>
  <div class="searchbar-container">
    <div class="search-area">
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        v-model="dataShared.selectVal"
        placeholder="Cerca un contenuto..."
        @keypress.enter="callApiMovies(), callApiSeries()"
      />
      <button @click="callApiMovies(), callApiSeries()">Cerca</button>
    </div>
  </div>
</template>

<script>
import dataShared from "../../share/dataShared";
import axios from "axios";

export default {
  name: "Searchbar",
  data() {
    return {
      dataShared,
    };
  },
  methods: {
    callApiMovies() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "a0340a46fd6f1a725803d54dae267563",
            query: dataShared.selectVal,
            language: "it-IT",
          },
        })
        .then(function (response) {
          dataShared.movies = response.data.results;
          // console.log(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    callApiSeries() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "a0340a46fd6f1a725803d54dae267563",
            query: dataShared.selectVal,
            language: "it-IT",
          },
        })
        .then(function (response) {
          dataShared.series = response.data.results;
          // console.log(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";

.searchbar-container {
  font-size: $bigger-text;
  padding: $small-space;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-area * {
    margin: $smallest-space;
    font-size: $small-text;
    padding: 3px 5px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;

    button {
      font-family: "Courier New", Courier, monospace !important;
      font-size: 4px !important;
    }
  }
}
</style>