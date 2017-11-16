const MenuList  = [
    {
        icon:'user',
        to:'/',
        name:'home'
    },
    {
        icon:'home',
        to:'/table',
        name:'table'
    },
    {
        icon:'user',
        to:'/404',
        name:'home',
        title:'lala',
        subMenu:[
            {
                icon:'user',
                to:'/404',
                name:'404'
            }
        ]
    }
]

export default MenuList
