import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import { routes } from "./routes";

const router = new VueRouter({
  base:
    process.env.NODE_ENV === "production"
      ? "/vue-2-simple-project-example/"
      : "/",
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
