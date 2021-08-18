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

import "./CardNode.scss";
import ModalPermissions from "../../../../components/Modals/ModalPermissions/ModalPermissions";
import ModalColor from "../../../../components/Modals/ModalColor/ModalColor";
import ModalHistorialColaborator from "../../../../components/Modals/ModalHistorialColaborator/ModalHistorialColaborator";
import ModalHistorialJob from "../../../../components/Modals/ModalHistorialJob/ModalHistorialJob";
import ModalPassword from "../../../../components/Modals/ModalPassword/ModalPassword";

export default function CardNode({ setModalPassword }) {
  const [t, i18n] = useTranslation("global");
  const [active, setActive] = useState("CardNodeGrandChildhide");
  const [flag, setFalg] = useState("primary roundBtnFull showInline");
  const [flag2, setFalg2] = useState("primaryInvert roundBtnFull hide");
  const [Permisions, setPermissions] = useState(false);
  const [Color, setColor] = useState(false);

  const [HistorialC, setHistorialC] = useState(false);
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
          <Link to="/organigrama/areasandpositions-collaborator">
            Editar colaborador
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/areasandpositions-addjob">Editar puesto</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/organigrama/eraser">Editar estructura</Link>
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
          <Link to="/organigrama/areasandpositions-perfil">Ver expediente</Link>
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
              setHistorialC(true);
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
                messageModal:
                  "Al dar de baja a un colaborador de tu organización ya no se verá reflejada en tu organigrama.",
                messageWarning:
                  "Estás a punto de dar de baja al colaborador.[Nombre colaborador]",
                question: "¿Seguro deseas eliminarlo?",
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
                messageModal:
                  "Al eliminar un puesto de tu organización ya no se verá reflejada en tu organigrama.",
                messageWarning: "Estás a punto de eliminar el puesto",
                question: "¿Seguro deseas eliminarlo?",
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
        <div className="CardNodeChild">
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
              setFalg("primary roundBtnFull hide");
              setFalg2("primaryInvert roundBtnFull showInline");
            }}
            icon={<DownOutlined />}
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
                stroke="#2CCCD3"
                stroke-width="5"
              />
            </svg>
          </div>

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
                stroke="#2CCCD3"
                stroke-width="5"
              />
            </svg>
          </div>
        </div>
      </div>
      <ModalPermissions
        Permisions={Permisions}
        setPermissions={setPermissions}
      />
      <ModalColor Color={Color} setColor={setColor} />
      <ModalHistorialColaborator
        HistorialC={HistorialC}
        setHistorialC={setHistorialC}
      />
      <ModalHistorialJob
        HistorialP={HistorialP}
        setHistorialP={setHistorialP}
      />
      <ModalPassword Password={Password} setPassword={setPassword} />
    </>
  );
}
