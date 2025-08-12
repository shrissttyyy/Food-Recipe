import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";

<Link to="/gallery">Gallery</Link>


export default function MainNavigation() {
    return (
        <>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </>
    )
}