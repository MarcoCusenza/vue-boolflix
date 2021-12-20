<template>
  <main>
    <Searchbar />
    <ContentsList />
  </main>
</template>

<script>
import Searchbar from "../commons/Searchbar.vue";
import ContentsList from "../sections/ContentsList.vue";

export default {
  name: "Main",
  components: {
    Searchbar,
    ContentsList,
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