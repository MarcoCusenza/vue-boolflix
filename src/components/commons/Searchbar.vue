<template>
  <div class="searchbar-container">
    <h2>Cerca un film</h2>
    <div class="search-area">
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        v-model="dataShared.selectVal"
      />
      <button @click="callApi()">Cerca</button>
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
    callApi() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "a0340a46fd6f1a725803d54dae267563",
            query: dataShared.selectVal,
            language: "it-IT",
          },
        })
        .then(function (response) {
          dataShared.contents = response.data.results;
          console.log(response.data.results);
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
    margin: $small-space;
  }
}
</style>