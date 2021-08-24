import React from "react";
import { Button, Col, Row, Form, Modal, Input } from "antd";
import { v4 as uuid } from "uuid";

const { TextArea } = Input;

function ModalAddExperience({
  Experiences,
  setExperiences,
  setModalExperience,
  ModalExperience,
}) {
  const onFinish = (values) => {
    setExperiences([
      ...Experiences,
      {
        idExperience: uuid(),
        position: values["position"],
        business: values["business"],
        activity: values["activity"],
        start: values["start"],
        end: values["end"],
      },
    ]);
  };
  return (
    <Modal
      className="middleModal"
      title="Agregar experiencia"
      visible={ModalExperience}
      onCancel={() => {
        setModalExperience(false);
      }}
      footer={[
        <Button
          className="primary"
          onClick={() => {
            setModalExperience(false);
          }}
        >
          Agregar
        </Button>,
      ]}
    >
      <Form
        onFinish={onFinish}
        name="formExperience"
        layout="vertical"
        style={{ marginLeft: "10px" }}
      >
        <Form.Item name="position" label="Puesto">
          <Input type="text" placeholder="Ej. Ejecutivo de ventas SR." />
        </Form.Item>
        <Form.Item name="business" label="Empresa">
          <Input type="text" placeholder="Ej. GPO comunicación" />
        </Form.Item>
        <Form.Item name="activity" label="Actividades y logros">
          <TextArea
            placeholder="Agrega una breve resumen de tus principales actividades y logros"
            rows={6}
          />
        </Form.Item>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <Form.Item name="start" label="Inicio">
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item name="end" label="Fin">
              <Input type="date" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default ModalAddExperience;
