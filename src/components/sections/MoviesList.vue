<template>
  <div class="movies-list">
    <div class="movie" v-for="(movie, i) in dataShared.movies" :key="i">
      <div class="title-ita">Titolo: {{ movie.title }}</div>
      <div class="title-original">
        Titolo originale: {{ movie.original_title }}
      </div>
      <div class="language">
        Lingua:
        <span
          class="flag"
          :class="movie.original_language"
          v-html="dataShared.myFunc.getFlag(movie.original_language)"
        ></span>
      </div>
      <div class="rank">Voto: {{ movie.vote_average }}</div>
    </div>
  </div>
</template>

<script>
import dataShared from "../../share/dataShared";

export default {
  name: "MoviesList",
  data() {
    return {
      dataShared,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";
.movies-list {
  display: flex;
  flex-wrap: wrap;
  .movie {
    width: 200px;
    margin: 10px;
    background-color: $dark;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .flag:not(.en):not(.it):not(.ja){
      text-transform: uppercase;
      padding: 0 5px;
      background-color: rgb(0, 133, 177);
      font-size: 12px;
      font-weight: bold;
      border-radius: 3px;
    }
  }
}
</style>