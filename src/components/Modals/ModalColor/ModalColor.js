import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "antd";

import "./ModalColor.scss";
import { useTranslation } from "react-i18next";
import SelectColor from "./components/SelectColor/SelectColor";
import { useForm } from "antd/lib/form/Form";



export default function ModalColor({ Color, setColor }) {
  const [t, i18n] = useTranslation("global");
  const [form] = useForm();
  const [colors, setColors] = useState([
    {
      value: 0,
      name: 'Rojo',
      color: "#d32c2c"
    },
    {
      value: 1,
      name: 'Naranja',
      color: "#ff5d5d"
    },
    {
      value: 2,
      name: 'Cyan',
      color: "#2cccd3"
    }
  ])

  
  
  return (
    <>
      <Modal
        title={t("organigram.organigram-page.modal-color.title")}
        className="ColorModal"
        centered={true}
        visible={Color}
        onCancel={() => {
          setColor(false);
        }}
        footer={[
          <div style={{position: "fixed", marginTop:"-5px",marginLeft: "70px" }}>
            <Button 
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setColor(false);
            }}
          >
            {t("organigram.organigram-page.modal-color.btn-cancel")}
          </Button>
          <Button
            className="primary"
            onClick={() => {
              setColor(false);
              form.resetFields();
            }}
          >
            {t("organigram.organigram-page.modal-color.btn-apply")}
          </Button>
          </div>
        ]}
      >
        <Form form={form} 
        
        style={{textAlign: "left"}} >
        <Form.Item name="color">
          <SelectColor 
          colors={colors}
          placeholder={t("organigram.organigram-page.modal-color.placeholder-color")}
          data={colors}
           />
         
        </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
