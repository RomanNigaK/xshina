import React, { useCallback, useState } from "react";
import data from "../../state.json";
var DG = require("2gis-maps");
export const usePickPointLoader = () => {
  const [currentPoint, setCurrentPoint] = useState(0);

  let latitude = data.pickPoints[currentPoint].latitude;
  let longitude = data.pickPoints[currentPoint].longitude;
  let lenght = data.pickPoints.length;

  const [coordinates, setcoordinates] = useState([latitude, longitude]);

  const togglePoint = useCallback(
    (pointIndex: number) => {
      if (pointIndex === currentPoint) return;

      setCurrentPoint(pointIndex);
      setcoordinates([latitude, longitude]);
    },
    [currentPoint]
  );

  const loadMap = useCallback(
    (container: string) => {
      let wrapperMap: HTMLElement | null =
        document.getElementById("wrapperMap");
      wrapperMap!.removeChild(document.getElementById("map")!);
      const newMap = document.createElement("div");
      newMap.setAttribute("id", "map");
      newMap.setAttribute("class", "map");
      wrapperMap!.appendChild(newMap);

      let map = DG.map(container, {
        center: [latitude, longitude],
        zoom: 15,
      });
      DG.marker([latitude, longitude]).addTo(map);
    },
    [currentPoint]
  );

  // let toggleKey = () => {
  //   document.addEventListener("keydown", function (event) {
  //     if (event.code == "ArrowDown" && (event.ctrlKey || event.metaKey)) {
  //       if (currentPoint + 1 === lenght) return;
  //       togglePoint(currentPoint + 1);
  //       console.log("dpwn!");
  //     }
  //     if (event.code == "ArrowUp" && (event.ctrlKey || event.metaKey)) {
  //       if (currentPoint - 1 < 0) return;
  //       togglePoint(currentPoint - 1);
  //       console.log("up!");
  //     }
  //   });
  // };

  return { currentPoint, togglePoint, coordinates, loadMap, lenght };
};
