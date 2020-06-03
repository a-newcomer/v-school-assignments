import React from "react";

function Badge(props) {
    return(
        <section className="badge">
            <div className="badgeHeader">
            <h1>{props.info.firstName} {props.info.lastName}</h1>
            </div>
            <div className="badgeMain">
                <div className="row1" >
                    <span>Email: <p> {props.info.email}</p></span>
                    <span>I'm from: <p> {props.info.hometown}</p></span>
                </div>
                <div className="row2" >
                <span>Phone: <p> {props.info.phone}</p></span>
                <span>I love: <p> {props.info.favFood} </p></span>
                </div>
                My Story: 
                <p className="myStory">{props.info.story}</p>
            </div>
             </section>
    )
}

export default Badge