import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalMessage from "../ModalMessage/ModalMessage";
import Warning from "../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";
import EraserData from "./components/EraserData/EraserData";

function ModalErasersList({ historial, setHistorial }) {
  const [t, i18n] = useTranslation("global");

  const [erasersList, setErasersList] = useState([
    {
      id: 0,
      name: "Área MKT",
      date: "10 MAY 2016",
    },
    {
      id: 1,
      name: "Área de TI A",
      date: "12 MAY 2016",
    },
    {
      id: 2,
      name: "Sucursal CUH",
      date: "12 MAY 2016",
    },
  ]);

  return (
    <>
      <Modal
<<<<<<< HEAD
        title={t("organigram.organigram-page.modal-history.ready-tsdraf")}
        className="largeModal"
=======
        title="Lista de borradores"
        className="eraserList"
>>>>>>> 50811ca0fceaed8fde63fa0b4bcd77cba1b96cb0
        visible={historial}
        onCancel={() => {
          setHistorial(false);
        }}
        onOk={() => {
          setHistorial(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setHistorial(false);
            }}
          >
            {t("organigram.organigram-page.modal-history.btn-cancel")}
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setHistorial(false);
            }}
          >
            {t("organigram.organigram-page.modal-history.btn-accept")}
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={6}>
            <b>{t("organigram.organigram-page.modal-history.name")}</b>
          </Col>
          <Col span={7}>
            <b>{t("organigram.organigram-page.modal-history.modification")}</b>
          </Col>

          <Col span={11}>
            <b>{t("organigram.organigram-page.modal-history.actions")}</b>
          </Col>
        </Row>
<<<<<<< HEAD
        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={6}>Área MKT</Col>
          <Col span={8}>10 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconBlue"
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.modal-history.watch")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link
              className="iconBlue"
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.modal-history.edit")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              onClick={() => {
                setScreen("screen show");
              }}
              to="#"
            >
              {t("organigram.organigram-page.modal-history.remove")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              to="#"
              onClick={() => {
                setHistorial(false);
              }}
            >
              {t("organigram.organigram-page.modal-history.apply")}
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={6}>Área de TI A</Col>
          <Col span={8}>12 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconBlue"
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.modal-history.watch")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link
              className="iconBlue"
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.modal-history.edit")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
            {t("organigram.organigram-page.modal-history.remove")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              to="#"
              onClick={() => {
                setHistorial(false);
              }}
            >
              {t("organigram.organigram-page.modal-history.apply")}
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col span={6}>Sucursal CUH</Col>
          <Col span={8}>12 MAY 2016</Col>
          <Col span={2}>
            <Link
              className="iconBlue"
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.modal-history.watch")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={2}>
            <Link
              className="iconBlue"
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.modal-history.edit")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link className="iconBlue" to="#">
            {t("organigram.organigram-page.modal-history.remove")}
            </Link>
          </Col>
          <Col className="dividerLeft" span={3}>
            <Link
              className="iconBlue"
              to="#"
              onClick={() => {
                setHistorial(false);
              }}
            >
              {t("organigram.organigram-page.modal-history.apply")}
            </Link>
          </Col>
        </Row>
      </Modal>
      <ModalMessage screen={screen}>
        <Row>
          <Col span={24}>
            <p style={{ textAlign: "center" }}>
              <img alt="ico" className="" src={Warning} />
            </p>
          </Col>
          <Col span={24}>
            <h3>{t("organigram.organigram-page.modal-remove.attention")}</h3>
          </Col>
          <Col span={24}>
            <h3>{t("organigram.organigram-page.modal-remove.text")}</h3>
          </Col>
          <Col span={24}>
            <h3>{t("organigram.organigram-page.modal-remove.text2")}</h3>
            <br />
          </Col>
          <Col span={24}>
            <Button
              style={{ marginRight: "15px" }}
              onClick={() => {
                setScreen("screen");
              }}
              className="secondary btn"
            >
              {t("organigram.organigram-page.modal-remove.btn-cancel")}
            </Button>
            <Button
              className="primary btn"
              onClick={() => {
                setScreen("screen");
                setHistorial(false);
              }}
            >
              {t("organigram.organigram-page.modal-remove.btn-remove")}
            </Button>
          </Col>
        </Row>
      </ModalMessage>
=======

        {erasersList.map((eraser, index) => (
          <EraserData setHistorial={setHistorial} eraser={eraser} />
        ))}
      </Modal>
>>>>>>> 50811ca0fceaed8fde63fa0b4bcd77cba1b96cb0
    </>
  );
}

export default ModalErasersList;
