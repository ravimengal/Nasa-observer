import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/NavBar/Navb";
import Map from "./Components/GoogleMap/Map";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/NavBar/About";
import axios from "axios"


const App = () => {
const [nasadata, setNasaData] = useState()
const [loader,setLoader] = useState(false)

const fetchData = async ()=>{

  try{
    setLoader(true)
    const res= await axios.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events")
    console.log(res.data)
    setNasaData(res.data)
    setLoader(false)
  


  }catch(error){

      console.log('unable to fetch data', error)
  
  }
 
}

useEffect(()=>{

    
fetchData();

},[])

  return (
    <>
      <Navb />
      <Router>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/wildfire" element={<Map/>}/>
          

        </Routes>
      </Router>
    </>
  );
};

export default App;
