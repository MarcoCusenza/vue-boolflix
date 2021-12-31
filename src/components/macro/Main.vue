<template>
  <main>
    <MoviesList />
    <SeriesList />
  </main>
</template>

<script>
import MoviesList from "../sections/MoviesList.vue";
import SeriesList from "../sections/SeriesList.vue";

export default {
  name: "Main",
  components: {
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