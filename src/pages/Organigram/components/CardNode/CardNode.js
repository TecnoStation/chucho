import { Button, Col, Dropdown, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../../assets/img/avatar.png";
import More from "../../../../assets/img/icons/more_vert-24px.svg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import Insings from "../../../../assets/img/icons/insights-24px.svg";
import Trending from "../../../../assets/img/icons/trending_up-24px.svg";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import ModalPermissions from "../../../../components/Modals/ModalPermissions/ModalPermissions";
import ModalColor from "../../../../components/Modals/ModalColor/ModalColor";
import ModalHistorialCollaborator from "../../../../components/Modals/ModalHistorialCollaborator/ModalHistorialCollaborator";
import ModalHistorialJob from "../../../../components/Modals/ModalHistorialJob/ModalHistorialJob";
import ModalPassword from "../../../../components/Modals/ModalPassword/ModalPassword";

import "./CardNode.scss";

export default function CardNode({ data }) {
  console.log(data);

  const [t, i18n] = useTranslation("global");
  const [active, setActive] = useState("CardNodeGrandChildhide");
  const [flag, setFalg] = useState("roundBtnFull showInline");
  const [flag2, setFalg2] = useState("roundBtnFull hide");
  const [Permissions, setPermissions] = useState(false);
  const [Color, setColor] = useState(false);

  const [modalHistorialC, setModalHistorialC] = useState(false);
  const [HistorialP, setHistorialP] = useState(false);
  // implementar array
  const [Password, setPassword] = useState({
    visible: false,
    titleModal: "",
    messageModal: "",
    actionWarning: "",
  });

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
          <Link to="#">{t("organigram.organigram-page.munu-2.watch-vacancies")}</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">{t("organigram.organigram-page.munu-2.watch-objectives")}</Link>
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
                titleModal: t("organigram.menu-treedrop.modal-collaborator.drop-collaborators"),
                type: 0,
                messageModal:
                t("organigram.menu-treedrop.modal-collaborator.text"),
                messageWarning:
                t("organigram.menu-treedrop.modal-collaborator.text2"),
                question: t("organigram.menu-treedrop.modal-collaborator.safe-want-remove"),
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
                titleModal: t("organigram.menu-treedrop.modal-position.remove-position"),
                type: 0,
                messageModal:
                t("organigram.menu-treedrop.modal-position.text"),
                messageWarning: t("organigram.menu-treedrop.modal-position.text2"),
                question: t("organigram.menu-treedrop.modal-position.safe-want-remove"),
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
      <div>
        <div>
          <p className="showBlock">Área de Marketing</p>
        </div>
        <div className={data.className} style={{ borderColor: data.color }}>
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
              <span>42%</span>
            </Col>
            <Col className="iconGray" span={3}>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="20"
                src={Insings}
              />
            </Col>
            <Col span={3} className="iconGreenTwo">
              <span>35%</span>
            </Col>
            <Col span={3} className="iconRed" style={{ fontSize: "18px" }}>
              <GiOfficeChair />
            </Col>
            <Col span={3} className="iconRed">
              <span>8</span>
            </Col>
            <Col span={3} className="iconGray" style={{ fontSize: "16px" }}>
              <FaUserAlt />
            </Col>
            <Col span={3}>
              <span>18</span>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "-10px", marginLeft: "50px" }}>
          <Button
            className={flag}
            onClick={() => {
              setActive("CardNodeGrandChildShow");
              setFalg("roundBtnFull hide");
              setFalg2("roundBtnFull showInline");
            }}
            icon={<DownOutlined />}
            style={{ background: data.color, color: "#fff" }}
            size="small"
          />
          <Button
            className={flag2}
            onClick={() => {
              setActive("CardNodeGrandChildhide");
              setFalg("primary roundBtnFull showInline");
              setFalg2("primaryInvert roundBtnFull hide");
            }}
            icon={<UpOutlined />}
            style={{
              background: "#fff",
              color: data.color,
              borderColor: data.color,
            }}
            size="small"
          />
        </div>
        <div className={active}>
          <div style={{ marginTop: "10px" }} className="CardNodeGrandChild">
            <Row
              style={{
                textAlign: "left",
                height: "50px",
                paddingBottom: "50px",
              }}
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
                <span>42%</span>
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
                <span>35%</span>
              </Col>
              <Col span={3} className="iconRed" style={{ fontSize: "18px" }}>
                <GiOfficeChair />
              </Col>
              <Col span={3} className="iconRed">
                <span>8</span>
              </Col>
              <Col span={3} className="iconGray" style={{ fontSize: "16px" }}>
                <FaUserAlt />
              </Col>
              <Col span={3}>
                <span>18</span>
              </Col>
            </Row>
            <svg
              className="line"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="120"
              viewBox="0 0 140 90"
            >
              <path
                d="m 5,-70 v 280 h 95"
                fill="none"
                stroke={data.color}
                stroke-width="5"
              />
            </svg>
          </div>
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
