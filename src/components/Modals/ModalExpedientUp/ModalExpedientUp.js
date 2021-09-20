import React from "react";
import { Button, Col, Modal, Row, Upload } from "antd";
import { CgSoftwareUpload } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ModalExpedientUp({ expedientUp, setExpedientUp }) {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Modal
        title={t("organigram.areasandpositions-perfil.tab1.add-file-modal.title")} 
        className="largeModal"
        visible={expedientUp}
        onCancel={() => {
          setExpedientUp(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }} 
            className="secondary"
            onClick={() => {
              setExpedientUp(false);
            }}
          >
            {t("organigram.areasandpositions-perfil.tab1.add-file-modal.btn-cancel")}
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setExpedientUp(false);
            }}
          >
            {t("organigram.areasandpositions-perfil.tab1.add-file-modal.btn-save")}
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={7}>
            <b>{t("organigram.areasandpositions-perfil.tab1.add-file-modal.document")}</b>
          </Col>
          <Col span={6}>
            <b>{t("organigram.areasandpositions-perfil.tab1.add-file-modal.status")}</b>
          </Col>
          <Col span={7}>
            <b>{t("organigram.areasandpositions-perfil.tab1.add-file-modal.date-load")}</b>
          </Col>
          <Col span={4}>
            <b>{t("organigram.areasandpositions-perfil.tab1.add-file-modal.actions")}</b>
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Ingresos
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}></Col>
          <Col style={{ paddingLeft: "10px" }} span={7}></Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Upload>
              <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
                <CgSoftwareUpload
                  style={{ position: "absolute", marginTop: "-20px" }}
                />
              </Link>
            </Upload>
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Estudios
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}></Col>
          <Col style={{ paddingLeft: "10px" }} span={7}></Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Domicilio
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}></Col>
          <Col style={{ paddingLeft: "10px" }} span={7}></Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Upload>
              <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
                <CgSoftwareUpload
                  style={{ position: "absolute", marginTop: "-20px" }}
                />
              </Link>
            </Upload>
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
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}></Col>
          <Col style={{ paddingLeft: "10px" }} span={7}></Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Upload>
              <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
                <CgSoftwareUpload
                  style={{ position: "absolute", marginTop: "-20px" }}
                />
              </Link>
            </Upload>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}></Col>
          <Col style={{ paddingLeft: "10px" }} span={7}></Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Upload>
              <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
                <CgSoftwareUpload
                  style={{ position: "absolute", marginTop: "-20px" }}
                />
              </Link>
            </Upload>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalExpedientUp;
