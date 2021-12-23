import Vue from 'vue';

export default Vue.observable({
  selectVal: "",
  movies: {},
  series: {},
  myFunc: {
    getFlag(lang) {//restituisce l'entity code della bandiera
      if (lang == "it") {
        return `&#x1f1ee;&#x1f1f9;`;
      } else if (lang == "en") {
        return `&#x1f1fa;&#x1f1f8;`;
      } else if (lang == "ja") {
        return `&#x1f1ef;&#x1f1f5;`;
      } else {
        return lang;
      }
    },
    getRank(num) {//restituisce il rank tra 1 e 5
      if ((num / 2 + 0.5) < (Math.ceil(num / 2))) {//verifico se la parte decimale del risultato è < di 0.5
        return Math.floor(num / 2);
      }
      return Math.ceil(num / 2);
    },
    getImage(backdrop, poster) {//restituisce l'immagine di copertina, preferibilmente il backdrop_path
      if (backdrop == null) {
        return poster;
      }
      return backdrop;
    },
  },
});