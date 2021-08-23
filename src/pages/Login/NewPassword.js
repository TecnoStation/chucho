import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import Logo from "../../assets/img/Evou-color.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Login.scss";

export default function NewPassword() {
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
        <h2>{t("login.h1-welcome-recovery")}</h2>
        <h2>{t("login.h1-user")}</h2>
        <p>{t("login.text")}</p>
        <Form name="formpassword" layout="vertical">
          <Form.Item name="username" label={t("login.insert-password")}>
            <Input
              type="text"
              placeholder={t("login.insert-password-placeholders")}
            />
          </Form.Item>
          <Form.Item name="username" label={t("login.repeat-password")}>
            <Input
              type="text"
              placeholder={t("login.repeat-password-placeholder")}
            />
          </Form.Item>
          <Form.Item>
            <Button className="primary" onClick={Send}>
              {t("login.btn-next")}
            </Button>
          </Form.Item>
        </Form>
        <p className="legacyP grayText">{t("login.p1-privacy")}</p>
        <p className="legacyP linkText">
          {t("login.p2-privacy")} <br />
          {t("login.p3-privacy")}
        </p>
      </div>
    </div>
  );
}
