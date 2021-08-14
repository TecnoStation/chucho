import React from "react";
import { Form, Button, Modal, Checkbox } from "antd";

export default function ModalPermissions({ setPermisos, Permisos }) {
  return (
    <>
      <Modal
        title="Agregar permisos"
        className="smallModal"
        visible={Permisos}
        onCancel={() => {
          setPermisos(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setPermisos(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setPermisos(false);
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
