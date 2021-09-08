import React from "react";
import { Select } from "antd";

const { Option } = Select;

function SelectLevel({ levels }) {
  return (
    <Select defaultValue={4} style={{ width: 120 }} bordered={false}>
      {levels.map((level, index) => (
        <Option value={level.id}>{level.name}</Option>
      ))}
    </Select>
  );
}

export default SelectLevel;
