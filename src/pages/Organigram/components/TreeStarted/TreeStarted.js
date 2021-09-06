import { Tree } from "react-organizational-chart";
import React, { useState } from "react";
import CardNodeStarted from "../CardNode/CardNodeStarted";

function TreeStarted() {
  const [fathers, setFathers] = useState([
    {
      idFather: 0,
    },
  ]);
  return (
    <Tree
      className="tree"
      lineWidth={"2px"}
      lineColor={"#AAB4C8"}
      lineBorderRadius={"5px"}
      lineHeight={"30px"}
      label={<CardNodeStarted setFathers={setFathers} fathers={fathers} />}
    ></Tree>
  );
}

export default TreeStarted;
