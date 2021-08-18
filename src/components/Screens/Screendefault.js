import React from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

import "./Screen.scss";

export default function Screendefault({ children }) {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="screen" id="screen">
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
