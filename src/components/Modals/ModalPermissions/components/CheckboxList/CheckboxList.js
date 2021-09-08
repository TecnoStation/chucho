import React from 'react'
import { Checkbox, Form } from "antd";

function CheckboxList({PermissionsList}) {
    return (

   <>
    {PermissionsList.map((permission, index) =>
     (
      <Form.Item style={{ marginTop: "-15px" }}>
        <Checkbox defaultChecked={permission.checked}>
        {permission.name}
      </Checkbox>
      </Form.Item>
    ) )}
  </>

       
    )
}

export default CheckboxList
