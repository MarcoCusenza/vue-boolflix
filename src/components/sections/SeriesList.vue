<template>
  <div class="container">
    <h3>Serie TV</h3>
    <div class="series-list">
      <div class="serie" v-for="(serie, i) in dataShared.series" :key="i">
        <div
          class="yes-img"
          v-if="
            dataShared.myFunc.getImage(
              serie.backdrop_path,
              serie.poster_path
            ) != null
          "
        >
          <img
            :src="
              srcBegin +
              dataShared.myFunc.getImage(serie.backdrop_path, serie.poster_path)
            "
            :alt="serie.original_name"
          />
        </div>
        <div class="no-img" v-else>
          {{ serie.original_name }}
        </div>
        <div class="text">
          <div class="title-ita">{{ serie.name }}</div>
          <div class="title-original" v-if="serie.name != serie.original_name">
            {{ serie.original_name }}
          </div>
          <div class="language">
            Lingua:
            <span
              class="flag"
              :class="serie.original_language"
              v-html="dataShared.myFunc.getFlag(serie.original_language)"
            ></span>
          </div>
          <div class="rank">
            <span
              class="star-full"
              v-for="i in dataShared.myFunc.getRank(serie.vote_average)"
              :key="i"
              >&#9733;</span
            >
            <span
              class="star-empty"
              v-for="x in 5 - dataShared.myFunc.getRank(serie.vote_average)"
              :key="-x"
              >&#9733;</span
            >
          </div>
        </div>
      </div>
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
      srcBegin: "https://image.tmdb.org/t/p/w300",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/partials/variables.scss";

.container {
  width: 1000px;
  margin: 60px auto;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
  }
  .series-list {
    width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    .serie {
      width: 200px;
      margin: 10px;
      background-color: $dark;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .yes-img,
      .no-img {
        height: 200px;
        width: 200px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .no-img {
        background-color: $lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        padding: 15px;
      }

      .text {
        .title-ita {
          text-align: center;
          font-weight: bold;
          margin: 2px 0 3px 0;
        }

        .title-original {
          font-style: italic;
        }

        .flag:not(.en):not(.it):not(.ja) {
          text-transform: uppercase;
          padding: 0 5px;
          background-color: $lightblue;
          font-size: 12px;
          font-weight: bold;
          border-radius: 3px;
        }

        .star-full {
          color: $yellow;
        }

        .star-empty {
          color: $darker;
        }
      }
    }
  }
}
</style>