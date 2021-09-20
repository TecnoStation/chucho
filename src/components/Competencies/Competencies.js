import React, { useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import Pencil from "../../assets/img/icons/edit-24px.svg";
import Good from "../../assets/img/icons/bien_hecho.svg";
import Delete from "../../assets/img/icons/delete-24px.svg";
import ModalPassword from "../Modals/ModalPassword/ModalPassword";
import ModalSlide from "../Modals/Modalcompetencies/components/ModalSlide/ModalSlide";
import { useTranslation } from "react-i18next";

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
  const [t, i18n] = useTranslation("global");
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

          const modal = Modal.info({
            title: "",
            className: "MessagesModal",
            centered: true,
            content: (
              <Row>
                <Col span={24}>
                  <p>
                    <img alt="ico" className="" src={Good} />
                  </p>
                </Col>
                <Col span={24}>
                  <h2>
                    <b>Competencia eliminada</b>
                  </h2>
                </Col>
                <Col span={24}>
                  <h3></h3>
                </Col>
                <Col span={24}>
                  <h3></h3>
                  <br />
                </Col>
                <Col span={24}>
                  <Button
                    style={{ width: "50%" }}
                    onClick={() => {
                      modal.destroy();
                    }}
                    className="primary btn"
                  >
                    {t("organigram.password-modal.btn-done")}
                  </Button>
                </Col>
              </Row>
            ),
            onOk() {},
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
      <Row style={{ marginTop: "16px", width: "100%", textAlign: "left" }}>
        <Col style={{ paddingLeft: "0px" }} span={17}>
          <span>
            <b>{comp.name}</b>
          </span>
        </Col>
        <Col span={3}>
          <span>{comp.level}</span>
        </Col>

        <Col span={4}>
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
