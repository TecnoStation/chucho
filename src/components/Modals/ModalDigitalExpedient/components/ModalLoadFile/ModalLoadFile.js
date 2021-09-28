import React from "react";
import { Button, Col, Row, Modal } from "antd";
import { Link } from "react-router-dom";
import { CgSoftwareUpload } from "react-icons/cg";
import { IoMdTrash } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Good from "../../../../../assets/img/icons/bien_hecho.svg";

function ModalLoadFile({ modalLoadFile, setModalLoadFile }) {
  const [t, i18n] = useTranslation("global");

  const data = [
    {
      idDocument: 0,
      name: "Comprobante de Ingresos",
      status: 0,
      uploadDate: "10 MAY 2016",
      icon: 1,
    },
    {
      idDocument: 1,
      name: "Comprobante de Estudios",
      status: 0,
      uploadDate: "",
      icon: 2,
    },
    {
      idDocument: 2,
      name: "Comprobante de Domicilio",
      status: 0,
      uploadDate: "",
      icon: 2,
    },
    {
      idDocument: 3,
      name: "Identificación Oficial",
      status: 0,
      uploadDate: "",
      icon: 2,
    },
    {
      idDocument: 4,
      name: "Identificación Oficial",
      status: 0,
      uploadDate: "",
      icon: 2,
    },
  ];

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
                      <h3 className="primaryText">
                        <b>¡Bien hecho!</b>
                      </h3>
                    </Col>
                    <Col span={24}>
                      <h4 className="secondaryText">
                        Has enviado tus documentos
                      </h4>
                    </Col>
                    <Col span={24}>
                      <h4 className="secondaryText">
                        Serán validados por el área correspondiente
                      </h4>
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
            <b className="primaryText">Documento</b>
          </Col>
          <Col span={6}>
            <b className="primaryText">Estatus</b>
          </Col>
          <Col span={7}>
            <b className="primaryText">Fecha de carga</b>
          </Col>
          <Col span={4}>
            <b className="primaryText">Acciones</b>
          </Col>
        </Row>

        {data.map((document, index) => (
          <Row
            className="dividerBottomFull"
            style={{
              textAlign: "center",
              marginTop: "15px",
              paddingBottom: "15px",
            }}
          >
            <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
              <span className="secondaryText">{document.name}</span>
            </Col>
            <Col style={{ paddingLeft: "15px" }} span={6}>
              {document.status === 0 && (
                <span className="secondaryText">No adjuntado</span>
              )}
            </Col>
            <Col style={{ paddingLeft: "10px" }} span={7}>
              <span className="secondaryText">{document.uploadDate}</span>
            </Col>
            <Col style={{ paddingLeft: "10px" }} span={3}>
              {document.icon === 1 ? (
                <Link style={{ fontSize: "18px", marginLeft: "20px" }} to="#">
                  <IoMdTrash className="iconGray" />
                </Link>
              ) : (
                <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
                  <CgSoftwareUpload
                    style={{ position: "absolute", marginTop: "-3px" }}
                  />
                </Link>
              )}
            </Col>
          </Row>
        ))}
      </Modal>
    </>
  );
}

export default ModalLoadFile;
