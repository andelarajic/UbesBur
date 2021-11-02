import React, { useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

function Map({ to, from }) {
  const directionsService = new window.google.maps.DirectionsService();

  const [direction, setDirection] = useState("");
  console.log("F: " + from + " T: " + to);
  directionsService.route(
    {
      origin: from,
      destination: to,
      travelMode: window.google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirection(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );

  return (
    <GoogleMap
      mapContainerStyle={{
        height: "20vh",
        width: "40%",
        position: "relative",
        float: "right",
        margin: "20px",
        zIndex: 0,
      }}
    >
      <DirectionsRenderer directions={direction} />
    </GoogleMap>
  );
}

export default Map;
