import React from "react";
import { Card } from "antd";

function ModalMessage({ screen, children }) {
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
