import React, { PropsWithChildren, useContext } from "react";
import style from "./Adresses.module.scss";
import data from "../../../state.json";
import { PickPoints } from "../../context/pickPoints";
import speaker from "./media/speaker.svg";
import { useAccessibility } from "../../hooks/accessibility.hook";
export default function Adresses() {
  const { current } = useContext(PickPoints);

  return (
    <div className={style.adresses}>
      {data.pickPoints.map((point, i) => {
        return (
          <Adress
            budgets={point.budgets}
            key={i}
            change={current === i ? true : false}
            index={i}
          >
            {point.address}
          </Adress>
        );
      })}
    </div>
  );
}

interface IPropsAdress extends PropsWithChildren {
  budgets: string[];
  change: boolean;
  index: number;
}

function Adress({ budgets, change, index, children }: IPropsAdress) {
  const { chengeAdress, current, lenght } = useContext(PickPoints);
  const { voice } = useAccessibility();
  return (
    <div
      className={
        change ? style.adress + " " + style.adress_change : style.adress
      }
      onClick={() => chengeAdress(index)}
    >
      <div>
        <div className={style.street}>{children}</div>
        <div className={style.options}>
          {budgets.map((item, index) => {
            return <div key={item + index}>{item}</div>;
          })}
        </div>
      </div>
      <div className={style.wrapperSpeaker}>
        <img
          src={speaker}
          alt=""
          style={{ width: "40px" }}
          onClick={() => voice(children)}
        />
      </div>
    </div>
  );
}
