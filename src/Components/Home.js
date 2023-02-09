import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import Image from "./Images/House main.jpg";

function Home(){
    return(
        <div className="Home">
            <Banner />
            <div className="Home_section">
                <Card 
                    src={Image}
                    title="3 bedroom house"
                    description=""
                    price="$500,000"
                />
                <Card 
                    src=""
                    title="2 bedroom house"
                    description=""
                    price="$300,000"
                />
                <Card 
                    src=""
                    title="6 bedroom house"
                    description=""
                    price="$1,500,000"
                />
            </div>
            <div className="Home_section">
                <Card 
                    src=""
                    title="1 bedroom house"
                    description=""
                    price="$209,000"
                />
                <Card 
                    src=""
                    title="2 bedroom house"
                    description=""
                    price="$450,000"
                />
                <Card 
                    src=""
                    title="4 bedroom house"
                    description=""
                    price="$800,000"
                />
            </div>
        </div>
    )
}

export default Home;