// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SingUp";
import BookService from "../../Pages/BooksService/BookService";
import Bookings from "../../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SingUp></SingUp>
            },
            {
                path:'book/:id',
                element:<PrivetRoute><BookService></BookService></PrivetRoute>,
                loader:({params}) =>fetch(`https://car-doctor-server69.vercel.app/services/${params.id}`)
            },
            {
                path:'bookings',
                element:<PrivetRoute><Bookings></Bookings></PrivetRoute>
               
            }
        ]
    }
]);

export default router;