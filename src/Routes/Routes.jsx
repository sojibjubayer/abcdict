import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/shared/NotFound";
import Home from "../pages/home/Home";
import Ab from "../pages/ab/Ab";
import AbChapter2 from "../pages/ab/chapter2/AbChapter2";
import Chapter2 from "../pages/chapterwise/chapter2/Chapter2";
import Register from "../pages/register/Register";




export const router = createBrowserRouter([{

        path:'/',
        element:<Main></Main>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
                path:'/ab',
                element:<Ab></Ab>
            },
            {
                path:'/ab/chapter-2',
                element:<AbChapter2></AbChapter2>
            },
            {
                path:'chapter2',
                element:<Chapter2></Chapter2>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])