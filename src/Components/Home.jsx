import React from "react";
import Header from "./Header";
import HowitWork from "./HowitWork";
import About from "./About"
import Services  from "./Services"

const Home = ()=>{
    return(
        <>
            <Header/>
            <HowitWork/>
            <About/>
            <Services/>
        </>
    )
}

export default Home;