import React, { useState } from "react";
import { Col, Dropdown, Menu, Row, Input } from "antd";
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

export default function TreeDrop({ name }) {
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
          <Link to="/areasandpositions-collaborator">{t("organigram.menu-treedrop.edit-colaborator")}</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/areasandpositions-addjob">{t("organigram.menu-treedrop.edit-position")}</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/eraser">{t("organigram.menu-treedrop.edit-extructure")}</Link>
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
            {t("organigram.menu-treedrop.add-permissions")}
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
            {t("organigram.menu-treedrop.define-colour")}
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()}>
          <Link to="/areasandpositions-perfil">{t("organigram.menu-treedrop.watch-proceedings")}</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">{t("organigram.menu-treedrop.watch-vacancies")}</Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key={uuid()}>
        <Menu.Item key={uuid()} disabled>
          <Link to="#">{t("organigram.menu-treedrop.watch-objectives")}</Link>
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
           {t("organigram.menu-treedrop.record-position")}
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
            {t("organigram.menu-treedrop.record-collaborators")}
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
                function: () => {return false;}
              });
            }}
          >
             {t("organigram.menu-treedrop.give-drop-collaborators")}
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
                question:  t("organigram.menu-treedrop.modal-position.safe-want-remove"),
                function: () => {return false;}
              });
            }}
          >
           {t("organigram.menu-treedrop.remove-position")}
          </Link>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );

  const [drop, setDrop] = useState("showBlock");
  const [visible, seVisible] = useState("hide");

  return (
    <>
      <Row
        className="rowOrganigram"
        style={{ height: "50px", paddingBottom: "50px", marginTop: "20px" }}
      >
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
          <span className="OrganigramNames">{name}</span>
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
