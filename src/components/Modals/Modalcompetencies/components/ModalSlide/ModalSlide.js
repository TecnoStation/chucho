import { Button, Col, InputNumber, Row, Modal, Slider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./Slider/ModalSlide.scss";

function ModalSlide({
  setCompetencies,
  competencies,
  modalSlide,
  setModalSlide,
  setModalComp,
  setCompetenceName,
  competenceName,
  setSlider,
  slider,
  setEditionModeSlider,
  editionModeSlider,
}) {
  const marks = {
    0: "0",
    25: "1",
    50: "2",
    75: "3",
    100: "4",
  };

  function formatter(value) {
    return `${(value / 25).toFixed(1)}`;
  }

  const onChange = (inputValue) => {
    document.getElementById("level").value = inputValue / 25;
    setSlider(inputValue);
  };

  const onChangeInput = (inputValue) => {
    setSlider(inputValue * 25);
  };

  const saveCompetencess = () => {
    setCompetencies([
      ...competencies,
      {
        idCompetence: uuid(),
        name: competenceName,
        level: slider / 25,
      },
    ]);
    setCompetenceName("");
    setModalSlide(false);
    setModalComp(false);
  };

  const editCompetences = () => {
    competencies.forEach((competence) => {
      if (competence.name === competenceName) {
        competence.level = slider / 25;
      }
    });
    setEditionModeSlider(false);
    setModalSlide(false);
    setSlider(50);
  };

  return (
    <>
      <Modal
        className="middleModal"
        title={competenceName}
        visible={modalSlide}
        closable={false}
        footer={false}
      >
        <Row>
          <Col style={{ textAlign: "left" }} span={24}>
            <p className="secondaryText">
              Los colaboradores que tienen un alto dominio de esta competencia,
              por lo general tienen la capacidad de:
            </p>
          </Col>
          <Col style={{ textAlign: "left" }} span={24}>
            <ul>
              <li className="secondaryText">Escuchar y dispuesto a hacerlo.</li>
              <li className="secondaryText">Entiende los mensajes verbales.</li>
              <li className="secondaryText">
                Comprende los aspectos no verbales de la comunicación.
              </li>
              <li className="secondaryText">
                Expresa sus ideas con claridad y coherencia.
              </li>
              <li className="secondaryText">
                Genera el impacto deseado en sus interlocutores.
              </li>
            </ul>
          </Col>
          <Col span={24} style={{ textAlign: "left" }}>
            <Link to="#" className="iconGreen">
              Aquí
            </Link>
            <span className="secondaryText">
              {" "}
              puedes consultar el significado de cada nivel
            </span>
          </Col>
          <Col span={24}>
            <br />
            <span className="secondaryText">
              <b>Dominio de competencia</b>
            </span>
            <br />
            <InputNumber
              id="level"
              className="tag-cefective"
              min={0}
              max={4}
              value={(slider / 25).toFixed(1)}
              onChange={onChangeInput}
              step={0.1}
            />
            <br />
            <span className="secondaryText">
              Competente: <b>2.6 - 3.4</b>
            </span>
          </Col>
          <Col span={4}></Col>
          <Col span={16} id="colSlider">
            <Slider
              id="Slider"
              marks={marks}
              tipFormatter={formatter}
              onChange={onChange}
              included={true}
              value={slider.toFixed(1)}
              defaultValue={slider}
              step={0.1}
            />
          </Col>
          <Col span={4}></Col>
          <Col span={24} style={{ textAlign: "right" }}>
            <br />
            {editionModeSlider ? (
              <Button onClick={editCompetences} className="primary">
                Editar
              </Button>
            ) : (
              <Button onClick={saveCompetencess} className="primary">
                Guardar
              </Button>
            )}
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalSlide;
