import React, {Component} from "react";
import { render } from "react-dom";
import "./Header.css";

class Header extends Component {
    state= {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    render(){
        return(
            <div className="Header">
                <h1 className="Header_logo">VR HouseTours</h1>
                <div className="Searchbar">
                    <input type="text" placeholder="Location"></input>
                    <button className="Button">&#128269;</button>
                </div>
                <ul className={this.state.clicked ? 'Header_links active' : 'Header_links'}>
                     <li className="nav-links"><a href="/">Home</a></li>
                     <li className="nav-links"><a href="#Home">Properties</a></li>
                     <li className="nav-links"><a href="#">Realtor</a></li>
                     <li className="nav-links"><a href="#">Login</a></li>
                </ul>
                <div className="burger toggle" onClick={this.handleClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
    
        )
    }
    
}

export default Header;