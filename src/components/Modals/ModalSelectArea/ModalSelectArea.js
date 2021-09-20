import React, { useState } from "react";
import { Row, Modal, Button, Col, AutoComplete, Form } from "antd";
import { IoMdSquare } from "react-icons/io";
import Good from "../../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";
import { useForm } from "antd/lib/form/Form";

function ModalSelectArea({
  modalSelect,
  setModalSelect,
  setModalMove,
  setPassword,
  setAreas,
  setSubAreas,
}) {
  const [t, i18n] = useTranslation("global");
  const [listTeamName, setListTeamName] = useState([
    { value: "Director de marketing" },
    { value: "Gerente de ventas" },
    { value: "Analista de software" },
  ]);

  const [form] = useForm();

  return (
    <>
      <Modal
        title={
          modalSelect.type === 0
            ? "Selecciona el área al que los deseas mover"
            : "Selecciona el puesto al que los deseas mover"
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
                Cancelar
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
                            <b>Colaboradores reubicados</b>
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
                              form.resetFields();
                              setPassword({
                                titleModal: "Eliminar area",
                                messageModal:
                                  "Al eliminar un área de tu organnización ya no se verá reflejada en tu organigrama",
                                visible: true,
                                type: 2,
                                titleWarning: "Area eliminada",
                                question: "",
                                function: () => {
                                  console.log("sub areas");
                                  console.log(modalSelect.subAreas);
                                  console.log("areas");
                                  console.log(modalSelect.Areas);

                                  if (modalSelect.Areas !== undefined) {
                                    const arrayFilterSub =
                                      modalSelect.subAreas.filter(
                                        (item) =>
                                          item.item !== modalSelect.idArea
                                      );
                                    setSubAreas(arrayFilterSub);
                                    const arrayFilter =
                                      modalSelect.Areas.filter(
                                        (item) =>
                                          item.idArea !== modalSelect.idArea
                                      );
                                    setAreas(arrayFilter);
                                  } else {
                                    const arrayFilterSub =
                                      modalSelect.subAreas.filter(
                                        (item) =>
                                          item.idSubArea !==
                                          modalSelect.idSubArea
                                      );
                                    setSubAreas(arrayFilterSub);
                                  }

                                  console.log("sub areas");
                                  console.log(modalSelect.subAreas);
                                  console.log("areas");
                                  console.log(modalSelect.Areas);
                                },
                              });
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
                Mover
              </Button>
            </Col>
          </Row>,
        ]}
      >
        <Form form={form} style={{ textAlign: "left" }} layout="vertical">
          <Form.Item name="password" label="">
            <AutoComplete
              className="autoComplete"
              placeholder="Buscar área"
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
    </>
  );
}

export default ModalSelectArea;
