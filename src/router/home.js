import Home from "../views/Home.vue";

export default [
    {
        path: '/',
        name: 'home',
        meta: { title: 'Home' },
        component: Home,
        children: [
            {
                path: '/home',
                redirect: { name: 'home' }
            }
        ]
    },
]