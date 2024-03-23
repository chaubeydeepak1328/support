import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <NavLink class="navbar-brand" to="/" style={{textDecoration:'none' , color:'black' ,fontSize:'1.5rem'}}><img style={{ width: '3rem'}} src={logo} alt="" /> T-Squard</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link active" aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" exact to="/services" >Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" exact to="/about" >About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link active" exact to="/contact" >Contact</NavLink>
                            </li>

                            <div className="d-flex g-2 justify-content-center align-content-center ">
                                <button className="btn btn-style rounded-5 btn-style-border" type="submit">Login in</button>
                                <button className="btn btn-style rounded-5" type="submit">Sign Up</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;