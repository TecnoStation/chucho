import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
//import { AiOutlineFileText } from 'react-icons/ai'
import { Link } from "react-router-dom";
import "./Areasypuestos.scss";

export default function AreasypuestosMasivaGeneral() {
  const [modalUpload, setModalUpload] = useState(false);

  const closeModalUpload = () => {
    setModalUpload(false);
  };

  const openModalUpload = () => {
    setModalUpload(true);
  };

  const sendUpload = () => {
    alert("Enviando archivos");
    setModalUpload(false);
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>Carga masiva</h3>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                En este apartado vas a poder realizar la carga masiva de
                información.
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                Para facilitar la carga de datos, proponemos subir la
                información en 3 partes, la{" "}
                <b>
                  primera sería un archivo con todas tus áreas y todos los
                  puestos en tu empresa
                </b>
                , para facilitar este paso hemos creado una plantilla que puedes
                descargar, llenar y volver a subir:
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p className="linkBold">Descargar plantilla de Estructura</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                La segunda parte está pensada para que puedas subir toda la{" "}
                <b>información que conforma cada puesto en tu organización</b>,
                lo que se traduce en los datos básicos, las habilidades
                requeridas y las competencias de cada uno. Esta información debe
                de cuadrar con la que previamente subiste de Estructura, por lo
                que también preparamos una plantilla:
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                Descargar plantilla de Información de Puestos
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                Finalmente tenemos una tercera parte, donde vas a poder subir{" "}
                <b>la información de las personas que ocupan esos puestos</b>,
                por lo que también tenemos una plantilla:
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                Descargar plantilla de Información de Colaboradores
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row dividerLeft" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>
                  Antes de importar los datos, es esencial asegurarse de que la
                  tabla cumple estos tres requisitos:
                </b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <span>- Cada columna tiene un encabezado.</span>
              <br />
              <span>
                - Deberás llenar los todos los campos que se te piden.
              </span>
              <br />
              <span>- Solo se aceptan archivos de excel (cvs y xls)</span>
              <br />
              <br />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>Adjunta tu archivo y ¡listo!</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>Subir archivo de estructura:</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined /> Adjuntar archivo{" "}
              </Link>
              <br />
              <br />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>Subir archivo de información de puestos:</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined /> Adjuntar archivo{" "}
              </Link>
              <br />
              <br />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>Subir archivo de información de colaboradores:</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined /> Adjuntar archivo{" "}
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Sube el archivo"
        visible={modalUpload}
        onCancel={closeModalUpload}
        onOk={sendUpload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalUpload}
          >
            Cancelar
          </Button>,
          <input
            type="button"
            className="primary"
            onClick={sendUpload}
            value="Subir"
          />,
        ]}
      >
        <Row>
          <Col span={12}>
            <Form>
              <Form.Item>
                <input type="file" />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
