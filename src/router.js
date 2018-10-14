import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from "./router/home";
import UserRoutes from "./router/users";
import AboutRoutes from "./router/about";

Vue.use(Router)

const defaultRoute = [
    {
        path: '*',
        redirect: { name: 'home' }
    }
];

const routes = defaultRoute.concat(
    HomeRoutes,
    UserRoutes,
    AboutRoutes
);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'navigation-list--active',
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Github Users'
    next()
});

export default router
