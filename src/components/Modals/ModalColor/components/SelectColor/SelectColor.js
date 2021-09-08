import React from 'react'
import { Select, Row, Col } from "antd";

const { Option } = Select;

function SelectColor({colors, placeholder, value}) {
    return (
        <Select value={value} placeholder={placeholder}>
            {colors.map((color, index) =>(
                <Option value={color.value}>
                <Row>
                  <Col span={6}>
                    <div className="color" style={{background: color.color }}></div>
                  </Col>
                  <Col style={{ textAlign: "center" }} span={18}>
                    {color.name}
                  </Col>
                </Row>
              </Option>
            ))}
            
            
          </Select>
    )
}

export default SelectColor
