import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Work from "./views/Work.vue";
import Contact from "./views/Contact.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes:
  [
    { path: '/', component: Home },
    { path: "/about", component: About },
    { path: "/work", component: Work },
    { path: "/contact", component: Contact }
  ]
});