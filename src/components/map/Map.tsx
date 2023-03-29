import React, { useContext, useEffect } from "react";
import style from "./Map.module.scss";

import { PickPoints } from "../../context/pickPoints";
export default function Map() {
  const { coordinates, loadMap } = useContext(PickPoints);

  useEffect(() => {
    loadMap("map");
  }, [coordinates]);

  return (
    <div id="wrapperMap" className={style.wrapperMap}>
      {/* класс map прописан в глобальных стилях */}
      <div id="map"></div>
    </div>
  );
}
