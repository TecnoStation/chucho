import React, { useState } from "react";
import { Col, Dropdown, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import Avatar from "../../../../assets/img/avatar.png";
import More from "../../../../assets/img/icons/more_vert-24px.svg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import Insings from "../../../../assets/img/icons/insights-24px.svg";
import Trending from "../../../../assets/img/icons/trending_up-24px.svg";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import { v4 as uuid } from "uuid";

import "./CardNode.scss";
import ModalPermissions from "../../../../components/Modals/ModalPermissions/ModalPermissions";
import ModalColor from "../../../../components/Modals/ModalColor/ModalColor";
import ModalHistorialCollaborator from "../../../../components/Modals/ModalHistorialCollaborator/ModalHistorialCollaborator";
import ModalHistorialJob from "../../../../components/Modals/ModalHistorialJob/ModalHistorialJob";
import ModalPassword from "../../../../components/Modals/ModalPassword/ModalPassword";

export default function CardNodeEraseGrandFather({
  setModalPassword,
  fathers,
  setFathers,
  index,
}) {
  const [t, i18n] = useTranslation("global");
  const [Permissions, setPermissions] = useState(false);
  const [Color, setColor] = useState(false);

  const [modalHistorialC, setModalHistorialC] = useState(false);
  const [HistorialP, setHistorialP] = useState(false);
  // implementar array
  const [Password, setPassword] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key={uuid()}>
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
      </Menu.Item>
      <Menu.Item key={uuid()}>
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
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to={
              "/" + t("routes.organigram") + "/" + t("paths_organigram.eraser")
            }
          >
            {t("organigram.organigram-page.munu-2.edit-estructure")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setPermissions(true);
            }}
          >
            {t("organigram.organigram-page.munu-2.add-permissions")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setColor(true);
            }}
          >
            {t("organigram.organigram-page.munu-2.define-colour")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={uuid()}>
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
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">
            {t("organigram.organigram-page.munu-2.watch-vacancies")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">
            {t("organigram.organigram-page.munu-2.watch-objectives")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setHistorialP(true);
            }}
          >
            {t("organigram.organigram-page.munu-2.record-position")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link
            to="#"
            onClick={() => {
              setModalHistorialC(true);
            }}
          >
            {t("organigram.organigram-page.munu-2.record-collaborators")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={uuid()}>
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
                  return false;
                },
              });
            }}
          >
            {t("organigram.organigram-page.munu-2.give-drop-collaborators")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
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
                messageModal: t("organigram.menu-treedrop.modal-position.text"),
                messageWarning: t(
                  "organigram.menu-treedrop.modal-position.text2"
                ),
                question: t(
                  "organigram.menu-treedrop.modal-position.safe-want-remove"
                ),
                function: () => {
                  return false;
                },
              });
            }}
          >
            {t("organigram.organigram-page.munu-2.remove-position")}
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div id="GrandFather">
        <div>
          <p className="showBlock">Área de Marketing</p>
        </div>

        <div className="CardNodeGrandFather" style={{ borderColor: "#2cccd3" }}>
          <Row
            style={{ textAlign: "left", height: "50px", paddingBottom: "50px" }}
            className="dividerBottomFull"
          >
            <Col span={5}>
              <p>
                <img
                  style={{ marginTop: "-5px" }}
                  alt="ico"
                  width="55"
                  src={Avatar}
                />
              </p>
            </Col>
            <Col span={16}>
              <span>Panchita Lopez</span>
              <br />
              <span>
                <b>Directora de marketing</b>
              </span>
            </Col>
            <Col span={3}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Link
                  to="#"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    style={{ marginTop: "5px" }}
                    alt="logo"
                    src={More}
                    width="30"
                    height="30"
                  />
                </Link>
              </Dropdown>
            </Col>
          </Row>
          <Row style={{ marginTop: "3px" }}>
            <Col span={3} className="iconGray" style={{ fontSize: "20px" }}>
              <img
                style={{ marginTop: "-15px" }}
                alt="ico"
                width="22"
                src={Trending}
              />
            </Col>
            <Col span={3} className="iconGreenTwo">
              <span>0%</span>
            </Col>
            <Col span={3}>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="20"
                src={Insings}
              />
            </Col>
            <Col span={3} className="iconGreenTwo">
              <span>0%</span>
            </Col>
            <Col span={3} className="iconRed" style={{ fontSize: "16px" }}>
              <GiOfficeChair />
            </Col>
            <Col span={3} className="iconRed">
              <span>0</span>
            </Col>
            <Col span={3} className="iconGray" style={{ fontSize: "16px" }}>
              <FaUserAlt />
            </Col>
            <Col span={3}>
              <span>0</span>
            </Col>
          </Row>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "0px",
            paddingBottom: "15px",
          }}
        >
          <Link
            to="#"
            onClick={() => {
              setFathers([
                ...fathers,
                {
                  idFather: fathers.length,
                },
              ]);
              console.log(fathers);
            }}
          >
            <PlusCircleOutlined style={{ fontSize: "20px" }} />
          </Link>
        </div>
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
    </>
  );
}
