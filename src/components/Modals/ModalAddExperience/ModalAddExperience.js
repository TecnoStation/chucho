import React from "react";
import { Button, Col, Row, Form, Modal, Input } from "antd";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

function ModalAddExperience({
  Experiences,
  setExperiences,
  setModalExperience,
  ModalExperience,
}) {
  const [t, i18n] = useTranslation("global");
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const arr = values["start"].split("-");
    const arr2 = values["end"].split("-");
    setExperiences([
      ...Experiences,
      {
        idExperience: uuid(),
        position: values["position"],
        business: values["business"],
        activity: values["activity"],
        start: parseMonth(arr[1]) + " " + arr[0],
        end: parseMonth(arr2[1]) + " " + arr2[0],
      },
    ]);
    form.resetFields();
    setModalExperience(false);
  };

  const parseMonth = (arr) => {
    let Month;
    switch (arr) {
      case "01":
        Month = "Enero";
        break;
      case "02":
        Month = "Febrero";
        break;
      case "03":
        Month = "Marzo";
        break;
      case "04":
        Month = "Abril";
        break;
      case "05":
        Month = "Mayo";
        break;
      case "06":
        Month = "Junio";
        break;
      case "07":
        Month = "Julio";
        break;
      case "08":
        Month = "Agosto";
        break;
      case "09":
        Month = "Septiembre";
        break;
      case "10":
        Month = "Octubre";
        break;
      case "11":
        Month = "Noviembre";
        break;
      case "12":
        Month = "Diciembre";
        break;
      default:
      // code block
    }
    return Month;
  };
  return (
    <Modal
      className="middleModal"
      title="Agregar experiencia"
      visible={ModalExperience}
      onCancel={() => {
        setModalExperience(false);
      }}
      footer={false}
    >
      <Form
        onFinish={onFinish}
        name="formExperience"
        layout="vertical"
        form={form}
        style={{ marginLeft: "10px", textAlign: "left" }}
      >
        <Form.Item
          name="position"
          label="Puesto"
          rules={[
            {
              required: true,
              message: t("field-requiered"),
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Ej. Ejecutivo de ventas SR."
            rules={[
              {
                required: true,
                message: t("field-requiered"),
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="business"
          label="Empresa"
          rules={[
            {
              required: true,
              message: t("field-requiered"),
            },
          ]}
        >
          <Input type="text" placeholder="Ej. GPO comunicación" />
        </Form.Item>
        <Form.Item
          name="activity"
          label="Actividades y logros"
          rules={[
            {
              required: true,
              message: t("field-requiered"),
            },
          ]}
        >
          <TextArea
            placeholder="Agrega una breve resumen de tus principales actividades y logros"
            rows={6}
          />
        </Form.Item>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <Form.Item
              name="start"
              label="Inicio"
              rules={[
                {
                  required: true,
                  message: t("field-requiered"),
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <Form.Item
              name="end"
              label="Fin"
              rules={[
                {
                  required: true,
                  message: t("field-requiered"),
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={{ textAlign: "right" }}>
          <Button htmlType="submit" className="primary">
            Agregar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalAddExperience;
