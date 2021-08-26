import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Logo from "../../assets/img/Evou-color.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Login.scss";

export default function RecoveryPassword() {
  const [t, i18n] = useTranslation("global");
  const Send = () => {
    document.getElementById("sendTo").setAttribute("style", "display: none");
    document.getElementById("message").setAttribute("style", "display: flex");
  };

  return (
    <div>
      <div className="formLogin" id="sendTo">
        <div className="img">
          <img alt="logo" src={Logo} width="175" height="85" />
        </div>
        <h2>{t("login.title-recovery")}</h2>
        <Form name="formRecovery" layout="vertical">
          <Form.Item name="username" label={t("login.label-email-recovery")}>
            <Input
              type="text"
              placeholder={t("login.placeholder-user-recovery")}
            />
          </Form.Item>
          <Form.Item>
            <Button className="primary" onClick={Send}>
              {t("login.btn-recovery")}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="formLogin" id="message" style={{ display: "none" }}>
        <Row>
          <Col span={24}>
            <img alt="logo" src={Logo} width="175" height="85" />
            <br />
          </Col>
          <Col span={24}>
            <h2>{t("login.recovery-success")}</h2>
            <br />
          </Col>
          <Col span={24}>
            <p style={{ textAlign: "center" }}>
            {t("login.p-recovery-message")}
            </p>
            <br />
          </Col>
          <Col span={24}>
            <Link to="/login">
              <Button className="primary" style={{ width: "100px" }}>  
              {t("login.btn-success")}
              </Button>
            </Link>
            <br />
          </Col>
        </Row>
      </div>
    </div>
  );
}
