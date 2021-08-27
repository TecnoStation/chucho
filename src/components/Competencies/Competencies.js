import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import Pencil from "../../assets/img/icons/edit-24px.svg";
import Delete from "../../assets/img/icons/delete-24px.svg";
import ModalPassword from "../Modals/ModalPassword/ModalPassword";
import { each } from "lodash";
import ModalSlide from "../Modals/Modalcompetencies/components/ModalSlide/ModalSlide";

export default function Competencies({
  competencies,
  setCompetencies,
  competenciesList,
  competenceName,
  setCompetenceName,
  setSlider,
  slider,
  setEditionModeSlider,
  editionModeSlider,
}) {
  const [Password, setPassword] = useState(false);
  const [modalSlide, setModalSlide] = useState(false);
  const openModalPassword = (index, action, comp, e) => {
    if (action === 0) {
      setPassword({
        titleModal: "Eliminar competencias institucionales",
        visible: true,
        type: action,
        messageModal:
          "Al eliminar las competencias institucionales se verá reflejado en todos los colaboradores de tu empresa",
        messageWarning: "Estas seguro de eliminar esta competencia.",
        question: "¿Seguro deseas eliminarla",
        function: () => {
          const arrayFilter = competencies.filter(
            (item) => item.idCompetence !== comp.idCompetence
          );
          setCompetencies(arrayFilter);
          competenciesList.forEach((competence) => {
            if (competence.name === comp.name) {
              competence.visible = true;
            }
          });
        },
      });
    } else {
      setPassword({
        titleModal: "Editar competencias institucionales",
        visible: true,
        type: action,
        messageModal:
          "Al editar las competencias institucionales se verá reflejado en todos los colaboradores de tu empresa",
        function: () => {
          setCompetenceName(comp.name);
          setSlider(comp.level * 25);
          setEditionModeSlider(true);
          setModalSlide(true);
        },
      });
    }
    // setModalComp(true);
  };

  return competencies.map((comp, index) => (
    <>
      <Row
        style={{ marginTop: "16px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col
          className="gutter-row"
          style={{ textAlign: "left", paddingLeft: "30px" }}
          span={14}
        >
          <span>
            <b>{comp.name}</b>
          </span>
        </Col>
        <Col className="gutter-row" span={4}>
          <span>{comp.level}</span>
        </Col>

        <Col className="gutter-row" span={6}>
          <Button className="points">
            {" "}
            <img
              alt="logo"
              onClick={(e) => openModalPassword(index, 1, comp, e)}
              src={Pencil}
              width="18"
              height="18"
            />
          </Button>
          <Button className="points">
            {" "}
            <img
              alt="logo"
              onClick={(e) => openModalPassword(index, 0, comp, e)}
              src={Delete}
              width="18"
              height="18"
            />
          </Button>
        </Col>
      </Row>
      <ModalPassword Password={Password} setPassword={setPassword} />
      <ModalSlide
        modalSlide={modalSlide}
        setModalSlide={setModalSlide}
        competenceName={competenceName}
        slider={slider}
        setSlider={setSlider}
        setEditionModeSlider={setEditionModeSlider}
        editionModeSlider={editionModeSlider}
        competencies={competencies}
        setCompetencies={setCompetencies}
      />
    </>
  ));
}
