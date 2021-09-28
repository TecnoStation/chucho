import { Button, Col, Modal, Row } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EraserData from "./components/EraserData/EraserData";

function ModalErasersList({ historial, setHistorial, data }) {
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
        title={t("organigram.organigram-page.modal-history.ready-tsdraf")}
        className="eraserList"
        visible={historial}
        centered={true}
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
            <b className="primaryText">
              {t("organigram.organigram-page.modal-history.name")}
            </b>
          </Col>
          <Col span={7}>
            <b className="primaryText">
              {t("organigram.organigram-page.modal-history.modification")}
            </b>
          </Col>

          <Col span={11}>
            <b className="primaryText">
              {t("organigram.organigram-page.modal-history.actions")}
            </b>
          </Col>
        </Row>

        {erasersList.map((eraser, index) => (
          <EraserData setHistorial={setHistorial} eraser={eraser} />
        ))}
      </Modal>
    </>
  );
}

export default ModalErasersList;
