<template>
  <div class="container">
    <h3>Film</h3>
    <div class="movies-list">
      <div class="no-search" v-if="Object.keys(dataShared.movies).length == 0">
        Non hai eseguito alcuna ricerca
      </div>
      <div class="movie" v-for="(movie, i) in dataShared.movies" :key="i">
        <div
          class="yes-img"
          v-if="
            dataShared.myFunc.getImage(
              movie.backdrop_path,
              movie.poster_path
            ) != null
          "
        >
          <img
            :src="
              srcBegin +
              dataShared.myFunc.getImage(movie.backdrop_path, movie.poster_path)
            "
            :alt="movie.title"
          />
        </div>
        <div class="no-img" v-else>{{ movie.title }}</div>
        <div class="text">
          <div class="title-ita">{{ movie.title }}</div>
          <div
            class="title-original"
            v-if="movie.title != movie.original_title"
          >
            {{ movie.original_title }}
          </div>
          <div class="language">
            Lingua:
            <span
              class="flag"
              :class="movie.original_language"
              v-html="dataShared.myFunc.getFlag(movie.original_language)"
            ></span>
          </div>
          <div class="rank">
            <span
              class="star-full"
              v-for="i in dataShared.myFunc.getRank(movie.vote_average)"
              :key="i"
              >&#9733;</span
            >
            <span
              class="star-empty"
              v-for="x in 5 - dataShared.myFunc.getRank(movie.vote_average)"
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
  name: "MoviesList",
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

  .movies-list {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;

    .movie {
      width: 90%;
      background-color: $darker;
      margin: 20px auto;
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

    .movie:hover {
      .text {
        display: block;
      }
    }
  }
}
</style>