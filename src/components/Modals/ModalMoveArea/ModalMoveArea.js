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
  const [collaboratorsArea, setCollaboratorsArea] = useState([
    {
      idCollaborator: 0,
      name: "Laura Mendoza",
      position: "Programador JR",
    },
    {
      idCollaborator: 1,
      name: "Chilindrina",
      position: "Psicologa",
    },
    {
      idCollaborator: 2,
      name: "Juan charrasquiado",
      position: "Lider de proyecto",
    },
  ]);

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
                titleModal: t("organigram.delete-collaborator.modal-move.title"),
                messageModal:
                t("organigram.delete-collaborator.modal-move.text"),
                visible: true,
                type: 0,
                messageWarning:
                  modalMove.mode === 2
                    ? t("organigram.delete-collaborator.modal-move.text2")
                    : modalMove.mode === 5
                    ? t("organigram.delete-collaborator.modal-move.text0")
                    : t("organigram.delete-collaborator.modal-move.text1"),
                question:
                  modalMove.mode === 5
                    ? t("organigram.delete-collaborator.modal-move.text3")
                    : t("organigram.delete-collaborator.warning.sure"),
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
                              <b>{t("organigram.delete-collaborator.warning.completed")}</b>
                            </h2>
                          </Col>
                          <Col
                            span={24}
                            style={{ padding: "0px 60px 0px 60px" }}
                          >
                            <h3>{t("organigram.delete-collaborator.warning.text2")}</h3>
                          </Col>
                          <Col span={24}>
                            <h3></h3>
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
                              <b>{t("organigram.delete-collaborator.modal-move.completed")}</b>
                            </h2>
                          </Col>
                          <Col span={24}>
                            <h3>{t("organigram.delete-collaborator.modal-move.text4")}</h3>
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
            {t("organigram.delete-collaborator.modal-move.btn-collaborator")}
          </Button>,
          <Button
            style={{ width: "180px" }}
            onClick={() => {
              setModalSelect({
                visible: true,
                type: modalMove.type,
              });
              setModalMove(false);
            }}
            className="primary"
          >
            {t("organigram.delete-collaborator.modal-move.btn-move")}
          </Button>,
        ]}
      >
        <Row>
          <Col span={14} style={{ textAlign: "left" }}>
            {collaboratorsArea.map((collaborator, index) => (
              <Row>
                <Col span={6}>
                  <p>
                    <img alt="ico" width="50" src={Avatar} />
                  </p>
                </Col>
                <Col span={18}>
                  <span>
                    <b>{collaborator.name}</b>
                  </span>
                  <br />
                  <span>{collaborator.position}</span>
                </Col>
              </Row>
            ))}

            <br />
          </Col>
          <Col span={10}></Col>
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
