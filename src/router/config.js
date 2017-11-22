const routers = [
    {
        path:'/',
        component:require('../components/Home').default
    },
    {
        path:'/table',
        component:require('../components/Table').default
    },
    {
        path:'/login',
        component:require('../components/Login').default
    },
    {
        path:'*',
        component:require('../components/NotFound').default
    }
]

export default routers
