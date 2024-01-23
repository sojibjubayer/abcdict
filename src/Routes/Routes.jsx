import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/shared/NotFound";
import Home from "../pages/home/Home";
import Ab from "../pages/ab/Ab";
import AbChapter2 from "../pages/ab/chapter2/AbChapter2";
import Chapter2 from "../pages/chapterwise/chapter2/Chapter2";
import Register from "../pages/register/Register";
import Mcq from "../mcq/Mcq";
import Writer from "../pages/writer/Writer";
import McqChapter1 from "../mcq/McqChapter1";
import McqChapter2 from "../mcq/McqChapter2";
import McqChapter3 from "../mcq/McqChapter3";
import McqChapter4 from "../mcq/McqChapter4";
import McqChapter5 from "../mcq/McqChapter5";
import McqChapter6 from "../mcq/McqChapter6";
import Chapter3 from "../pages/chapterwise/chapter3/Chapter3";
import Chapter4 from "../pages/chapterwise/chapter4/Chapter4";
import Chapter5 from "../pages/chapterwise/chapter5/Chapter5";
import Chapter6 from "../pages/chapterwise/chapter6/Chapter6";
import Chapter1 from "../pages/chapterwise/chapter1/Chapter1";
import AbChapter1 from "../pages/ab/chapter1/ABChapter1";
import AbChapter3 from "../pages/ab/chapter3/AbChapter3";
import AbChapter4 from "../pages/ab/chapter4/AbChapter4";
import AbChapter5 from "../pages/ab/chapter5/AbChapter5";
import AbChapter6 from "../pages/ab/chapter6/AbChapter6";
import Semester1 from "../pages/ab/semester1/Semester1";




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
                path:'/notes/chapter1',
                element:<Chapter1></Chapter1>
            },
            {
                path:'/notes/chapter2',
                element:<Chapter2></Chapter2>
            },
            {
                path:'/notes/chapter3',
                element:<Chapter3></Chapter3>
            },
            {
                path:'/notes/chapter4',
                element:<Chapter4></Chapter4>
            },
            {
                path:'/notes/chapter5',
                element:<Chapter5></Chapter5>
            },
            {
                path:'/notes/chapter6',
                element:<Chapter6></Chapter6>
            },
          
            {
                path:'/ab',
                element:<Ab></Ab>
            },
            {
                path:'/ab/chapter1',
                element:<AbChapter1></AbChapter1>
            },
            {
                path:'/ab/chapter2',
                element:<AbChapter2></AbChapter2>
            },
            {
                path:'/ab/chapter3',
                element:<AbChapter3></AbChapter3>
            },
            {
                path:'/ab/chapter4',
                element:<AbChapter4></AbChapter4>
            },
            {
                path:'/ab/chapter5',
                element:<AbChapter5></AbChapter5>
            },
            {
                path:'/ab/chapter6',
                element:<AbChapter6></AbChapter6>
            },
           
          
            {
                path:'/mcq',
                element:<Mcq></Mcq>
            },
            {
                path:'/mcq/chapter1',
                element:<McqChapter1></McqChapter1>
            },
            {
                path:'/mcq/chapter2',
                element:<McqChapter2></McqChapter2>
            },
            {
                path:'/mcq/chapter3',
                element:<McqChapter3></McqChapter3>
            },
            {
                path:'/mcq/chapter4',
                element:<McqChapter4></McqChapter4>
            },
            {
                path:'/mcq/chapter5',
                element:<McqChapter5></McqChapter5>
            },
            {
                path:'/mcq/chapter6',
                element:<McqChapter6></McqChapter6>
            },
            {
                path:'aboutWriter',
                element:<Writer></Writer>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/1st-semester',
                element:<Semester1></Semester1>
            },
        ]
    }
])