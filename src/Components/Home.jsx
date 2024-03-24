import React from "react";
import Header from "./Header";
import HowitWork from "./HowitWork";
import About from "./About"
import Services  from "./Services"
import Contact from "./Contact";
import Footer from "./Footer";

const Home = ()=>{
    return(
        <>
            <Header/>
            <HowitWork/>
            <About/>
            <Services/>
            <Contact/>
        </>
    )
}

export default Home;