import React, { useState } from "react";
import { Tag } from "antd";
import { PlusOutlined, CheckCircleFilled } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import ModalSlide from "./ModalSlide/ModalSlide";

export default function CompetenciesList({
  competenciesList,
  setModalComp,
  competencies,
  setCompetencies,
  setCompetenciesList,
  modalComp,
  setCompetenceName,
  competenceName,
  setSlider,
  slider,
  editionModeSlider,
  setEditionModeSlider,
  component,
  form,
}) {
  const [Competence, setCompetence] = useState(false);
  const [modalSlide, setModalSlide] = useState(false);

  const cefective = (name, index) => {
    competenciesList[index].visible = false;
    setCompetenciesList(competenciesList);
    let activeTag = document.getElementById("competence" + component + index);
    activeTag.setAttribute("class", "hide");
    let activeTagV = document.getElementById("competenceV" + component + index);
    activeTagV.setAttribute("class", "ant-tag tag tag-active");
    setCompetenceName(name);
    setModalSlide(true);
    const div = document.getElementById("tagList");
    const row = div.getElementsByClassName("rowC");
    let i;
    for (i = 0; i < row.length; i++) {
      let col = row[i].getElementsByClassName("tag")[0];
      if (col) {
        row[i].style.display = "";
      }
    }
    form.setFieldsValue({
      competence: "",
    });
  };

  return (
    <>
      {competenciesList.map((competence, index) =>
        competence.visible ? (
          <div className="rowC" style={{ textAlign: "left" }}>
            <Tag
              className="tag secondaryText"
              style={{ paddingLeft: "16px" }}
              id={"competence" + component + index}
              key={uuid}
              onClick={(e) => {
                cefective(competence.name, index);
              }}
            >
              {competence.name}
              <PlusOutlined
                id={"PlusOutlined" + component + index}
                className="plusOutlined"
              />
            </Tag>

            <Tag
              style={{ paddingLeft: "16px" }}
              className="hide"
              id={"competenceV" + component + index}
            >
              {competence.name}
              <CheckCircleFilled
                id={"CheckCircleFilled" + component + index}
                className="CheckCircleFilled"
              />
            </Tag>
          </div>
        ) : (
          <div className="rowC" style={{ textAlign: "left" }}>
            <Tag
              style={{ paddingLeft: "16px" }}
              className="tag tag-active"
              key={index}
            >
              {competence.name}
              <CheckCircleFilled className="CheckCircleFilled" />
            </Tag>
          </div>
        )
      )} 

      <ModalSlide
        setModalComp={setModalComp}
        modalComp={modalComp}
        Competence={Competence}
        competencies={competencies}
        setCompetencies={setCompetencies}
        modalSlide={modalSlide}
        setModalSlide={setModalSlide}
        competenceName={competenceName}
        setCompetenceName={setCompetenceName}
        slider={slider}
        setSlider={setSlider}
        editionModeSlider={editionModeSlider}
        setEditionModeSlider={setEditionModeSlider}
      />
    </>
  );
}
