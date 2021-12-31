<template>
  <div class="container">
    <h3>Serie TV</h3>
    <div class="series-list">
      <div class="no-search" v-if="Object.keys(dataShared.series).length == 0">
        Non hai eseguito alcuna ricerca
      </div>
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
  max-width: 1200px;
  margin: 60px auto;
  background-color: $dark;

  h3 {
    text-transform: uppercase;
    font-size: 20px;
    padding: 10px 0 0 15px;
  }

  .no-search {
    width: 300%;
    padding: 10px 0 0 15px;
  }
  .series-list {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;

    .serie {
      width: 90%;
      margin: 20px auto;
      background-color: $darker;
      border-radius: 10px;
      overflow: hidden;
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .yes-img,
      .no-img {
        height: 350px;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .no-img {
        overflow: hidden; /* nasconde il testo in overflow */
        background-color: $red;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
        padding: 15px;
      }

      .text {
        width: 100%;
        padding: 10px;
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.76);

        .title-ita {
          text-align: center;
          font-weight: bold;
          margin: 2px 0 3px 0;
          overflow: hidden; /* nasconde il testo in overflow */
          text-overflow: ellipsis; /* aggiunge i "..." */
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1; /* numero di righe da vedere */
        }

        .title-original {
          text-align: center;
          font-style: italic;
          overflow: hidden; /* nasconde il testo in overflow */
          text-overflow: ellipsis; /* aggiunge i "..." */
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1; /* numero di righe da vedere */
        }

        .flag:not(.en):not(.it):not(.ja) {
          text-transform: uppercase;
          padding: 0 5px;
          background-color: $red;
          font-size: 12px;
          font-weight: bold;
          border-radius: 3px;
        }

        .star-full {
          color: $yellow;
        }

        .star-empty {
          color: $grey;
        }
      }
    }
    .serie:hover {
      .text {
        display: block;
      }
    }
  }
}
</style>