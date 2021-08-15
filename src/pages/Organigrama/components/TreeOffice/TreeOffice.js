import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import CardNode from "../CardNode/CardNode";

function TreeOffice() {
  return (
    <>
      <Tree
        className="tree"
        lineWidth={"2px"}
        lineColor={"#AAB4C8"}
        lineBorderRadius={"5px"}
        lineHeight={"30px"}
        label={<CardNode>Root</CardNode>}
      >
        <TreeNode label={<CardNode />} />
        <TreeNode label={<CardNode />} />
        <TreeNode label={<CardNode />} />
        <TreeNode label={<CardNode />} />
        <TreeNode label={<CardNode />} />
      </Tree>
    </>
  );
}

export default TreeOffice;
