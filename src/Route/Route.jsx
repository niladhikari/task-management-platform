import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Componets/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "./../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import Dashboard from "../Componets/Dashboard";
import UserHome from "./../Pages/Dashboard/UserHome/UserHome";
import PrivateRoute from "./PrivateRouter";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import TodoList from "./../Pages/Dashboard/TodoList/TodoList";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct/UpdateProduct";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "todoList",
        element: <TodoList></TodoList>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5020/myTask/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
