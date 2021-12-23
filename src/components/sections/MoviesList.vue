<template>
  <div class="container">
    <h3>Film</h3>
    <div class="movies-list">
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
  width: 1000px;
  margin: 60px auto;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
  }

  .movies-list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    .movie {
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
        background-color: $yellow;
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
          background-color: $yellow;
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