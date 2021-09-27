import React, { useState } from "react";
import { Button, Col, Modal, Row, Form } from "antd";
import Cup from "../../../assets/img/icons/cup.svg";
import SelectDinamic from "../../SelectDinamic/SelectDinamic";
import { useTranslation } from "react-i18next";
import Editor from "../../Editor/Editor";

function ModalRecognition({ recognition, setRecognition }) {
  const [t, i18n] = useTranslation("global");
  //----------------- Selects Dinamic Data ------------------------------------

  const data = [
    {
      id: 0,
      value: "dato1",
      name: "dato1",
    },
    {
      id: 1,
      value: "dato2",
      name: "dato2",
    },
  ];

  const user = {
    idUser: 0,
    name: "Estefania Navarro",
    position: "Director de MKT",
  };

  //----------------- End Selects Dinamic Data --------------------------------
  const [value, setValue] = useState("");
  return (
    <Modal
      title={t("management-indicators.modal-recognition.title")}
      className="recognitionModal"
      centered={true}
      visible={recognition}
      onCancel={() => {
        setRecognition(false);
      }}
      footer={[
        <div>
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setRecognition(false);
            }}
          >
            {t("management-indicators.modal-recognition.btn-cancel")}
          </Button>
          <Button
            style={{ width: "80px" }}
            className="primary"
            onClick={() => {
              setRecognition(false);
            }}
          >
            {t("management-indicators.modal-recognition.btn-create")}
          </Button>
        </div>,
      ]}
    >
      <Row
        style={{
          marginTop: "30px",
          textAlign: "center",
          padding: "0px 20px 0px 20px",
        }}
      >
        <Col span={8}>
          <img alt="Cup" style={{ width: "174px" }} src={Cup} />
          <br />
          <span>{t("management-indicators.modal-recognition.text")}</span>
          <br />
          <span className="secondaryText">{user.name}</span>
          <br />
          <span className="primaryText">{user.position}</span>
        </Col>
        <Col
          style={{
            textAlign: "left",
            padding: "0px 0px 0px 40px",
          }}
          span={16}
        >
          <Form layout="vertical">
            <Form.Item
              name="reason"
              label={t("management-indicators.modal-recognition.reason-label")}
            >
              <SelectDinamic
                placeholder={t(
                  "management-indicators.modal-recognition.solution-pleceholder"
                )}
                data={data}
              />
            </Form.Item>
            <Form.Item
              name="reason"
              label={t(
                "management-indicators.modal-recognition.comments-label"
              )}
            >
              <Editor
                id="3"
                placeholder={t(
                  "management-indicators.modal-recognition.text-placeholder"
                )}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalRecognition;
