<template>
  <main>
    <Searchbar />
    <h3>Lista di film</h3>
    <MoviesList />
    <h3>Lista di serie</h3>
    <SeriesList />
  </main>
</template>

<script>
import Searchbar from "../commons/Searchbar.vue";
import MoviesList from "../sections/MoviesList.vue";
import SeriesList from "../sections/SeriesList.vue";

export default {
  name: "Main",
  components: {
    Searchbar,
    MoviesList,
    SeriesList,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";

main {
  background-color: $darker;
  color: $light-text;
}
</style>