import React from "react";  
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

import { Routes, Route } from "react-router-dom";





const App = ()=>{
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/services" Component={Services} />
                <Route exact path="/contact" Component={Contact} />
            </Routes>
            
        </>
    )
}

export default App;