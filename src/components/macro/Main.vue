<template>
  <main>
    <Searchbar />
  </main>
</template>

<script>
import Searchbar from "../commons/Searchbar.vue";

export default {
  name: "Main",
  components: {
    Searchbar,
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