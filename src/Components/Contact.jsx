import React from "react";

import Img_credit from "../Images/credit.jpeg"


const Contact = () => {
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect with Our  <br /> Sales Team
                                    </h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit perspiciatis eos.</p>
                                    <figure>
                                        <img src={Img_credit} alt="" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="post">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" placeholder="First Name" className="form-control" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" placeholder="Last Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="phone" placeholder="Phone Number" className="form-control" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email" placeholder="Email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" placeholder="Add Address" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" placeholder="Enter your Message" className="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked" className="main-hero-para">
                                                I agree that the Tsquard can use this email ,phone to contact me in future and the all the information given by me is true
                                            </label>
                                            <button type="submit" className="btn btn-style w-100 contact-btn">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;