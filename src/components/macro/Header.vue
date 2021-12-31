<template>
  <header>
    <!-- Logo BOOLFLIX -->
    <a href="https://fontmeme.com/netflix-font/"
      ><img
        src="https://fontmeme.com/permalink/211231/c072857f28ffed69c9266a55183f4c20.png"
        alt="netflix-font"
        border="0"
    /></a>
    <Searchbar />
  </header>
</template>

<script>
import Searchbar from "../commons/Searchbar.vue";

export default {
  name: "Header",
  components: {
    Searchbar,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";

header {
  background-color: $darkest;
  color: $light-text;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    img {
      height: 70px;
    }
  }
}
</style>