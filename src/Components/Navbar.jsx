import React from "react";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="..."><img style={{width:'3rem'}} src="./Images/logo.png" alt="" /> T-Squard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="...">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="...">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="...">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="...">Contact</a>
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