import { Tree, TreeNode } from "react-organizational-chart";
import React from "react";
import CardNodeStarted from "../CardNode/CardNodeStarted";

function TreeStarted() {
  return (
    <Tree
      className="tree"
      lineWidth={"2px"}
      lineColor={"#AAB4C8"}
      lineBorderRadius={"5px"}
      lineHeight={"30px"}
      label={<CardNodeStarted>Root</CardNodeStarted>}
    ></Tree>
  );
}

export default TreeStarted;
