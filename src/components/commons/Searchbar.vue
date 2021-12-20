<template>
  <div class="searchbar-container">
    <h2>Cerca un film</h2>
    <div class="search-area">
      <input type="text" name="searchbar" id="searchbar" v-model="dataShared.selectVal"/>
      <button>Cerca</button>
    </div>
  </div>
</template>

<script>
import dataShared from "../../share/dataShared";

export default {
  name: "Searchbar",
  data() {
    return {
      dataShared,
    };
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