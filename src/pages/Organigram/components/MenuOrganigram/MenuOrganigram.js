import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ModalPermissions from "../../../../components/Modals/ModalPermissions/ModalPermissions";
import ModalColor from "../../../../components/Modals/ModalColor/ModalColor";
import ModalHistorialCollaborator from "../../../../components/Modals/ModalHistorialCollaborator/ModalHistorialCollaborator";
import ModalHistorialJob from "../../../../components/Modals/ModalHistorialJob/ModalHistorialJob";
import ModalPassword from "../../../../components/Modals/ModalPassword/ModalPassword";
import { Button, Col, Menu, Modal, Row } from "antd";
import Good from "../../../../assets/img/icons/bien_hecho.svg";

import "./MenuOrganigrama.scss";
import ModalMoveArea from "../../../../components/Modals/ModalMoveArea/ModalMoveArea";

function MenuOrganigram({ visible, setVisible }) {
  const [t, i18n] = useTranslation("global");
  const [Permissions, setPermissions] = useState(false);
  const [Color, setColor] = useState(false);
  const [modalHistorialC, setModalHistorialC] = useState(false);
  const [HistorialP, setHistorialP] = useState(false);
  const [modalMove, setModalMove] = useState(false);
  const [Password, setPassword] = useState({
    visible: false,
    titleModal: "",
    messageModal: "",
    actionWarning: "",
  });

  return (
    <>
      <div className={visible}>
        <Menu className="menuOrganigram">
          <Menu.Item key={uuid()}>
            <Link
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.areasandpositions-collaborator")
              }
            >
              {t("organigram.organigram-page.munu-2.edit-colaborator")}
            </Link>
          </Menu.Item>
          <Menu.Item key={uuid()}>
            <Link
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.areasandpositions-addjob")
              }
            >
              {t("organigram.organigram-page.munu-2.dit-position")}
            </Link>
          </Menu.Item>
          <Menu.Item key={uuid()}>
            <Link
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.eraser")
              }
            >
              {t("organigram.organigram-page.munu-2.edit-estructure")}
            </Link>
          </Menu.Item>

          <Menu.Item key={uuid()}>
            <Link
              to="#"
              onClick={() => {
                setPermissions(true);
                setVisible(false);
              }}
            >
              {t("organigram.organigram-page.munu-2.add-permissions")}
            </Link>
          </Menu.Item>

          <Menu.Item key={uuid()}>
            <Link
              to="#"
              onClick={() => {
                setColor(true);
                setVisible(false);
              }}
            >
              {t("organigram.organigram-page.munu-2.define-colour")}
            </Link>
          </Menu.Item>

          <Menu.Divider />
          <Menu.Item key={uuid()}>
            <Link
              to={
                "/" +
                t("routes.organigram") +
                "/" +
                t("paths_organigram.areasandpositions-perfil")
              }
            >
              {t("organigram.organigram-page.munu-2.watch-proceedings")}
            </Link>
          </Menu.Item>
          <Menu.Item key={uuid()} disabled>
            <Link to="#">
              {t("organigram.organigram-page.munu-2.watch-vacancies")}
            </Link>
          </Menu.Item>

          <Menu.Item key={uuid()} disabled>
            <Link to="#">
              {t("organigram.organigram-page.munu-2.watch-objectives")}
            </Link>
          </Menu.Item>

          <Menu.Item key={uuid()}>
            <Link
              to="#"
              onClick={() => {
                setHistorialP(true);
                setVisible(false);
              }}
            >
              {t("organigram.organigram-page.munu-2.record-position")}
            </Link>
          </Menu.Item>
          <Menu.Item key={uuid()}>
            <Link
              to="#"
              onClick={() => {
                setModalHistorialC(true);
                setVisible(false);
              }}
            >
              {t("organigram.organigram-page.munu-2.record-collaborators")}
            </Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key={uuid()}>
            <Link
              to="#"
              onClick={() => {
                setPassword({
                  visible: true,
                  titleModal: t(
                    "organigram.menu-treedrop.modal-collaborator.drop-collaborators"
                  ),
                  type: 0,
                  messageModal: t(
                    "organigram.menu-treedrop.modal-collaborator.text"
                  ),
                  messageWarning: t(
                    "organigram.menu-treedrop.modal-collaborator.text2"
                  ),
                  question: t(
                    "organigram.menu-treedrop.modal-collaborator.safe-want-remove"
                  ),
                  function: () => {
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
                              <b>{t("organigram.menu-treedrop.modal-message.complette")}</b>
                            </h2>
                          </Col>
                          <Col span={24}>
                            <h3></h3>
                          </Col>
                          <Col span={24}>
                            <h3>{t("organigram.menu-treedrop.modal-message.text")}</h3>
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
                    // return false;
                  },
                });
                setVisible(false);
              }}
            >
              {t("organigram.organigram-page.munu-2.give-drop-collaborators")}
            </Link>
          </Menu.Item>
          <Menu.Item key={uuid()}>
            <Link
              to="#"
              onClick={() => {
                setPassword({
                  visible: true,
                  titleModal: t(
                    "organigram.menu-treedrop.modal-position.remove-position"
                  ),
                  type: 0,
                  messageModal: t(
                    "organigram.menu-treedrop.modal-position.text"
                  ),
                  messageWarning: t(
                    "organigram.menu-treedrop.modal-position.text2"
                  ),
                  question: t(
                    "organigram.menu-treedrop.modal-position.safe-want-remove"
                  ),
                  function: () => {
                    setModalMove({
                      visible: true,
                      mode: 5,

                      modalTitle:
                      t("organigram.menu-treedrop.modalposition.tex1"),
                    });
                  },
                });
                setVisible(false);
              }}
            >
              {t("organigram.organigram-page.munu-2.remove-position")}
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      <ModalPermissions
        Permissions={Permissions}
        setPermissions={setPermissions}
      />

      <ModalColor Color={Color} setColor={setColor} />

      <ModalHistorialCollaborator
        modalHistorialC={modalHistorialC}
        setModalHistorialC={setModalHistorialC}
      />
      <ModalHistorialJob
        HistorialP={HistorialP}
        setHistorialP={setHistorialP}
      />
      <ModalPassword Password={Password} setPassword={setPassword} />
      <ModalMoveArea
        modalMove={modalMove}
        setModalMove={setModalMove}
        setPassword={setPassword}
      />
    </>
  );
}

export default MenuOrganigram;
