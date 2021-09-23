import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form, Modal } from "antd";
import { Link, useHistory } from "react-router-dom";
import Good from "../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";
import "./AreasAndPositions.scss";

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
    history.push({
      pathname:
        "/" +
        t("routes.organigram") +
        "/" +
        t("paths_organigram.areasandpositions"),
    });
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <h3 className="title2">{t("organigram.areasandpositions-masivee.title")}</h3>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="secondaryText" span={24}>
              <p>{t("organigram.areasandpositions-masivee.text1")}</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="secondaryText" span={24}>
              <p>
                {t("organigram.areasandpositions-masivee.text2")}
                <b className="primaryText">{t("organigram.areasandpositions-masivee.text3")}</b>
                {t("organigram.areasandpositions-masivee.text4")}
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                {t("organigram.areasandpositions-masivee.text5")}
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row dividerLeft" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b className="primaryText">{t("organigram.areasandpositions-masivee.text6")}</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="secondaryText" span={24}>
              <span>{t("organigram.areasandpositions-masivee.text7")}</span>
              <br />
              <span>{t("organigram.areasandpositions-masivee.text8")}</span>
              <br />
              <span>{t("organigram.areasandpositions-masivee.text9")}</span>
              <br />
              <br />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="secondaryText" span={24}>
              <p>{t("organigram.areasandpositions-masivee.text10")}</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b className="primaryText">{t("organigram.areasandpositions-masivee.text11")}</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined />
                <span style={{ marginLeft: "8px" }}>
                  {t("organigram.areasandpositions-masivee.link-attach")}
                </span>
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
          <h1 className="primaryText">{t("organigram.areasandpositions-masivee.history-loads")}</h1>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={6}>
          <p className="secondaryText">{t("organigram.areasandpositions-masivee.file")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p className="secondaryText">{t("organigram.areasandpositions-masivee.date-load")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p className="secondaryText">{t("organigram.areasandpositions-masivee.status")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p className="secondaryText">{t("organigram.areasandpositions-masivee.actions")}</p>
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
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.areasandpositions-detailerror")
            }
          >
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
          <p className="iconGreenTwo">Éxito</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <Link
            to={
              "/" +
              t("routes.organigram") +
              "/" +
              t("paths_organigram.areasandpositions-detailsuccess")
            }
          >
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
          <Button className="secondary">
            {t("organigram.areasandpositions-masivee.btn-cancel")}
          </Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button className="primary">
            {t("organigram.areasandpositions-masivee.btn-load-file")}
          </Button>
        </Col>
      </Row>

      <Modal
        title={t("organigram.areasandpositions-masivee.up-load-file")}
        visible={modalUpload}
        onCancel={closeModalUpload}
        onOk={sendUpload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalUpload}
          >
            {t("organigram.areasandpositions-masivee.btn-cancel")}
          </Button>,
          <input
            style={{ width: "80px" }}
            type="button"
            className="primary"
            onClick={() => {
              closeModalUpload();
              const modal = Modal.info({
                title: "",
                className: "MessagesModal",
                centered: true,
                content: (
                  <Row style={{ marginTop: "-20px" }}>
                    <Col span={24}>
                      <p>
                        <img alt="ico" className="" src={Good} />
                      </p>
                    </Col>
                    <Col span={24}>
                      <h2>
                        <b>
                          {t("organigram.areasandpositions-masivee.well-done")}
                        </b>
                      </h2>
                    </Col>
                    <Col span={24}>
                      <h3></h3>
                    </Col>
                    <Col span={24}>
                      <h3>
                        {t(
                          "organigram.areasandpositions-masivee.organization-created"
                        )}
                      </h3>
                      <br />
                    </Col>
                    <Col span={24}>
                      <Button
                        style={{ width: "50%" }}
                        onClick={() => {
                          modal.destroy();
                        }}
                        className="primary btn"
                      >
                        {t("organigram.password-modal.btn-done")}
                      </Button>
                    </Col>
                  </Row>
                ),
                onOk() {},
              });
            }}
            value={t("organigram.areasandpositions-masivee.btn-rise")}
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
