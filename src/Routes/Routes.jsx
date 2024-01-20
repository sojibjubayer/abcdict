import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/shared/NotFound";
import Home from "../pages/home/Home";




export const router = createBrowserRouter([{

        path:'/',
        element:<Main></Main>,
        errorElement:<NotFound></NotFound>,
        children:[{
            path:'/',
            element:<Home></Home>
        }]
}
])