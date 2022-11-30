import DashboardLayout from "../Layout/DashboardLayout";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryMobile from "../Pages/Categories/CategoryMobile";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category-mobile/:id',
                element: <PrivateRoute><CategoryMobile></CategoryMobile></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/category-mobile/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
        
    }
])

export default router;