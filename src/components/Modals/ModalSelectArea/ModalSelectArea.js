import React, { useState } from "react";
import { Row, Modal, Button, Col, AutoComplete, Form } from "antd";
import { IoMdSquare } from "react-icons/io";
import Good from "../../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";

function ModalSelectArea({ modalSelect, setModalSelect, setModalMove }) {
  const [t, i18n] = useTranslation("global");
  const [listTeamName, setListTeamName] = useState([
    { value: "Director de marketing" },
    { value: "Gerente de ventas" },
    { value: "Analista de software" },
  ]);

  return (
    <Modal
      title={
        modalSelect.type === 0
          ? t("organigram.delete-collaborator.modal-collaborator.tex1")
          : t("organigram.delete-collaborator.modal-collaborator.tex")
      }
      visible={modalSelect}
      centered={modalSelect.visible}
      className="selectAreaModal"
      onCancel={() => {
        setModalSelect(false);
      }}
      footer={[
        <Row style={{ marginTop: "0px" }}>
          <Col span={24}>
            <Button
              style={{ marginRight: "15px" }}
              className="secondary"
              onClick={() => {
                setModalSelect(false);
              }}
            >
              {t("organigram.password-modal.btn-cancel")}
            </Button>

            <Button
              type="button"
              className="primary"
              onClick={() => {
                setModalSelect(false);
                setModalMove(false);
                const modal = Modal.info({
                  title: "",
                  className: "MessagesModal",
                  centered: true,
                  content: (
                    <Row style={{ marginTop: "-15px" }}>
                      <Col span={24}>
                        <p>
                          <img alt="ico" className="" src={Good} />
                        </p>
                      </Col>
                      <Col style={{ marginTop: "0px" }} span={24}>
                        <h2>
                          <b>{t("organigram.delete-collaborator.modal-collaborator.collaborators")}</b>
                        </h2>
                      </Col>
                      <Col span={24}>
                        <h3></h3>
                      </Col>
                      <Col span={24}>
                        <h3></h3>
                        <br />
                      </Col>
                      <Col span={24}>
                        <Button
                          style={{ marginRight: "15px", width: "50%" }}
                          onClick={() => {
                            modal.destroy();
                          }}
                          className="primary btn"
                        >
                          {t("organigram.password-modal.btn-done")}
                        </Button>
                      </Col>
                    </Row>
                  ),
                  onOk() {},
                });
              }}
            >
               {t("organigram.delete-collaborator.modal-collaborator.btn-move")}
            </Button>
          </Col>
        </Row>,
      ]}
    >
      <Form style={{ textAlign: "left" }} layout="vertical">
        <Form.Item name="password" label="">
          <AutoComplete
            className="autoComplete"
            placeholder={t("organigram.delete-collaborator.modal-collaborator.search-placeholder")}
            options={listTeamName}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Form.Item>
      </Form>
      <Row>
        <Col
          className="tagThree"
          span={24}
          style={{
            textAlign: "left",
            height: "32px",
            paddingTop: "5px",
            paddingLeft: "10px",
          }}
        >
          <IoMdSquare className="iconGreen" /> Dirección de Finanzas
        </Col>
      </Row>
    </Modal>
  );
}

export default ModalSelectArea;
