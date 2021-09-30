import React, { useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CollaboratorList from "./components/CollaboratorList/CollaboratorList";

function ModalHistorialCollaborator({ modalHistorialC, setModalHistorialC }) {
  const [t, i18n] = useTranslation("global");

  const [Collaboratorslist, setCollaboratorslist] = useState([
    {
      id: 0,
      position: "Diseñador Gráfico",
      start: "15 MAY 2014",
      end: "1 de ABR 2016",
    },
    {
      id: 1,
      position: "Lider de área",
      start: "1 ABR 2016",
      end: "30 OCT 2017",
    },
    {
      id: 2,
      position: "Gerente de división",
      start: "30 OCT 2017",
      end: "A LA FECHA",
    },
  ]);
  return (
    <>
      <Modal
        title={t("organigram.areasandpositions-perfil.tab1.add-file-modal5.title")}
        className="ModalHistorialCollaborator"
        visible={modalHistorialC}
        onCancel={() => {
          setModalHistorialC(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setModalHistorialC(false);
            }}
          >
            {t("organigram.areasandpositions-perfil.tab1.add-file-modal5.btn-cancel")}
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setModalHistorialC(false);
            }}
          >
            {t("organigram.areasandpositions-perfil.tab1.add-file-modal5.btn-accept")}
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={5}>
            <b className="primaryText">{t("organigram.areasandpositions-perfil.tab1.add-file-modal5.position")}</b>
          </Col>
          <Col span={6}>
            <b className="primaryText">{t("organigram.areasandpositions-perfil.tab1.add-file-modal5.period-start")}</b>
          </Col>
          <Col span={9}>
            <b className="primaryText">{t("organigram.areasandpositions-perfil.tab1.add-file-modal5.period-final")}</b>
          </Col>
          <Col span={4}>
            <b className="primaryText">{t("organigram.areasandpositions-perfil.tab1.add-file-modal5.detail")}</b>
          </Col>
        </Row>

        <div id="collaboratorlist">
          {Collaboratorslist.map((Collaborator, index) => (
            <CollaboratorList Collaborator={Collaborator} />
          ))}
        </div>
      </Modal>
    </>
  );
}

export default ModalHistorialCollaborator;
