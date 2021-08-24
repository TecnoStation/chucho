import React from "react";
import { Form, Checkbox } from "antd";

function DocumentsList({ Documents }) {
  return Documents.map((document, index) => (
    <Form.Item name={document.DocumentName} style={{ marginTop: "-25px" }}>
      <Checkbox>{document.DocumentName}</Checkbox>
    </Form.Item>
  ));
}

export default DocumentsList;
