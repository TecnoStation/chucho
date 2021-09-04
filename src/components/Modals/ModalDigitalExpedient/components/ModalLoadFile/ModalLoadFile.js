import React from "react";
import { Button, Col, Row, Modal } from "antd";
import { Link } from "react-router-dom";
import { CgSoftwareUpload } from "react-icons/cg";
import { IoMdTrash } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Good from "../../../../../assets/img/icons/bien_hecho.svg";

function ModalLoadFile({ modalLoadFile, setModalLoadFile }) {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Modal
        title="Expediente: Marco Antonio Remirez Perez"
        className="largeModal"
        visible={modalLoadFile}
        onCancel={() => {
          setModalLoadFile(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setModalLoadFile(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setModalLoadFile(false);
              const modal = Modal.info({
                title: "",
                content: (
                  <Row>
                    <Col span={24}>
                      <p>
                        <img alt="ico" className="" src={Good} />
                      </p>
                    </Col>
                    <Col span={24}>
                      <h3>¡Bien hecho!</h3>
                    </Col>
                    <Col span={24}>
                      <h4>Has enviado tus documentos</h4>
                    </Col>
                    <Col span={24}>
                      <h4>Serán validados por el área correspondiente</h4>
                      <br />
                    </Col>
                    <Col span={24}>
                      <Button
                        style={{ marginRight: "15px" }}
                        onClick={() => {
                          modal.destroy();
                        }}
                        className="primary btn"
                      >
                        Hecho
                      </Button>
                    </Col>
                  </Row>
                ),
                onOk() {},
              });
            }}
          >
            Enviar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={7}>
            <b>Documento</b>
          </Col>
          <Col span={6}>
            <b>Estatus</b>
          </Col>
          <Col span={7}>
            <b>Fecha de carga</b>
          </Col>
          <Col span={4}>
            <b>Acciones</b>
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
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link style={{ fontSize: "18px", marginLeft: "20px" }} to="#">
              <IoMdTrash className="iconGray" />
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
            Comprobante de Estudios
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
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
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
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
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
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
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}></Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
            </Link>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalLoadFile;
