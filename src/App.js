import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Realtor from "./Components/Realtor";
//import Property from "./Components/Property";
import Login from "./Login";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Login from "./Login";
// import SignupLogin from "./Container/SignupLogin";

function NewApp(){
  
  return(
    // <Router>
    <div className="App">
      <Header />
      <Home />
      <Realtor/>
      <Footer />
      {/* <Property /> */}
      {/* <Login/> */}
        {/* <Route exact path="/Login"><Login/></Route> */}

    </div>
    //</Router>
  )
}

export default NewApp;