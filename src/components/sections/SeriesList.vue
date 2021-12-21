<template>
  <div class="series-list">
    <div class="serie" v-for="(serie, i) in dataShared.series" :key="i">
      <div class="title-ita">Titolo: {{ serie.name }}</div>
      <div class="title-original">
        Titolo originale: {{ serie.original_name }}
      </div>
      <div class="language">
        Lingua:
        <span
          class="flag"
          :class="serie.original_language"
          v-html="dataShared.myFunc.getFlag(serie.original_language)"
        ></span>
      </div>
      <div class="rank">Voto: {{ serie.vote_average }}</div>
    </div>
  </div>
</template>

<script>
import dataShared from "../../share/dataShared";

export default {
  name: "SeriesList",
  data() {
    return {
      dataShared,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";
.series-list {
  display: flex;
  flex-wrap: wrap;
  .serie {
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