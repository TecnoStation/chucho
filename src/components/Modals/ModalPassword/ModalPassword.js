import React from "react";
import { Button, Input, Form, Modal } from "antd";

export default function ModalPassword({ Password, setPassword }) {
  return (
    <>
      <Modal
        title="Editar competencias institucionales"
        visible={Password}
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
            Cancelar
          </Button>,
          <input
            type="button"
            onClick={() => {
              setPassword(false);
            }}
            className="primary"
            value="Ingresar"
          />,
          <input type="button" className="primary" value="Ingresar" />,
        ]}
      >
        <p>
          Al editar las competencias institucionales se verá reflejado en todos
          los colaboradores de tu empresa.
        </p>
        <br />
        <Form layout="vertical">
          <Form.Item name="password" label="Ingresa tu contraseña de usuario">
            <Input type="text" id="nombre" placeholder="Ej. Ghkcclsd23" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
