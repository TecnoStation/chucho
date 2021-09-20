import React, { useState } from "react";
import { Form, Button, Modal, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import CheckboxList from "./components/CheckboxList/CheckboxList";
import Good from "../../../assets/img/icons/bien_hecho.svg";

export default function ModalPermissions({ Permissions, setPermissions }) {
  const [t, i18n] = useTranslation("global");
  const [PermissionsList, setPermissionsList] = useState([
    {
      id: 0,
      name: "Permisos de Administrador",
      checked: false,
    },
    {
      id: 1,
      name: "Permisos para ver Nine Box",
      checked: false,
    },
    {
      id: 2,
      name: "Permisos de Edición de Objetivos",
      checked: true,
    },
    {
      id: 3,
      name: "Permisos para ver Organigrama",
      checked: true,
    },
    {
      id: 4,
      name: "Permisos para editar Organigrama",
      checked: false,
    },
    {
      id: 5,
      name: "Permisos para crear Plan de Desarrollo",
      checked: false,
    },
  ]);
  return (
    <>
      <Modal
        title={t("organigram.collaborator-form.permissions-modal.title")}
        className="PermissionsModal"
        visible={Permissions}
        onCancel={() => {
          setPermissions(false);
        }}
        footer={[
          <div style={{ marginTop: "0px" }}>
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setPermissions(false);
              }}
            >
              {t("organigram.collaborator-form.permissions-modal.btn-cancel")}
            </Button>
            <Button
              className="primary"
              onClick={() => {
                setPermissions(false);
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
                          <b>{t("organigram.collaborator-form.modal-permissions.well-done")}</b>
                        </h2>
                      </Col>
                      <Col span={24} style={{ padding: "0px 60px 0px 60px" }}>
                        <h3>{t("organigram.collaborator-form.modal-permissions.text")}</h3>
                      </Col>
                      <Col span={24}>
                        <h3></h3>
                        <br />
                      </Col>
                      <Col span={24}>
                        <Button
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
            >
              {t("organigram.collaborator-form.permissions-modal.btn-appli")}
            </Button>
          </div>,
        ]}
      >
        <Form
          id="PermissionsList"
          style={{ textAlign: "left", marginTop: "10px" }}
        >
          <CheckboxList PermissionsList={PermissionsList} />
        </Form>
      </Modal>
    </>
  );
}
