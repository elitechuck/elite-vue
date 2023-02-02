import Vue from "vue";
import VueRouter from "vue-router";
import {TOKEN_NAME} from "@/services/ServerConstants";
// import HomeView from "../views/HomeView.vue";

const HomeView = () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue");
const About = () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
const Login = () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {requiresAuth: true},
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: {requiresAuth: true},
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {requiresAuth: false},
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(function (to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem(TOKEN_NAME) == null) {
            next({name: 'login'});
        }
    } else {
        if (localStorage.getItem(TOKEN_NAME) != null) {
            next({name: 'home'});
        }
    }

    next();
});

export default router;

