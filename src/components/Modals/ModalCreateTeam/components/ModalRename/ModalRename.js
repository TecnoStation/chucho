import React from "react";
import { Button, Input, Form, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";

function ModalRename({ modalRename, teamList, setModalRename }) {
  const [form] = useForm();
  form.setFieldsValue({
    nameTeam: modalRename.name,
  });

  const remaneTeam = (values) => {
    teamList[modalRename.index].name = values["nameTeam"];
    setModalRename(false);
  };
  return (
    <>
      <Modal
        title="Renombre de equipo"
        className="renameModal"
        centered={true}
        visible={modalRename.visible}
        onCancel={() => {
          setModalRename(false);
        }}
        footer={false}
      >
        <Form onFinish={remaneTeam} form={form} name="form1" layout="vertical">
          <Form.Item name="nameTeam">
            <Input type="text" />
          </Form.Item>
          <div style={{ textAlign: "right" }}>
            <Button
              style={{ marginRight: "20px", width: "100px" }}
              className="secondary"
              onClick={() => {
                setModalRename(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              htmlType="submit"
              style={{ width: "100px", marginRight: "0px" }}
              className="primary"
            >
              Guardar
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default ModalRename;
