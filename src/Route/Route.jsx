import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Componets/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from './../Pages/Blog/Blog';
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from './../Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
            path: "/blog",
            element:<Blog></Blog>,
        },
        {
            path: "/contact",
            element:<Contact></Contact>,
        },
        {
            path: "/login",
            element:<Login></Login>,
        },
        {
            path: "/register",
            element:<Register></Register>,
        },
    ]
  },
]);

export default router;
