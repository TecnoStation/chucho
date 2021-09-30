import { Tree, TreeNode } from "react-organizational-chart";
import React, { useState } from "react";
import CardNodeStartedGrandFather from "../CardNode/CardNodeStartedGrandFather";
import CardNodeStartedFather from "../CardNode/CardNodeStartedFather";

function TreeStarted({ setMessageOrg, setEraser }) {
  const [fathers, setFathers] = useState([]);
  return (
    <Tree
      className="tree"
      lineWidth={"2px"}
      lineColor={"#AAB4C8"}
      lineBorderRadius={"5px"}
      lineHeight={"30px"}
      label={
        <CardNodeStartedGrandFather
          setMessageOrg={setMessageOrg}
          setFathers={setFathers}
          fathers={fathers}
          setEraser={setEraser}
        />
      }
    >
      {fathers.map((father, index) => (
        <TreeNode
          label={
            <CardNodeStartedFather
              father={father}
              setFathers={setFathers}
              fathers={fathers}
            />
          }
        ></TreeNode>
      ))}
    </Tree>
  );
}

export default TreeStarted;
