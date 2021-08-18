import React, { useState } from "react";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import Like from "../../assets/img/icons/bien_hecho.svg";
import { Link, useHistory } from "react-router-dom";
import "./AreasAndPositions.scss";
import Screendefault from "../../components/Screens/Screendefault";
import { useTranslation } from "react-i18next";

export default function AreasAndPositionsMassiveP() {
  const [t, i18n] = useTranslation("global");
  const [modalUpload, setModalUpload] = useState(false);

  const closeModalUpload = () => {
    setModalUpload(false);
  };

  const openModalUpload = () => {
    setModalUpload(true);
  };

  const sendUpload = () => {
    setModalUpload(false);
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: flex;");
  };

  const history = useHistory();
  const endFn = () => {
    let screen = document.getElementById("screen");
    screen.setAttribute("style", "display: none;");
    history.push({ pathname: "/organigrama" });
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3>Carga masiva de puestos</h3>
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
              <p className="linkBold">
                Descargar plantilla de Información de puesto
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
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={24}>
          <h1>Historial de Cargas</h1>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={6}>
          <p>Archivo</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>Fecha de carga</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>Estatus</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>Acciones</p>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={6}>
          <p>organigram2018.csv</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>10 MAY 2021</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p className="iconRed">Error</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <Link to="/areasandpositions-detailerror">
            <p>Ver Detalle</p>
          </Link>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={6}>
          <p>organigramaok.csv.csv</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>12 MAY 2021</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p className="iconGreen">Éxito</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <Link to="/areasandpositions-detailsuccess">
            <p>Ver Detalle</p>
          </Link>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "right", marginTop: "50px" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={17}></Col>
        <Col className="gutter-row" span={3}>
          <Button className="secondary">Cancelar</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button className="primary">Subir archivo</Button>
        </Col>
      </Row>

      <Screendefault>
        <div id="deleteMessage">
          <Row>
            <Col span={24}>
              <p style={{ textAlign: "center" }}>
                <img alt="ico" className="" src={Like} />
              </p>
            </Col>
            <Col span={24}>
              <h3>Bien hecho!</h3>
            </Col>
            <Col span={24}>
              <h3>Organigrama creado</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button onClick={endFn} className="primary btn">
                Hecho
              </Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      <Modal
        className="middleModal"
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
