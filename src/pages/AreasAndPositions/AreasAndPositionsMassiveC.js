import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form, Modal } from "antd";
import Good from "../../assets/img/icons/bien_hecho.svg";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AreasAndPositions.scss";

export default function AreasAndPositionsMassiveC() {
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
              <h3>{t("organigram.areasandpositions-E.title")}</h3>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>{t("organigram.areasandpositions-E.text-1")}</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                {t("organigram.areasandpositions-E.text-2")}
                <b>{t("organigram.areasandpositions-E.text-3")}</b>
                {t("organigram.areasandpositions-E.text-4")}
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                {t("organigram.areasandpositions-E.collaborator-template")}
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row dividerLeft" span={12}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>{t("organigram.areasandpositions-E.text-5")}</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <span>{t("organigram.areasandpositions-E.text-a")}</span>
              <br />
              <span>{t("organigram.areasandpositions-E.text-b")}</span>
              <br />
              <span>{t("organigram.areasandpositions-E.text-c")}</span>
              <br />
              <br />
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>{t("organigram.areasandpositions-E.text-file")}</p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <p>
                <b>{t("organigram.areasandpositions-E.tex-file-a")}</b>
              </p>
            </Col>
          </Row>

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined />{" "}
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
          <h1>{t("organigram.areasandpositions-E.text-file-b")}</h1>
        </Col>
      </Row>

      <Row
        style={{ textAlign: "center", marginTop: "20px" }}
        className="dividerBottomFull"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col className="gutter-row" span={6}>
          <p>{t("organigram.areasandpositions-E.file")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>{t("organigram.areasandpositions-E.date-load")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>{t("organigram.areasandpositions-E.status")}</p>
        </Col>
        <Col className="gutter-row" span={6}>
          <p>{t("organigram.areasandpositions-E.actions")}</p>
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
          <p className="iconGreenTwo">Éxito</p>
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
          <Button className="secondary">
            {t("organigram.areasandpositions-E.btn-cancel")}
          </Button>
        </Col>
        <Col className="gutter-row" span={3}>
          <Button className="primary">
            {t("organigram.areasandpositions-E.btn-upload-file")}
          </Button>
        </Col>
      </Row>

      <Modal
        title={t("organigram.areasandpositions-E.modal-file.goes-file")}
        visible={modalUpload}
        onCancel={closeModalUpload}
        onOk={sendUpload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalUpload}
          >
            {t("organigram.areasandpositions-E.modal-file.btn-cancel")}
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
            value={t("organigram.areasandpositions-E.modal-file.btn-upload")}
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
