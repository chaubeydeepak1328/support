import React from "react";

const Card = (props) => {

    return (
        <>
            <div className="col-12 col-lg-4 text-center  work-container-subdiv">
                <i class={`fontawesome-style ${props.logo}`} ></i>
                <h2 className="sub-heading">{props.title}</h2>
                <p className="main-hero-para w-100">{props.info}</p>
            </div>

        </>
    )
}

export default Card;


