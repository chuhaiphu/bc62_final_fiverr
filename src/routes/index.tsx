import { Route } from "react-router-dom";
import UserDetail from "~/components/UserDetail";
import Home from "~/pages/Home";
import { TypeRoute } from "~/types/user";


const routes: TypeRoute[] = [
    {
        path: "",
        element: Home,
        
    },
    {
        path: "user-detail",
        element: UserDetail,

    }
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) { 
            return(
                <Route path={route.path} element={<route.element/>}>
                    {
                        route.nested.map((item)=>(<Route path={item.path} element={<item.element/>}/>))
                    }
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes;