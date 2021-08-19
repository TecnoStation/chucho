import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Logo from "../../assets/img/Evou-color.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Login.scss";

export default function Login() {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="formLogin">
        <div className="img">
          <img alt="logo" src={Logo} width="175" height="85" />
        </div>
        <h2>{t("login.h1-welcome")}</h2>
        <Form name="form" layout="vertical">
          <Form.Item name="username" label={t("login.label-user")}>
            <Input type="text" placeholder={t("login.placeholder-user")} />
          </Form.Item>
          <Form.Item name="password" label={t("login.label-password")}>
            <Input.Password placeholder={t("login.placeholder-password")} />
          </Form.Item>
          <Form.Item style={{ textAlign: "left", marginTop: "-20px" }}>
            <Checkbox>{t("login.check-box")}</Checkbox>
          </Form.Item>
          <Form.Item style={{ textAlign: "left", marginTop: "-30px" }}>
            <Link to="/recoverypassword" className="linkText">
              {t("login.link-recovery")} 
            </Link>
          </Form.Item>
          <Form.Item>
            <Link to="/organigrama/organigramstarted">
              <Button style={{ width: "100%" }} className="primary">
                {t("login.btn-start-sesion")}
              </Button>
            </Link>
          </Form.Item>
        </Form>
        <p className="legacyP grayText">
          {t("login.p1-privacy")}
        </p>
        <p>
          <Checkbox className="terminos grayText">
            {t("login.check-privacy")}
          </Checkbox>
        </p>
        <p className="legacyP linkText">
          {t("login.p2-privacy")} <br />
          {t("login.p3-privacy")}
        </p>
      </div>
    </div>
  );
}
