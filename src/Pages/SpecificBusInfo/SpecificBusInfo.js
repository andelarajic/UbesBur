import React from "react";
import Map from "../../Components/Map/Map";
import "./SpecificBusInfo.css";
import DriverCard from "../../Components/DriverCard/DriverCard";
import Price from "../../Components/Price/Price";
import DestinationMap from "../../Components/DestinationMap/DestinationMap";
import UberbusInfo from "../../Components/UberbusInfo/UberbusInfo";
import Arrow from "../../Components/Arrow/Arrow";

function SpecificBusInfo(props) {
  
  const driver = JSON.parse(localStorage.getItem("selected-driver"))

  return (
    <div>
      <div className="ArrowPos">
        <Arrow back={() => props.history.goBack()} />
      </div>
      <Map />
      <UberbusInfo noOfPassengers={driver.noOfPassengers}/>
      <hr className="hr" />
      <DriverCard driver={driver}/>
      <hr className="hr" />
      <Price />
      <hr className="hr1" />
      <DestinationMap />
    </div>
  );
}

export default SpecificBusInfo;
