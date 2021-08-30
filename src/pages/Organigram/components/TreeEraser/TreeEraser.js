import React, { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import CardNodeErase from "../CardNode/CardNodeErase";
import { useTranslation } from "react-i18next";
import CardNodeEraseGrandFather from "../CardNode/CardNodeEraseGrandFather";
import CardNodeGrandChild from "../CardNode/CardNodeGrandChild";

export default function TreeEraser() {
  const [t, i18n] = useTranslation("global");
  const [fathers, setFathers] = useState([
    {
      idFather: 0,
    },
  ]);

  const [childrens, setChildrens] = useState([]);

  return (
    <>
      <Tree
        className="tree"
        lineWidth={"2px"}
        lineColor={"#AAB4C8"}
        lineBorderRadius={"5px"}
        lineHeight={"30px"}
        id="grandFather"
        label={
          <CardNodeEraseGrandFather setFathers={setFathers} fathers={fathers} />
        }
      >
        {fathers.map((father, index) => (
          <TreeNode
            label={
              <CardNodeErase
                father={father}
                setFathers={setFathers}
                fathers={fathers}
                childrens={childrens}
                setChildrens={setChildrens}
              />
            }
          ></TreeNode>
        ))}
      </Tree>
    </>
  );
}
