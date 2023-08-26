import React from "react";

const About = (props) => {
    const defaultImage = "https://via.placeholder.com/215";

    return (
        <>
        <aside>
        <img src={props.image || defaultImage} alt="blog logo"></img>
        <p>{props.about}</p>
        </aside>
        </>
    )
}

export default About