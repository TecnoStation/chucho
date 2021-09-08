import React, { useState } from "react";
import { Button, Input, Form, Modal, Row, Col } from "antd";
import Warning from "../../../assets/img/icons/atencion.svg";
import Good from "../../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";
import "./ModalPassword.scss";
import { Link } from "react-router-dom";

//titleModal messageModal visible type messageWarning question function

export default function ModalPassword({ Password, setPassword }) {
  const [t, i18n] = useTranslation("global");
  const [clearPassword, setclearPassword] = useState("");
  const [form] = Form.useForm();
  form.setFieldsValue({
    password: "",
  });

  if (Password.titleWarning === "") {
    Password.titleWarning = t("organigram.password-modal.attention");
  }
  return (
    <>
      <Modal
        className="passwordModal"
        title={Password.titleModal}
        visible={Password.visible}
        onCancel={() => {
          setPassword(false);
        }}
        onOk={() => {
          setPassword(false);
        }}
        footer={false}
      >
        <p style={{ textAlign: "left", marginTop: "-15px" }}>
          {Password.messageModal}
        </p>
        <Form
          form={form}
          initialValues={{
            password: "",
          }}
          layout="vertical"
        >
          <Form.Item
            name="password"
            label={t("organigram.password-modal.insert-password")}
          >
            <Input
              type="password"
              value={clearPassword}
              id="nombre"
              placeholder={t(
                "organigram.password-modal.insert-password-placeholder"
              )}
            />
          </Form.Item>
          <div style={{ marginTop: "0px", textAlign: "right" }}>
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setPassword(false);
              }}
            >
              {t("organigram.delete-collaborator.btn-cancel")}
            </Button>

            <Button
              onClick={() => {
                setPassword(false);
                if (Password.type === 0) {
                  const modal = Modal.info({
                    title: "",
                    className: "MessagesModal",
                    centered: true,
                    content: (
                      <Row style={{ marginTop: "-30px" }}>
                        <Col span={24}>
                          <p>
                            <img alt="ico" className="" src={Warning} />
                          </p>
                        </Col>
                        <Col style={{ marginTop: "-20px" }} span={24}>
                          <h2>
                            <b> {t("organigram.password-modal.attention")}</b>
                          </h2>
                        </Col>
                        <Col span={24}>
                          <h3>{Password.messageWarning}</h3>
                        </Col>
                        <Col span={24}>
                          <h3>{Password.question}</h3>
                          <br />
                        </Col>
                        <Col span={24}>
                          <Button
                            style={{ marginRight: "15px" }}
                            onClick={() => modal.destroy()}
                            className="secondary btn"
                          >
                            {t("organigram.delete-collaborator.btn-cancel")}
                          </Button>
                          <Button
                            onClick={() => {
                              modal.destroy();
                              Password.function();
                            }}
                            className="primary btn"
                          >
                            {t("organigram.password-modal.btn-remove")}
                          </Button>
                        </Col>
                      </Row>
                    ),
                    onOk() {},
                  });
                } else if (Password.type === 2) {
                  const modal = Modal.info({
                    title: "",
                    className: "MessagesModal",
                    centered: true,
                    content: (
                      <Row style={{ marginTop: "-30px" }}>
                        <Col span={24}>
                          <p>
                            <img alt="ico" className="" src={Good} />
                          </p>
                        </Col>
                        <Col style={{ marginTop: "-15px" }} span={24}>
                          <h2>
                            <b>{Password.titleWarning}</b>
                          </h2>
                        </Col>
                        <Col span={24}>
                          <h3>{Password.messageWarning}</h3>
                        </Col>
                        <Col span={24}>
                          <h3>{Password.question}</h3>
                          <br />
                        </Col>
                        <Col span={24}>
                          <Button
                            onClick={() => {
                              modal.destroy();
                              Password.function();
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
                } else if (Password.type === 1) {
                  Password.function();
                }
                form.setFieldsValue({
                  password: "",
                });
              }}
              className="primary"
            >
              {t("organigram.delete-collaborator.btn-save")}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
