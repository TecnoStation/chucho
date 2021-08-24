import React from "react";
import { Button, Input, Form, Modal, Row, Col } from "antd";
import Warning from "../../../assets/img/icons/atencion.svg";
import { useTranslation } from "react-i18next";

import "./ModalPassword.scss";

export default function ModalPassword({ Password, setPassword }) {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Modal
        className="modalPref"
        title={Password.titleModal}
        visible={Password.visible}
        onCancel={() => {
          setPassword(false); 
        }}
        onOk={() => {
          setPassword(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setPassword(false);
            }}
          >
           {t("organigrama.delete-collaborator.btn-cancel")}
          </Button>,
          <input
            type="button"
            onClick={() => {
              setPassword(false);
              const modal = Modal.info({
                title: "",
                content: (
                  <Row>
                    <Col span={24}>
                      <p>
                        <img alt="ico" className="" src={Warning} />
                      </p>
                    </Col>
                    <Col span={24}>
                      <h3>{t("organigrama.delete-collaborator.warning.title")}</h3>
                    </Col>
                    <Col span={24}>
                      <h4>{Password.messageWarning}</h4>
                    </Col>
                    <Col span={24}>
                      <h4>{Password.question}</h4>
                      <br />
                    </Col>
                    <Col span={24}>
                      <Button
                        style={{ marginRight: "15px" }}
                        onClick={() => modal.destroy()}
                        className="secondary btn"
                      >
                        {t("organigrama.delete-collaborator.warning.btn-cancel")}
                      </Button>
                      <Button
                        onClick={() => modal.destroy()}
                        className="primary btn"
                      >
                       {t("organigrama.delete-collaborator.warning.btn-delete")}
                      </Button>
                    </Col>
                  </Row>
                ),
                onOk() {},
              });
            }}
            className="primary"
            value={t("organigrama.delete-collaborator.btn-save")}
          />,
        ]}
      >
        <p style={{ textAlign: "left" }}>{Password.messageModal}</p>
        <br />
        <Form layout="vertical">
          <Form.Item name="password" label={t("organigrama.delete-collaborator.insert-password")}>
            <Input type="text" id="nombre" placeholder="Ej. Ghkcclsd23" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
