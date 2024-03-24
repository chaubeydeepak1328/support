import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/" style={{textDecoration:'none' , color:'black' ,fontSize:'1.5rem'}}><img style={{ width: '3rem'}} src={logo} alt="" /> T-Squard</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/services" >Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" exact to="/contact" >Contact</NavLink>
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