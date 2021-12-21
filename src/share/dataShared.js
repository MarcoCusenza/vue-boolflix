import Vue from 'vue';

export default Vue.observable({
  selectVal: "",
  movies: {},
  series: {},
  myFunc: {
    getFlag(lang) {
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
  },
});