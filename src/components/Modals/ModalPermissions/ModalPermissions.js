import React from "react";
import { Form, Button, Modal, Checkbox } from "antd";
import { useTranslation } from "react-i18next";

export default function ModalPermissions({ Permissions, setPermissions }) {
  const [t, i18n] = useTranslation("global");
  return (
    <> 
      <Modal
        title={t("organigram.collaborator-form.permissions-modal.title")}
        className="smallModal"
        visible={Permissions}
        onCancel={() => {
          setPermissions(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setPermissions(false);
            }}
          >
            {t("organigram.collaborator-form.permissions-modal.btn-cancel")}
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setPermissions(false);
            }}
          >
            {t("organigram.collaborator-form.permissions-modal.btn-appli")}
          </Button>,
        ]}
      >
        <Form style={{ marginLeft: "10px" }}>
          <Form.Item name="Administrador">
            <Checkbox>{t("organigram.collaborator-form.permissions-modal.permissions-adminitrator")}</Checkbox>
          </Form.Item>
          <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigram.collaborator-form.permissions-modal.permissions-nine")}</Checkbox>
          </Form.Item>
          <Form.Item name="remember" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigram.collaborator-form.permissions-modal.permissions-objectives")}</Checkbox>
          </Form.Item>
          <Form.Item name="organigram" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigram.collaborator-form.permissions-modal.permissions-organizatition")}</Checkbox>
          </Form.Item>
          <Form.Item name="editar" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigram.collaborator-form.permissions-modal.permissions-edit-organization")}</Checkbox>
          </Form.Item>
          <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
            <Checkbox>{t("organigram.collaborator-form.permissions-modal.permissions-plan-developing")}</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
