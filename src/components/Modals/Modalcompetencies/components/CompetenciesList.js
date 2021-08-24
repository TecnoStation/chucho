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
  };

  return (
    <>
      {competenciesList.map((competence, index) =>
        competence.visible ? (
          <div className="rowC">
            <Tag
              className="tag"
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

            <Tag className="hide" id={"competenceV" + component + index}>
              {competence.name}
              <CheckCircleFilled
                id={"CheckCircleFilled" + component + index}
                className="CheckCircleFilled"
              />
            </Tag>
          </div>
        ) : (
          <div className="row">
            <Tag className="tag tag-active" key={index}>
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
