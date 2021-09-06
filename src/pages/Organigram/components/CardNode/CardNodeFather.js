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
import CardNodeGrandFather from "./CardNodeGrandFather";
import CardNodeGrandChild from "./CardNodeGrandChild";

function CardNodeFather({ data }) {
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
            Editar colaborador
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
            Editar puesto
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
            Editar estructura
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
            Agregar permisos
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
            Difinir color de área
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
            Ver expediente
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">Ver Vacantes</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">Ver Ovjetivos</Link>
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
            Historial puesto
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
            Historial colaborador
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
                titleModal: "Dar de baja a colaborador",
                type: 0,
                messageModal:
                  "Al dar de baja a un colaborador de tu organización ya no se verá reflejada en tu organigrama.",
                messageWarning:
                  "Estás a punto de dar de baja al colaborador.[Nombre colaborador]",
                question: "¿Seguro deseas eliminarlo?",
                function: () => {
                  return false;
                },
              });
            }}
          >
            Dar de baja colaborador
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
                titleModal: "Eliminar puesto",
                type: 0,
                messageModal:
                  "Al eliminar un puesto de tu organización ya no se verá reflejada en tu organigrama.",
                messageWarning: "Estás a punto de eliminar el puesto",
                question: "¿Seguro deseas eliminarlo?",
                function: () => {
                  return false;
                },
              });
            }}
          >
            Eliminar puesto
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
        <div className="CardNodeFather" style={{ borderColor: data.color }}>
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
              setFalg("roundBtnFull showInline");
              setFalg2("roundBtnFull hide");
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
          {data.childrens.map((child, index) => (
            <CardNodeGrandChild data={child} color={data.color} />
          ))}

          {/* <div style={{ marginTop: "10px" }} className="CardNodeGrandChild">
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
          </div> */}
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

export default CardNodeFather;
