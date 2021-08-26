import React, { useState } from "react";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import Like from "../../assets/img/icons/bien_hecho.svg";
import { Link, useHistory } from "react-router-dom";
import "./AreasAndPositions.scss";
import Screendefault from "../../components/Screens/Screendefault";
import { useTranslation } from "react-i18next";

export default function AreasAndPositionsMassiveE() {
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
              <h3>{t("organigrama.areasandpositions-masivee.title")}</h3>
            </Col>
          </Row> 

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
              {t("organigrama.areasandpositions-masivee.text1")}
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
              {t("organigrama.areasandpositions-masivee.text2")}
                <b>
                {t("organigrama.areasandpositions-masivee.text3")}
                </b>
                {t("organigrama.areasandpositions-masivee.text4")}
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p className="linkBold">{t("organigrama.areasandpositions-masivee.text5")}</p>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row dividerLeft" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>
                {t("organigrama.areasandpositions-masivee.text6")}
                </b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <span>{t("organigrama.areasandpositions-masivee.text7")}</span>
              <br />
              <span>
              {t("organigrama.areasandpositions-masivee.text8")}
              </span>
              <br />
              <span>{t("organigrama.areasandpositions-masivee.text9")}</span>
              <br />
              <br />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>{t("organigrama.areasandpositions-masivee.text10")}</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>{t("organigrama.areasandpositions-masivee.text11")}</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined />{t("organigrama.areasandpositions-masivee.link-attach")}
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
          <h1>{t("organigrama.areasandpositions-masivee.history-loads")}</h1>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={6}>
          <p>{t("organigrama.areasandpositions-masivee.file")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>{t("organigrama.areasandpositions-masivee.date-load")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>{t("organigrama.areasandpositions-masivee.status")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>{t("organigrama.areasandpositions-masivee.actions")}</p>
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
          <Button className="secondary">{t("organigrama.areasandpositions-masivee.btn-cancel")}</Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button className="primary">{t("organigrama.areasandpositions-masivee.btn-load-file")}</Button>
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
              <h3>{t("organigrama.areasandpositions-masivee.well-done")}</h3>
            </Col>
            <Col span={24}>
              <h3>{t("organigrama.areasandpositions-masivee.organization-created")}</h3>
              <br />
            </Col>
            <Col span={24}>
              <Button onClick={endFn} className="primary btn">
              {t("organigrama.areasandpositions-masivee.btn-done")}
              </Button>
            </Col>
          </Row>
        </div>
      </Screendefault>

      <Modal
        title={t("organigrama.areasandpositions-masivee.up-load-file")}
        visible={modalUpload}
        onCancel={closeModalUpload}
        onOk={sendUpload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalUpload}
          >
            {t("organigrama.areasandpositions-masivee.btn-cancel")}
          </Button>,
          <input
            type="button"
            className="primary"
            onClick={sendUpload}
            value={t("organigrama.areasandpositions-masivee.btn-rise")}
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
