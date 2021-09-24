import React from "react";
import { Button, Col, Modal, Row } from "antd";
import { useTranslation } from "react-i18next";
import Cup from "../../../assets/img/icons/cup.svg";
import SelectDinamic from "../../SelectDinamic/SelectDinamic";
import Form from "rc-field-form/es/Form";

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

  //----------------- End Selects Dinamic Data --------------------------------
  return (
    <Modal
      title={t("organigram.organigram-page.modal-color.title")}
      className="recognitionModal"
      centered={true}
      visible={recognition}
      onCancel={() => {
        setRecognition(false);
      }}
      footer={[
        <div
          style={{ position: "fixed", marginTop: "-5px", marginLeft: "70px" }}
        >
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setRecognition(false);
            }}
          >
            {t("organigram.organigram-page.modal-color.btn-cancel")}
          </Button>
          <Button
            className="primary"
            onClick={() => {
              setRecognition(false);
            }}
          >
            {t("organigram.organigram-page.modal-color.btn-apply")}
          </Button>
        </div>,
      ]}
    >
      <Row>
        <Col span={12}>
          <img alt="Cup" style={{ width: "174px" }} src={Cup} />
        </Col>
        <Col span={12}>
          <Form>
            <Form.Item>
              <SelectDinamic
                placeholder={t(
                  "organigram.teams-modal.placeholder-imput-selec"
                )}
                data={data}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalRecognition;
