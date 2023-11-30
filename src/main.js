import Vue from "vue";
import App from "./App.vue";
import Header from "./HeaderApp.vue";
import Footer from "./FooterApp.vue";
import News from "./components/BlogNews.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Header,
  Footer,
  News,
  render: (h) => h(App),
}).$mount("#app");
