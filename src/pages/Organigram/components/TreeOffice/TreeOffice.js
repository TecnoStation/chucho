import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import CardNode from "../CardNode/CardNode";
import { useTranslation } from "react-i18next";

function TreeOffice() {
  const [t, i18n] = useTranslation("global");
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
