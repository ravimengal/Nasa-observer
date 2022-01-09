import React from "react";
import GoogleMapReact from "google-map-react";
import './Map.css'
import Locaionmarker from "../LocationMarker/Locaionmarker";


const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDIlGwn1DUIHh-K87v7tNY0_mOw6qeNgF8" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
      <Locaionmarker lat={center.lat} lng={center.lng}/>
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 19.076,
    lng: 72.8777,
  },
  zoom: 6,
};

export default Map;
