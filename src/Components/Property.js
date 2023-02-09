import React from 'react'
import Footer from './Footer';
//import Googlemap from './Googlemap';
import Header from './Header';
import Image from "./Images/House main.jpg";
import "./Property.css";

function Property() {
    return (
        <div className="Property">
            <Header />
            <div className="Property-main">
                <div className="House-img"><img src={Image}></img></div>
                <div className="Main-info">
                    <h2>117 West End, Nashville</h2>
                    <h3>Price: $500,00</h3>
                </div>
                <div className="info">
                    <div className="Discription">
                        <h4>Description</h4>
                        <p>Stunning newer craftsman located in West End! Exceptional detail & high-end finishes throughout. 9ft ceilings, hardwood floors, built in speakers & crown molding throughout first floor. Light-filled sophisticated interior boasts custom kitchen cabinetry, granite counter tops,6 gas burner cooktop, pot filler, tile backsplash, under cabinet lighting & walk in pantry. Living room features gas fireplace w/wooden mantel & built-in bookshelves. First floor also features spacious office & half bath. Master suite w/tray ceiling, walk in closet, walk in steam shower w/dual shower head, his/her vanities, oversized soaking tub and balcony. Second floor also features two spacious bedrooms, kids’ bathroom & laundry room. Finished lower level is perfect for entertaining & includes mini kitchenette, 4th bedroom & full bath. Exterior highlights include premium windows & 2 car garage. Beautifully landscaped yard w/irrigation, and aggregate driveway & walkways.</p>
                    </div>
                    <ul>
                        <li>
                            <p>Property Type: single family home</p>
                        </li>
                        <li>
                            <p>Area: 1600 sq-ft</p>
                        </li>
                        <li>
                            <p>Built in: 2004</p>
                        </li>
                        <li>
                            <p>Status: for sale</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <Googlemap/> */}
            <Footer/>
        </div>
    )
}

export default Property
