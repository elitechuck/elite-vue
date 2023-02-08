import Vue from "vue";
import VueRouter from "vue-router";
import {TOKEN_NAME} from "@/services/ServerConstants";


const HomeView = () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue");
const About = () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue");

const Login = () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue");
const Base = () => import(/* webpackChunkName: "login" */ "../views/Base.vue");
const Crews = () => import(/* webpackChunkName: "login" */ "../views/crews/Crews.vue");
const CrewIndex = () => import(/* webpackChunkName: "login" */ "../views/crews/CrewIndex.vue");
const CrewCreate = () => import(/* webpackChunkName: "create" */ "../views/crews/CrewCreate.vue");
const CrewView = () => import(/* webpackChunkName: "login" */ "../views/crews/CrewView.vue");
const CrewUpdate = () => import(/* webpackChunkName: "login" */ "../views/crews/CrewUpdate.vue");


Vue.use(VueRouter);

const routes = [
    { path: "/login", name: "login", component: Login, meta: {requiresAuth: false} },
    {
        path: "/", name: "base", component: Base, meta: {requiresAuth: true},
        children: [
            {
                path: 'crews', name: 'crews', component: Crews, redirect: 'crews/index',

                children: [
                    {
                        path: 'index', name: 'CrewIndex', component: CrewIndex,
                    },
                    {
                        path: 'create', name: 'CrewCreate', component: CrewCreate,
                    },
                    {
                        path: 'view/:id', name: 'CrewView', component: CrewView,
                    },
                    {
                        path: 'update/:id', name: 'CrewUpdate', component: CrewUpdate,
                    },
                ],
            },
            // {
            //     path: 'crews/view/:id', name: 'crewView', component: crewView,
            // },
            {
                path: 'home', name: 'home', component: HomeView,
            },
            { path: "about", name: "about", component: About },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active',
});

router.beforeEach(function (to, from, next) {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem(TOKEN_NAME) === null) {
            next({name: 'login'});
        }
    } else {
        if (localStorage.getItem(TOKEN_NAME) !== null) {
            next({name: 'home'});
        }
    }

    next();
});

export default router;

