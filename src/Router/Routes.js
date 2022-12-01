import DashboardLayout from "../Layout/DashboardLayout";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryMobile from "../Pages/Categories/CategoryMobile";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
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
            },
            {
                path: '/dashboard/allSeller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path:'/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/my-product', 
                element: <MyProduct></MyProduct>  
            }
        ]
        
    },
    {
        path:'*',
        element: <div  className='text-center'>
          <h2>This Route Not Found.</h2>
          <h2>404</h2>
        </div>
      }
])

export default router;