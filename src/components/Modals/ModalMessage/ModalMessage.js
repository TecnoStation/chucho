import React from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

function ModalMessage({ screen, children }) {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={screen}>
      <Card
        title=""
        className="cardDefault"
        headStyle={{ textAlign: "center" }}
      >
        {children}
      </Card>
    </div>
  );
}

export default ModalMessage;
