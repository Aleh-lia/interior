import bar from "./bar.js";
import Vue from "vue";
bar();
new Vue({
  el: "#container",
  data: {
    value: "Hello From Vue Again",
  },
});
