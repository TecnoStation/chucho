import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

export default function ModalBranch({
  modal,
  setModal,
  form,
  branchs,
  setBranchs,
  editionmode,
  setEditionmode,
  index,
}) {
  const sendBranch = (values) => {
    
    setBranchs([
      ...branchs,
      {
        idBranch: uuid(),
        name: values["name"],
        direction: values["direction"],
      },
    ]);

    form.resetFields();
    setModal(false);
  };

  const editBranch = (values) => {
    branchs[index].name = values["name"];
    branchs[index].direction = values["direction"];
    setModal(false);
    setEditionmode(false);
    form.setFieldsValue({
      name: "",
      direction: "",
    });
  };

  return (
    <Modal
      title={editionmode ? "Editar Sucursal" : "Agregar sucursal"}
      className="middleModal"
      visible={modal}
      onCancel={() => {
        setModal(false);
        form.setFieldsValue({
          name: "",
          direction: "",
        });
      }}
      footer={false}
    >
      <Form
        onFinish={editionmode ? editBranch : sendBranch}
        name="formBranch"
        layout="vertical"
        initialValues={{
          idBranch: "",
          name: "",
          direction: "",
        }}
        form={form}
        style={{ textAlign: "left" }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Campo requerido",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Agrega un nombre descriptivo para está sucursal"
          />
        </Form.Item>

        <Form.Item
          name="direction"
          rules={[
            {
              required: true,
              message: "Campo requerido",
            },
          ]}
        >
          <Input
            addonAfter={<EnvironmentOutlined />}
            placeholder="Agrega la dirección de la sucursal"
          />
        </Form.Item>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <Button
            onClick={() => {
              setModal(false);
            }}
            className="secondary"
            style={{ marginRight: "16px" }}
          >
            Cancelar
          </Button>

          {editionmode ? (
            <Button className="primary" htmlType="submit">
              Editar
            </Button>
          ) : (
            <Button className="primary" htmlType="submit">
              Guardar
            </Button>
          )}
        </div>
      </Form>
    </Modal>
  );
}
