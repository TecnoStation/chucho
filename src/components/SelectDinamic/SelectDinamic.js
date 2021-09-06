import React from "react";
import { Select } from "antd";

const { Option } = Select;

function SelectDinamic({ placeholder, onChange, value, data }) {
  return (
    <Select value={value} placeholder={placeholder} onChange={onChange}>
      {data.map((fact, index) => (
        <Option key={index} value={fact.value}>
          {fact.name}
        </Option>
      ))}
    </Select>
  );
}

export default SelectDinamic;
