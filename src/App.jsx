import React from "react";  
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Header from "./Components/Header";
import HowitWork from "./Components/HowitWork";


const App = ()=>{
    return(
        <>
            <Navbar/>
            <Header/>
            <HowitWork/>
        </>
    )
}

export default App;