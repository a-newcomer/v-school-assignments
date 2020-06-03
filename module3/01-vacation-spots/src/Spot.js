import React from "react";
import vacationSpots from "./vacSpotsArr";

function Spot(props) {
    const spotStyle = {
        padding: "10px 15px"
    }
    if(props.vacationInfo.timeToGo === "Spring") {
        spotStyle.backgroundColor = "#e4fad9"
    } else if(props.vacationInfo.timeToGo === "Summer") {
        spotStyle.backgroundColor = "#f7dfed"
    } else if (props.vacationInfo.timeToGo === "Winter") {
        spotStyle.backgroundColor = "#dff0f5"
    } else {
        spotStyle.backgroundColor = "#fae3cf"
    }

    let priceHint
    if(props.vacationInfo.price <= 50) {
        priceHint = "$"
    } else if (props.vacationInfo.price <= 500 && props.vacationInfo.price >= 50) {
        priceHint = "$$"
    } else  if (props.vacationInfo.price <= 2000 && props.vacationInfo.price >= 501) {
        priceHint = "$$$"
    }
         
    return(
        <div className="spot" style={spotStyle}>
            <h2>{props.vacationInfo.place}</h2>
            <h3>{props.vacationInfo.timeToGo}</h3>
            <p><strong>{priceHint}</strong></p>
            <p>Suggested Price: {props.vacationInfo.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
        </div>
    )
}


export default Spot