import React, { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import CardNode from "../CardNode/CardNode";
import { useTranslation } from "react-i18next";
import CardNodeGrandFather from "../CardNode/CardNodeGrandFather";
import CardNodeFather from "../CardNode/CardNodeFather";

function TreeOffice() {
  const [t, i18n] = useTranslation("global");

  const [grandFathers, setGrandFathers] = useState([
    {
      idGrandFather: 0,
      color: "#2cccd3",
    },
  ]);

  const [fathers, setFathers] = useState([
    {
      idFather: 0,
      color: "#F06292",
      childrens: [
        {
          idChildren: 0,
        },
        {
          idChildren: 1,
        },
        {
          idChildren: 2,
        },
        {
          idChildren: 3,
        },
      ],
    },
    {
      idFather: 1,
      color: "#64B5F6",
      childrens: [
        {
          idChildren: 0,
        },
        {
          idChildren: 1,
        },
        {
          idChildren: 2,
        },
      ],
    },
    {
      idFather: 2,
      color: "#2cccd3",
      childrens: [
        {
          idChildren: 0,
        },
        {
          idChildren: 1,
        },
        {
          idChildren: 2,
        },
        {
          idChildren: 3,
        },
        {
          idChildren: 4,
        },
      ],
    },
    {
      idFather: 3,
      color: "#FFB74D",
      childrens: [
        {
          idChildren: 0,
        },
        {
          idChildren: 1,
        },
        {
          idChildren: 2,
        },
      ],
    },
    {
      idFather: 4,
      color: "#2cccd3",
      childrens: [
        {
          idChildren: 0,
        },
        {
          idChildren: 1,
        },
      ],
    },
  ]);

  return (
    <>
      <Tree
        className="tree"
        lineWidth={"2px"}
        lineColor={"#AAB4C8"}
        lineBorderRadius={"5px"}
        lineHeight={"30px"}
        label={<CardNodeGrandFather data={grandFathers} />}
      >
        {fathers.map((father, index) => (
          <TreeNode label={<CardNodeFather data={father} />} />
        ))}
      </Tree>
    </>
  );
}

export default TreeOffice;
