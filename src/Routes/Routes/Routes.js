import { createBrowserRouter } from "react-router-dom";
import Booking from "../../pages/Booking/Booking";
import Home from "../../pages/Home/Home";
import Hotels from "../../pages/Hotels/Hotels";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
            return fetch('https://travel-guru-server-ten-indol.vercel.app/places');
        }
    },
    {
        path: '/booking/:id',
        element: <Booking></Booking>,
        loader: async ({ params }) => {
            return fetch(`https://travel-guru-server-ten-indol.vercel.app/places/${params.id}`)
        }
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/hotel/:id',
        element: <PrivateRoute><Hotels></Hotels></PrivateRoute>,
        loader: async ({ params }) => {
            return fetch(`https://travel-guru-server-ten-indol.vercel.app/rooms/${params.id}`)
        }

    }
])

