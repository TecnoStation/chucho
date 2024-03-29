import { Card, Col, Row, Input, Button, Modal, Form, Checkbox } from "antd";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.png";
import MaterialIcon from "material-icons-react";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

export default function Messages() {
  const [t, i18n] = useTranslation("global");
  const [dropdown, setDropdown] = useState("showInline principalColorText");
  const [dropright, setDropright] = useState("hide");
  const [cardvisible, setCardvisible] = useState(
    "showBlock principalColorText"
  );

  const [dropdown1, setDropdown1] = useState("showInline principalColorText");
  const [dropright1, setDropright1] = useState("hide");
  const [cardvisible1, setCardvisible1] = useState(
    "showBlock principalColorText"
  );

  const [dropdown2, setDropdown2] = useState("showInline principalColorText");
  const [dropright2, setDropright2] = useState("hide");
  const [cardvisible2, setCardvisible2] = useState(
    "showBlock principalColorText"
  );

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Row>
        <Col span={17} style={{ textAlign: "left", paddingLeft: "25px" }}>
          <Link
            to="#"
            className={dropdown}
            onClick={() => {
              setDropdown("hide");
              setCardvisible("hide");
              setDropright("showInline principalColorText");
            }}
          >
            <IoMdArrowDropdown
              style={{
                fontSize: "20px",
                position: "absolute",
                left: "2px",
                top: "3px",
                color: "#000",
              }}
            />
            <b>{t("organigram.modal-messages.validate-structure")}</b>
          </Link>

          <Link
            className={dropright}
            onClick={() => {
              setDropdown("showInline principalColorText");
              setCardvisible("showBlock principalColorText"); 
              setDropright("hide");
            }}
            to="#"
          >
            <IoMdArrowDropright
              style={{
                fontSize: "20px",
                position: "absolute",
                left: "2px",
                top: "3px",
                color: "#000",
              }}
            />
            <b>{t("organigram.modal-messages.validate-structure")}</b>
          </Link>
        </Col>

        <Col className="iconBlue" span={7}>
          <span>{t("organigram.modal-messages.validate-selected-a")} | </span>
          <span>{t("organigram.modal-messages.not-validate-selected-a")}</span>
        </Col>
      </Row>

      <Card className={cardvisible}>
        <Row>
          <Col span={11}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.draft")}</b>
            </p>
          </Col>
          <Col span={6}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.created-for")}</b>
            </p>
          </Col>
          <Col span={4}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.creation")}</b>
            </p>
          </Col>
          <Col style={{ textAlign: "center" }} span={3}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.actions-1")}</b>
            </p>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <p>Estructura de la Sucursal Pachuca</p>
          </Col>
          <Col span={5} style={{ paddingLeft: "20px" }}>
            <p>
              <img alt="ico" width="30" src={Avatar} />
            </p>
          </Col>
          <Col style={{ paddingLeft: "25px" }} span={5}>
            <p className="secondaryText">MAR 31, 2021</p>
          </Col>

          <Col style={{ paddingLeft: "10px" }} className="iconBlue" span={3}>
            <span>{t("organigram.modal-messages.validate-a")} | </span>
            <Link
              className="iconBlue"
              onClick={() => {
                setVisible(true);
              }}
              to="#"
            >
              <span>{t("organigram.modal-messages.not-validate")}</span>
            </Link>
          </Col>
        </Row>
      </Card>

      <Row style={{ marginTop: "20px" }}>
        <Col span={7} style={{ textAlign: "left", paddingLeft: "25px" }}>
          <Link
            to="#"
            className={dropdown1}
            onClick={() => {
              setDropdown1("hide");
              setCardvisible1("hide");
              setDropright1("showInline principalColorText");
            }}
          >
            <IoMdArrowDropdown
              style={{
                fontSize: "20px",
                position: "absolute",
                left: "2px",
                top: "3px",
                color: "#000",
              }}
            />
            <b>{t("organigram.modal-messages.validate-abilities")}</b>
          </Link>

          <Link
            className={dropright1}
            onClick={() => {
              setDropdown1("showInline principalColorText");
              setCardvisible1("showBlock principalColorText");
              setDropright1("hide");
            }}
            to="#"
          >
            <IoMdArrowDropright
              style={{
                fontSize: "20px",
                position: "absolute",
                left: "2px",
                top: "3px",
                color: "#000",
              }}
            />
            <b>{t("organigram.modal-messages.validate-abilities")}</b>
          </Link>
        </Col>
        <Col style={{ textAlign: "right" }} span={1} className="aaa">
          <MaterialIcon icon="filter_alt" />
        </Col>
        <Col span={3} className="dividerLeftbold ">
          <MaterialIcon color="#00205b" icon="inbox" />
        </Col>
        <Col span={6}></Col>
        <Col className="iconBlue" span={7}>
          <span>{t("organigram.modal-messages.validate-selected-b")} | </span>
          <span>{t("organigram.modal-messages.not-validate-selected-b")}</span>
        </Col>
      </Row>

      <Card className={cardvisible1}>
        <Row>
          <Col span={1}>
            <Checkbox></Checkbox>
          </Col>
          <Col span={10}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.name-position")}</b>
            </p>
          </Col>
          <Col span={10}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.last-update")}</b>
            </p>
          </Col>
          <Col style={{ textAlign: "center" }} span={3}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.actions-2")}</b>
            </p>
          </Col>
        </Row>

        <Row>
          <Col style={{ marginTop: "20px" }} span={1}>
            <Checkbox></Checkbox>
          </Col>
          <Col style={{ textAlign: "left" }} span={1}>
            <p>
              <img
                style={{ marginTop: "-5px", marginTop: "5px" }}
                alt="ico"
                width="45"
                src={Avatar}
              />
            </p>
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={9}>
            <span>María Eugenia Rojas</span>
            <br />
            <span>
              <b>CMM Web</b>
            </span>
          </Col>
          <Col style={{ paddingLeft: "25px" }} span={10}>
            <p className="secondaryText">ENE 01,2021</p>
          </Col>

          <Col style={{ paddingLeft: "10px" }} className="iconBlue" span={3}>
            <span>{t("organigram.modal-messages.validate-b")} | </span>
            <Link
              className="iconBlue"
              onClick={() => {
                setVisible(true);
              }}
              to="#"
            >
              <span>{t("organigram.modal-messages.not-validate-b")}</span>
            </Link>
          </Col>
        </Row>
      </Card>

      <Row style={{ marginTop: "20px" }}>
        <Col span={10} style={{ textAlign: "left", paddingLeft: "25px" }}>
          <Link
            to="#"
            className={dropdown2}
            onClick={() => {
              setDropdown2("hide");
              setCardvisible2("hide");
              setDropright2("showInline principalColorText");
            }}
          >
            <IoMdArrowDropdown
              style={{
                fontSize: "20px",
                position: "absolute",
                left: "2px",
                top: "3px",
                color: "#000",
              }}
            />
            <b>{t("organigram.modal-messages.validate-document")}</b>
          </Link>

          <Link
            className={dropright2}
            onClick={() => {
              setDropdown2("showInline principalColorText");
              setCardvisible2("showBlock principalColorText");
              setDropright2("hide");
            }}
            to="#"
          >
            <IoMdArrowDropright
              style={{
                fontSize: "20px",
                position: "absolute",
                left: "2px",
                top: "3px",
                color: "#000",
              }}
            />
            <b>{t("organigram.modal-messages.validate-document")}</b>
          </Link>
        </Col>
        <Col style={{ textAlign: "right" }} span={1}>
          <MaterialIcon icon="filter_alt" />
        </Col>
        <Col span={1} className="dividerLeftbold " >
          <MaterialIcon icon="inbox" />
        </Col>
        <Col span={5}></Col>
        <span class="material-icons"></span>
        <Col className="iconBlue" span={7}>
          <span>{t("organigram.modal-messages.validate-selected-c")} | </span>
          <span>{t("organigram.modal-messages.not-validate-selected-c")}</span>
        </Col>
      </Row>

      <Card className={cardvisible2}>
        <Row>
          <Col span={1}>
            <Checkbox></Checkbox>
          </Col>
          <Col span={10}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.name-position1")}</b>
            </p>
          </Col>
          <Col span={10}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.last-update1")}</b>
            </p>
          </Col>
          <Col style={{ textAlign: "center" }} span={3}>
            <p>
              <b className="secondaryText">{t("organigram.modal-messages.actions-3")}</b>
            </p>
          </Col>
        </Row>

        <Row>
          <Col style={{ marginTop: "20px" }} span={1}>
            <Checkbox></Checkbox>
          </Col>
          <Col style={{ textAlign: "left" }} span={1}>
            <p>
              <img
                style={{ marginTop: "-5px", marginTop: "5px" }}
                alt="ico"
                width="45"
                src={Avatar}
              />
            </p>
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={9}>
            <span>María Eugenia Rojas</span>
            <br />
            <span>
              <b>CMM Web</b>
            </span>
          </Col>
          <Col style={{ paddingLeft: "25px" }} span={10}>
            <p className="secondaryText">ENE 01,2021</p>
          </Col>

          <Col style={{ paddingLeft: "10px" }} className="iconBlue" span={3}>
            <span>{t("organigram.modal-messages.validate-c")} | </span>
            <Link
              className="iconBlue"
              onClick={() => {
                setVisible(true);
              }}
              to="#"
            >
              <span>{t("organigram.modal-messages.not-validate-c")}</span>
            </Link>
          </Col>
        </Row>
      </Card>

      <Modal
        className="modalPref"
        title={t("organigram.modal-document.title")}
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          setVisible(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setVisible(false);
            }}
          >
            {t("organigram.modal-document.btn-cancel")}
          </Button>,
          <input
            type="button"
            onClick={() => {
              setVisible(false);
            }}
            className="primaryC"
            value={t("organigram.modal-document.btn-send")}
          />,
        ]}
      >
        <Form layout="vertical">
          <Form.Item
            name="Visible"
            label={t("organigram.modal-document.text")}
          >
            <TextArea rows={2} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
