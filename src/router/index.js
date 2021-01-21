import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Index from "../views/index";
import About from "../views/about";
import Test from "../views/test";
import Login from "../views/login";
import Chart from "../views/chart";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "nav-home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: Index
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/about",
        name: "about",
        component: About
      },
      {
        path: "/test",
        name: "test",
        component: Test
      },
      {
        path: "/chart",
        name: "chart",
        component: Chart
      }
    ]
  }


];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
