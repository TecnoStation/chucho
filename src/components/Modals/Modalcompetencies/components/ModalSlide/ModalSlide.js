import { Button, Col, InputNumber, Row, Modal, Slider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./Slider/ModalSlide.scss";
import { useTranslation } from "react-i18next";

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
  const [t, i18n] = useTranslation("global");

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
              {t("organigram.add-competencies-modal.second-modal.text0")}
            </p>
          </Col>
          <Col style={{ textAlign: "left" }} span={24}>
            <ul>
              <li className="secondaryText">{t("organigram.add-competencies-modal.second-modal.text1")}</li>
              <li className="secondaryText">{t("organigram.add-competencies-modal.second-modal.text2")}</li>
              <li className="secondaryText">
              {t("organigram.add-competencies-modal.second-modal.text3")}
              </li>
              <li className="secondaryText">
              {t("organigram.add-competencies-modal.second-modal.text4")}
              </li>
              <li className="secondaryText">
              {t("organigram.add-competencies-modal.second-modal.text5")}
              </li>
            </ul>
          </Col>
          <Col span={24} style={{ textAlign: "left" }}>
            <Link to="#" className="iconGreen">
            {t("organigram.add-competencies-modal.second-modal.text6-link")}
            </Link>
            <span className="secondaryText">
              {" "}
              {t("organigram.add-competencies-modal.second-modal.text7")}
            </span>
          </Col>
          <Col span={24}>
            <br />
            <span className="secondaryText">
              <b>{t("organigram.add-competencies-modal.second-modal.text8")}</b>
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
            {t("organigram.add-competencies-modal.second-modal.competent")} <b>2.6 - 3.4</b>
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
                {t("organigram.add-competencies-modal.second-modal.btn-edit")}
              </Button>
            ) : (
              <Button onClick={saveCompetencess} className="primary">
                {t("organigram.add-competencies-modal.second-modal.btn-save")}
              </Button>
            )}
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalSlide;
