import React, { useState } from "react";
import { Row, Modal, Button, Col } from "antd";
import Avatar from "../../../assets/img/avatar.png";
import Good from "../../../assets/img/icons/bien_hecho.svg";
import { useTranslation } from "react-i18next";
import ModalSelectArea from "../ModalSelectArea/ModalSelectArea";

function ModalMoveArea({
  modalMove,
  setModalMove,
  setPassword,
  setAreas,
  setSubAreas,
  setPositionsInfo,
}) {
  const [t, i18n] = useTranslation("global");
  const [modalSelect, setModalSelect] = useState(false);

  return (
    <>
      <Modal
        title={modalMove.modalTitle}
        className="modalCuztom"
        centered={true}
        visible={modalMove.visible}
        onCancel={() => {
          setModalMove(false);
        }}
        footer={[
          <Button
            onClick={() => {
              setModalMove(false);
              setPassword({
                titleModal: "Darde baja colaboradores",
                messageModal:
                  "Al dar de baja a un colaborador, esté ya no formará parte de tu organización.",
                visible: true,
                type: 0,
                messageWarning:
                  modalMove.mode === 2
                    ? "Estas a punto de dar de baja a  [número] los colaboradores"
                    : modalMove.mode === 5
                    ? "Estas a punto de dar de baja al colaborador [Nombre del colaborador]"
                    : "Estas a punto de dar de baja a los colaboradores",
                question:
                  modalMove.mode === 5
                    ? "¿Seguro deseas eliminarlo?"
                    : "¿Estás seguro?",
                function: () => {
                  if (modalMove.mode === 1) {
                    const arrayFilter = modalMove.subAreas.filter(
                      (item) => item.idSubArea !== modalMove.idSubArea
                    );
                    setSubAreas(arrayFilter);
                    // setAreas(arrayFilter);
                  } else if (modalMove.mode === 2) {
                    const arrayFilter = modalMove.PositionsInfo.filter(
                      (item) => item.idPositionInfo !== modalMove.idPositionInfo
                    );
                    setPositionsInfo(arrayFilter);
                  } else if (modalMove.mode === 5) {
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
                              <b>¡Completado!</b>
                            </h2>
                          </Col>
                          <Col span={24}>
                            <h3>Has dado de baja al colaborador</h3>
                          </Col>
                          <Col span={24}>
                            <h3></h3>
                            <br />
                          </Col>
                          <Col span={24}>
                            <Button
                              style={{ marginRight: "15px" }}
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
                  } else {
                    const arrayFilter = modalMove.Areas.filter(
                      (item) => item.idArea !== modalMove.idArea
                    );
                    setAreas(arrayFilter);
                  }
                },
              });
            }}
            style={{ width: "180px" }}
            className="secondary"
          >
            Dar de baja
          </Button>,
          <Button
            style={{ width: "180px" }}
            onClick={() => {
              setModalSelect(true);
              setModalMove(false);
            }}
            className="primary"
          >
            Mover a otra área
          </Button>,
        ]}
      >
        <Row>
          <Col span={12}>
            <Row>
              <Col span={7}>
                <p>
                  <img alt="ico" width="50" src={Avatar} />
                </p>
              </Col>
              <Col span={15}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <p>
                  <img alt="ico" width="50" src={Avatar} />
                </p>
              </Col>
              <Col span={15}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <p>
                  <img alt="ico" width="50" src={Avatar} />
                </p>
              </Col>
              <Col span={15}>
                <span>
                  <b>Laura Mendoza</b>
                </span>
                <br />
                <span>Programador JR</span>
              </Col>
            </Row>
            <br />
          </Col>
          <Col span={12}></Col>
        </Row>
      </Modal>
      <ModalSelectArea
        modalSelect={modalSelect}
        setModalSelect={setModalSelect}
        setModalMove={setModalMove}
      />
    </>
  );
}

export default ModalMoveArea;
