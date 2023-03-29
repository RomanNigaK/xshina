import React, { useContext, useEffect } from "react";
import Adresses from "./components/adresses/Adresses";
import Map from "./components/map/Map";
import { PickPoints } from "./context/pickPoints";
import "./global.scss";
import { useAccessibility } from "./hooks/accessibility.hook";
import { usePickPointLoader } from "./hooks/pickPointLoader.hook";

export default function App() {
  const { currentPoint, togglePoint, coordinates, loadMap, lenght } =
    usePickPointLoader();

  return (
    <div id="content">
      <PickPoints.Provider
        value={{
          current: currentPoint,
          chengeAdress: togglePoint,
          coordinates,
          loadMap,
          lenght,
        }}
      >
        <Adresses />
        <Map />
      </PickPoints.Provider>
    </div>
  );
}
