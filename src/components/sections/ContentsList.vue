<template>
  <div class="content-list">
    <div class="movie" v-for="(movie, i) in dataShared.contents" :key="i">
      <div class="title-ita">Titolo: {{ movie.title }}</div>
      <div class="title-original">
        Titolo originale: {{ movie.original_title }}
      </div>
      <div class="language">Lingua: {{ movie.language }}</div>
      <div class="rank">Voto: {{ movie.vote_average }}</div>
    </div>
  </div>
</template>

<script>
import dataShared from "../../share/dataShared";

export default {
  name: "ContentsList",
  data() {
    return {
      dataShared,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";
.content-list {
  display: flex;
  flex-wrap: wrap;
  .movie {
    width: 200px;
    margin: 10px;

    background-color: $dark;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>