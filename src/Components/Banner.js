import React from "react";
import Livingroom from "./Images/Livingroom.jpg";
import "./Banner.css";

function Banner(){
    return(
        <div className="Banner">
            <div className="fade"></div>
            <div className="Banner_info">
                <div className="Banner_text">
                    <h3>Buy, Rent and Sell Houses</h3>
                    <p>Without leaving the comfort of your house</p>
                    <button className="Button_Banner">Explore Nearby</button>
                </div>
            </div>
            <div className="ImageHouse">
                <img src={Livingroom} alt="House"></img>
            </div>
            
        </div>
    )
}

export default Banner;