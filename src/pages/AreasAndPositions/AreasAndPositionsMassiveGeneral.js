import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Form, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Good from "../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";
import "./AreasAndPositions.scss";

export default function AreasAndPositionsMassiveGeneral() {
  const [t, i18n] = useTranslation("global");
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
              <h3 className="title2">{t("organigram.areasandpositions-general.title")}</h3>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="secondaryText" span={24}>
              <p>{t("organigram.areasandpositions-general.text-1")}</p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="secondaryText" span={24}>
              <p>
                {t("organigram.areasandpositions-general.text-2")}
                <b className="primaryText">{t("organigram.areasandpositions-general.text-3")}</b>
                {t("organigram.areasandpositions-general.text-4")}
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                {" "}
                {t("organigram.areasandpositions-general.downloads-template")}
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="secondaryText" span={24}>
              <p>
                {t("organigram.areasandpositions-general.text-5")}
                <b className="primaryText">{t("organigram.areasandpositions-general.text-6")}</b>,
                {t("organigram.areasandpositions-general.text-7")}
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                {t("organigram.areasandpositions-general.downloads-positions")}
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="secondaryText" span={24}>
              <p>
                {t("organigram.areasandpositions-general.text-8")}
                <b className="primaryText">{t("organigram.areasandpositions-general.text-9")}</b>,
                {t("organigram.areasandpositions-general.text-10")}
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p className="linkBold">
                {t(
                  "organigram.areasandpositions-general.downloads-collaborator"
                )}
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row dividerLeft" span={12}>
          <Row
            style={{ paddingBottom: "20px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p>
                <b className="primaryText">{t("organigram.areasandpositions-general.title-2")}</b>
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="secondaryText" span={24}>
              <span> {t("organigram.areasandpositions-general.text-a")}</span>
              <br />
              <span>{t("organigram.areasandpositions-general.text-b")}</span>
              <br />
              <span> {t("organigram.areasandpositions-general.text-c")}</span>
              <br />
              <br />
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="secondaryText" span={24}>
              <p>{t("organigram.areasandpositions-general.text-file")}</p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p>
                <b className="primaryText">{t("organigram.areasandpositions-general.tex-file-a")}</b>
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
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

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p>
                <b className="primaryText">{t("organigram.areasandpositions-general.text-file-b")}</b>
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
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

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <p>
                <b className="primaryText">{t("organigram.areasandpositions-general.text-file-c")}</b>
              </p>
            </Col>
          </Row>

          <Row
            style={{ paddingBottom: "10px" }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" span={24}>
              <Link to="#" onClick={openModalUpload}>
                {" "}
                <PlusCircleOutlined />
                <span style={{ marginLeft: "8px" }}>
                  {t("organigram.areasandpositions-masivee.link-attach")}
                </span>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title={t(
          "organigram.areasandpositions-general.modal-upload-file.upload-file"
        )}
        visible={modalUpload}
        onCancel={closeModalUpload}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={closeModalUpload}
          >
            {t(
              "organigram.areasandpositions-general.modal-upload-file.btn-casel"
            )}
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
            value={t(
              "organigram.areasandpositions-general.modal-upload-file.btn-upload"
            )}
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
