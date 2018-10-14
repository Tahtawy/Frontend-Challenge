import About from "../views/About.vue";

export default [
    {
        path: '/about',
        name: 'about',
        meta: { title: 'Users' },
        component: About,
        children: [
            {
                path: '/',
                redirect: { name: 'about' }
            }
        ]
    }
];