import Users from "../views/Users.vue";

export default [
    {
        path: '/users',
        name: 'users',
        meta: { title: 'Users' },
        component: Users,
        children: [
            {
                path: ':login',
                name: 'userDetails',
                component: Users
            }
        ]
    }
]