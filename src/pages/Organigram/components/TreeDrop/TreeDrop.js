import React, { useState } from "react";
import { Col, Dropdown, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import Avatar from "../../../../assets/img/avatar.png";
import More from "../../../../assets/img/icons/more_vert-24px.svg";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { CgMoreAlt } from "react-icons/cg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import Insings from "../../../../assets/img/icons/insights-24px.svg";
import Trending from "../../../../assets/img/icons/trending_up-24px.svg";
import { v4 as uuid } from "uuid";
import "./TreeDrop.scss";
import ModalPermissions from "../../../../components/Modals/ModalPermissions/ModalPermissions";
import ModalColor from "../../../../components/Modals/ModalColor/ModalColor";
import ModalHistorialColaborator from "../../../../components/Modals/ModalHistorialColaborator/ModalHistorialColaborator";
import ModalHistorialJob from "../../../../components/Modals/ModalHistorialJob/ModalHistorialJob";
import ModalPassword from "../../../../components/Modals/ModalPassword/ModalPassword";
import { useTranslation } from "react-i18next";

export default function TreeDrop() {
  const [t, i18n] = useTranslation("global");
  const [Permissions, setPermissions] = useState(false);
  const [Color, setColor] = useState(false);

  const [HistorialC, setHistorialC] = useState(false);
  const [HistorialP, setHistorialP] = useState(false);
  // implementar array
  const [Password, setPassword] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/areasandpositions-collaborator">Editar colaborador</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/areasandpositions-addjob">Editar puesto</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/eraser">Editar estructura</Link>
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
          <Link to="/areasandpositions-perfil">Ver expediente</Link>
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

  const [drop, setDrop] = useState("showBlock");
  const [visible, seVisible] = useState("hide");

  return (
    <>
      <Row style={{ height: "50px", paddingBottom: "50px", marginTop: "20px" }}>
        <Col style={{ textAlign: "right", marginRight: "-5px" }} span={1}>
          <Link
            to="#"
            className={drop}
            onClick={() => {
              setDrop("hide");
              seVisible("showBlock");
            }}
          >
            <IoMdArrowDropright
              style={{ fontSize: "28px", marginTop: "10px", color: "#000" }}
            />
          </Link>
          <Link
            to="#"
            className={visible}
            onClick={() => {
              setDrop("showBlock");
              seVisible("hide");
            }}
          >
            <IoMdArrowDropdown
              style={{ fontSize: "28px", marginTop: "10px", color: "#000" }}
            />
          </Link>
        </Col>
        <Col style={{ textAlign: "left" }} span={1}>
          <p>
            <img
              style={{ marginTop: "-5px" }}
              alt="ico"
              width="55"
              src={Avatar}
            />
          </p>
        </Col>
        <Col style={{ paddingLeft: "15px" }} span={5}>
          <span>Panchita Lopez</span>
          <br />
          <span>
            <b>Directora de marketing</b>
          </span>
        </Col>
        <Col span={17}>
          <Row style={{ height: "50px" }} className="dividerBottomFull">
            <Col span={11}></Col>
            <Col
              span={2}
              className="iconGray"
              style={{ fontSize: "20px", textAlign: "right" }}
            >
              <img
                style={{ marginTop: "-15px" }}
                alt="ico"
                width="22"
                src={Trending}
              />
            </Col>
            <Col span={1} className="iconGreenTwo">
              <span>42%</span>
            </Col>
            <Col span={2} style={{ textAlign: "right" }}>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="20"
                src={Insings}
              />
            </Col>
            <Col span={1} className="iconGreenTwo">
              <span>15%</span>
            </Col>
            <Col
              span={2}
              className="iconRed"
              style={{ fontSize: "18px", textAlign: "right" }}
            >
              <GiOfficeChair />
            </Col>
            <Col span={1} className="iconRed">
              <span>8</span>
            </Col>
            <Col
              span={1}
              className="iconGray"
              style={{ fontSize: "16px", textAlign: "right" }}
            >
              <FaUserAlt />
            </Col>
            <Col span={1}>
              <span>18</span>
            </Col>
            <Col style={{ textAlign: "center" }} span={2}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Link
                  to="#"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <CgMoreAlt style={{ fontSize: "28px", color: "#000" }} />
                </Link>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className={visible}>
        <Row
          style={{
            height: "50px",
            paddingBottom: "50px",
            marginTop: "40px",
            marginLeft: "40px",
          }}
        >
          <Col style={{ textAlign: "right", marginRight: "-5px" }} span={1}>
            <Link to="#" className="showBlock">
              <IoMdArrowDropright
                style={{ fontSize: "28px", marginTop: "10px", color: "#000" }}
              />
            </Link>
          </Col>
          <Col style={{ textAlign: "left" }} span={1}>
            <p>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="55"
                src={Avatar}
              />
            </p>
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={5}>
            <span>Panchita Lopez</span>
            <br />
            <span>
              <b>Directora de marketing</b>
            </span>
          </Col>
          <Col span={17}>
            <Row style={{ height: "50px" }} className="dividerBottomFull">
              <Col span={11}></Col>
              <Col
                span={2}
                className="iconGray"
                style={{
                  fontSize: "20px",
                  textAlign: "right",
                  marginLeft: "-10px",
                }}
              >
                <img
                  style={{ marginTop: "-15px" }}
                  alt="ico"
                  width="22"
                  src={Trending}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>42%</span>
              </Col>
              <Col span={2} style={{ textAlign: "right", marginLeft: "5px" }}>
                <img
                  style={{ marginTop: "-5px" }}
                  alt="ico"
                  width="20"
                  src={Insings}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>15%</span>
              </Col>
              <Col
                span={2}
                className="iconRed"
                style={{ fontSize: "18px", textAlign: "right" }}
              >
                <GiOfficeChair />
              </Col>
              <Col span={1} className="iconRed">
                <span>8</span>
              </Col>
              <Col
                span={1}
                className="iconGray"
                style={{
                  fontSize: "16px",
                  textAlign: "right",
                  marginLeft: "5px",
                }}
              >
                <FaUserAlt />
              </Col>
              <Col span={1}>
                <span>18</span>
              </Col>
              <Col style={{ textAlign: "center" }} span={2}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Link
                    to="#"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CgMoreAlt style={{ fontSize: "28px", color: "#000" }} />
                  </Link>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <svg
          className="lineTree"
          version="1.1"
          xmlns="http://www.w3.org/2250/svg"
          width="50"
          height="120"
          viewBox="0 0 140 90"
        >
          <path
            d="m 5,-70 v 225 h 80"
            fill="none"
            stroke="#ccc"
            stroke-width="3"
          />
        </svg>
      </div>

      <div className={visible}>
        <Row
          style={{
            height: "50px",
            paddingBottom: "50px",
            marginTop: "30px",
            marginLeft: "40px",
          }}
        >
          <Col style={{ textAlign: "right", marginRight: "-5px" }} span={1}>
            <Link to="#" className="showBlock">
              <IoMdArrowDropright
                style={{ fontSize: "28px", marginTop: "10px", color: "#000" }}
              />
            </Link>
          </Col>
          <Col style={{ textAlign: "left" }} span={1}>
            <p>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="55"
                src={Avatar}
              />
            </p>
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={5}>
            <span>Panchita Lopez</span>
            <br />
            <span>
              <b>Directora de marketing</b>
            </span>
          </Col>
          <Col span={17}>
            <Row style={{ height: "50px" }} className="dividerBottomFull">
              <Col span={11}></Col>
              <Col
                span={2}
                className="iconGray"
                style={{
                  fontSize: "20px",
                  textAlign: "right",
                  marginLeft: "-10px",
                }}
              >
                <img
                  style={{ marginTop: "-15px" }}
                  alt="ico"
                  width="22"
                  src={Trending}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>42%</span>
              </Col>
              <Col span={2} style={{ textAlign: "right", marginLeft: "5px" }}>
                <img
                  style={{ marginTop: "-5px" }}
                  alt="ico"
                  width="20"
                  src={Insings}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>15%</span>
              </Col>
              <Col
                span={2}
                className="iconRed"
                style={{ fontSize: "18px", textAlign: "right" }}
              >
                <GiOfficeChair />
              </Col>
              <Col span={1} className="iconRed">
                <span>8</span>
              </Col>
              <Col
                span={1}
                className="iconGray"
                style={{
                  fontSize: "16px",
                  textAlign: "right",
                  marginLeft: "5px",
                }}
              >
                <FaUserAlt />
              </Col>
              <Col span={1}>
                <span>18</span>
              </Col>
              <Col style={{ textAlign: "center" }} span={2}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Link
                    to="#"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CgMoreAlt style={{ fontSize: "28px", color: "#000" }} />
                  </Link>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <svg
          className="lineTree"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="120"
          viewBox="0 0 140 90"
        >
          <path
            d="m 5,-70 v 225 h 80"
            fill="none"
            stroke="#ccc"
            stroke-width="3"
          />
        </svg>
      </div>

      <div className={visible}>
        <Row
          style={{
            height: "50px",
            paddingBottom: "50px",
            marginTop: "30px",
            marginLeft: "40px",
          }}
        >
          <Col style={{ textAlign: "right", marginRight: "-5px" }} span={1}>
            <Link to="#" className="showBlock">
              <IoMdArrowDropright
                style={{ fontSize: "28px", marginTop: "10px", color: "#000" }}
              />
            </Link>
          </Col>
          <Col style={{ textAlign: "left" }} span={1}>
            <p>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="55"
                src={Avatar}
              />
            </p>
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={5}>
            <span>Panchita Lopez</span>
            <br />
            <span>
              <b>Directora de marketing</b>
            </span>
          </Col>
          <Col span={17}>
            <Row style={{ height: "50px" }} className="dividerBottomFull">
              <Col span={11}></Col>
              <Col
                span={2}
                className="iconGray"
                style={{
                  fontSize: "20px",
                  textAlign: "right",
                  marginLeft: "-10px",
                }}
              >
                <img
                  style={{ marginTop: "-15px" }}
                  alt="ico"
                  width="22"
                  src={Trending}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>42%</span>
              </Col>
              <Col span={2} style={{ textAlign: "right", marginLeft: "5px" }}>
                <img
                  style={{ marginTop: "-5px" }}
                  alt="ico"
                  width="20"
                  src={Insings}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>15%</span>
              </Col>
              <Col
                span={2}
                className="iconRed"
                style={{ fontSize: "18px", textAlign: "right" }}
              >
                <GiOfficeChair />
              </Col>
              <Col span={1} className="iconRed">
                <span>8</span>
              </Col>
              <Col
                span={1}
                className="iconGray"
                style={{
                  fontSize: "16px",
                  textAlign: "right",
                  marginLeft: "5px",
                }}
              >
                <FaUserAlt />
              </Col>
              <Col span={1}>
                <span>18</span>
              </Col>
              <Col style={{ textAlign: "center" }} span={2}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Link
                    to="#"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CgMoreAlt style={{ fontSize: "28px", color: "#000" }} />
                  </Link>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <svg
          className="lineTree"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="120"
          viewBox="0 0 140 90"
        >
          <path
            d="m 5,-70 v 225 h 80"
            fill="none"
            stroke="#ccc"
            stroke-width="3"
          />
        </svg>
      </div>

      <div className={visible}>
        <Row
          style={{
            height: "50px",
            paddingBottom: "50px",
            marginTop: "30px",
            marginLeft: "40px",
          }}
        >
          <Col style={{ textAlign: "right", marginRight: "-5px" }} span={1}>
            <Link to="#" className="showBlock">
              <IoMdArrowDropright
                style={{ fontSize: "28px", marginTop: "10px", color: "#000" }}
              />
            </Link>
          </Col>
          <Col style={{ textAlign: "left" }} span={1}>
            <p>
              <img
                style={{ marginTop: "-5px" }}
                alt="ico"
                width="55"
                src={Avatar}
              />
            </p>
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={5}>
            <span>Panchita Lopez</span>
            <br />
            <span>
              <b>Directora de marketing</b>
            </span>
          </Col>
          <Col span={17}>
            <Row style={{ height: "50px" }} className="dividerBottomFull">
              <Col span={11}></Col>
              <Col
                span={2}
                className="iconGray"
                style={{
                  fontSize: "20px",
                  textAlign: "right",
                  marginLeft: "-10px",
                }}
              >
                <img
                  style={{ marginTop: "-15px" }}
                  alt="ico"
                  width="22"
                  src={Trending}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>42%</span>
              </Col>
              <Col span={2} style={{ textAlign: "right", marginLeft: "5px" }}>
                <img
                  style={{ marginTop: "-5px" }}
                  alt="ico"
                  width="20"
                  src={Insings}
                />
              </Col>
              <Col span={1} className="iconGreenTwo">
                <span>15%</span>
              </Col>
              <Col
                span={2}
                className="iconRed"
                style={{ fontSize: "18px", textAlign: "right" }}
              >
                <GiOfficeChair />
              </Col>
              <Col span={1} className="iconRed">
                <span>8</span>
              </Col>
              <Col
                span={1}
                className="iconGray"
                style={{
                  fontSize: "16px",
                  textAlign: "right",
                  marginLeft: "5px",
                }}
              >
                <FaUserAlt />
              </Col>
              <Col span={1}>
                <span>18</span>
              </Col>
              <Col style={{ textAlign: "center" }} span={2}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Link
                    to="#"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <CgMoreAlt style={{ fontSize: "28px", color: "#000" }} />
                  </Link>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <svg
          className="lineTree"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="120"
          viewBox="0 0 140 90"
        >
          <path
            d="m 5,-70 v 225 h 80"
            fill="none"
            stroke="#ccc"
            stroke-width="3"
          />
        </svg>
      </div>
      <ModalPermissions
        Permissions={Permissions}
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
