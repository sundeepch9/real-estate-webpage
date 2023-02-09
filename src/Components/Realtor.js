import React from 'react'
import "./Realtor.css"

function Realtor() {
    return (
        <div className="Realtor">
            <h2>Realtors</h2>
            <p className="large-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
            <div className="Agents">
                <div class="card">
                    <img src="https://onclickwebdesign.com/wp-content/uploads/person_1.jpg" alt="Realtor 1" />
                    <h3>Kaiara Spencer</h3>
                    <p>Real Estate Agent</p>
                </div>

                <div class="card">
                    <img src="https://onclickwebdesign.com/wp-content/uploads/person_2.jpg" alt="Realtor 1" />
                    <h3>Dave Simpson</h3>
                    <p>Real Estate Agent</p>
                </div>

                <div class="card">
                    <img src="https://onclickwebdesign.com/wp-content/uploads/person_3.jpg" alt="Realtor 1" />
                    <h3>Ben Thompson</h3>
                    <p>Real Estate Agent</p>
                </div>
            </div>
        </div>
    )
}

export default Realtor
