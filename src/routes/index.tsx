import { Route } from "react-router-dom";
import CourseClassidicationPage from "~/pages/Course-Classification";

import Home from "~/pages/Home";
import UserDetailPage from "~/pages/UserDetail";
import { TypeRoute } from "~/types/user";


const routes: TypeRoute[] = [
    {
        path: "",
        element: Home,
        
    },
    {
        path: "user-detail",
        element: UserDetailPage,

    },
    {
        path: "course-classification",
        element: CourseClassidicationPage,

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