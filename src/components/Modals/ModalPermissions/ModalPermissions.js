import React from "react";
import { Form, Button, Modal, Checkbox } from "antd";
import { useTranslation } from "react-i18next";

export default function ModalPermissions({ Permissions, setPermissions }) {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Modal
        title="Agregar permisos"
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
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setPermissions(false);
            }}
          >
            Aplicar
          </Button>,
        ]}
      >
        <Form style={{ marginLeft: "10px" }}>
          <Form.Item name="Administrador">
            <Checkbox>Permisos de Administrador</Checkbox>
          </Form.Item>
          <Form.Item name="Nine" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para ver Nine Box</Checkbox>
          </Form.Item>
          <Form.Item name="remember" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos de Edición de Objetivos</Checkbox>
          </Form.Item>
          <Form.Item name="Organigrama" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para ver Organigrama</Checkbox>
          </Form.Item>
          <Form.Item name="editar" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para editar Organigrama</Checkbox>
          </Form.Item>
          <Form.Item name="Desarrollo" style={{ marginTop: "-25px" }}>
            <Checkbox>Permisos para crear Plan de Desarrollo</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
