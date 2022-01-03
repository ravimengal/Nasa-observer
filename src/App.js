import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/NavBar/Navb";
import FetchApi from "./Components/NasaApi/FetchApi";
import Map from "./Components/GoogleMap/Map";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./Components/NavBar/About";

const App = () => {
  

  
  return (
    <>
     
      <Navb />
      <Map/>
      <FetchApi/>
      
       <About/>
    </>
  );
};

export default App;
