import { useCallback, useContext, useEffect } from "react";
import { PickPoints } from "../context/pickPoints";
import { usePickPointLoader } from "./pickPointLoader.hook";

export const useAccessibility = () => {
  const { current, chengeAdress, lenght } = useContext(PickPoints);

  const voice = (text: any) => {
    if (typeof text === "string")
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  };

  return { voice };
};
