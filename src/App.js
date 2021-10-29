import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/NavBar/Navb";
import FetchApi from "./Components/NasaApi/FetchApi";
import Map from "./Components/GoogleMap/Map";

const App = () => {
  return (
    <>
      <Navb />
      <Map/>

      {/* <FetchApi/> */}
    </>
  );
};

export default App;
