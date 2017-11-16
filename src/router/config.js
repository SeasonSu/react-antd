import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Table from '../components/Table/index'
import Login from '../components/Login/index'
const routersConf = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/table',
        component:Table
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'*',
        component:NotFound
    }
]

export default routersConf
