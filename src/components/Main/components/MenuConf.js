const MenuList  = [
    {
        icon:'user',
        to:'/',
        name:'主页'
    },
    {
        icon:'home',
        to:'/table',
        name:'表格'
    },
    {
        icon:'user',
        name:'home',
        subMenu:[
            {
                icon:'user',
                name:'404',
                subMenu:[
                    {
                        icon:'user',
                        to:'/404',
                        name:'last'
                    }
                ]
            }
        ]
    }
]

export default MenuList
