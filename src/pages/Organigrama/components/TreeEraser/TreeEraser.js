import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import CardNodeErase from "../CardNode/CardNodeErase";

export default function TreeEraser() {
  return (
    <>
      <Tree
        className="tree"
        lineWidth={"2px"}
        lineColor={"#AAB4C8"}
        lineBorderRadius={"5px"}
        lineHeight={"30px"}
        label={<CardNodeErase>Root</CardNodeErase>}
      >
        <TreeNode label={<CardNodeErase />} />
        <TreeNode label={<CardNodeErase />} />
      </Tree>
    </>
  );
}
