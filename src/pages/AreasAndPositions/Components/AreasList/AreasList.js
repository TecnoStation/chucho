import React, { useState } from "react";
import { Col, Input, Row, Form } from "antd";

import { IoMdSquare, IoMdTrash } from "react-icons/io";
import { PlusCircleOutlined } from "@ant-design/icons";
import { RiPencilFill } from "react-icons/ri";
import { BiGridVertical } from "react-icons/bi";
import SubAreasList from "../SubAreasList/SubAreasList";
import { useForm } from "antd/lib/form/Form";
import { v4 as uuid } from "uuid";

function AreasList({
  Areas,
  setModalMove,
  setinputArea,
  formp,
  setEditionMode,
  setArea,
  subAreas,
  setSubAreas,
  setPassword,
  setAreaPosition,
  setviewPositions,
  item,
  setItem,
}) {
  const [inputSubArea, setinputSubArea] = useState("show");
  const [form] = useForm();
  const [editionModeSub, setEditionModeSub] = useState(false);

  const [subArea, setSubArea] = useState();

  const sendSubArea = (e, idArea, index) => {
    e.preventDefault();
    setSubAreas([
      ...subAreas,
      {
        idSubArea: subAreas.length,
        item: idArea,
        subareaName: e.target.value,
      },
    ]);
    let input = document.getElementById("inputArea" + index);
    input.setAttribute("style", "display: none");
    form.resetFields();
    console.log(subAreas);
  };

  const editSubArea = (e, idArea, index) => {
    e.preventDefault();
    subAreas[subArea.idSubArea].subareaName = e.target.value;
    hideInput(index);
    setEditionModeSub(false);
  };

  const edit = (area, index) => {
    setArea(area);
    formp.setFieldsValue({
      area: area.areaName,
    });
    setItem(index);
    setEditionMode(true);
    setinputArea("show");
  };

  const showInput = (index) => {
    let input = document.getElementById("inputArea" + index);
    input.setAttribute(
      "style",
      "width: 94%; margin-top: 2px; position: absolute; z-index: 9999; display: "
    );
  };

  const hideInput = (index) => {
    let input = document.getElementById("inputArea" + index);
    input.setAttribute("style", "display: none");
  };

  const [colorIcon, setColorIcon] = useState("iconGray");

  return (
    <>
      {Areas.map((area, index) => (
        <div>
          <Row
            key={index}
            onMouseOver={() => {
              //setColorIcon("iconGreen");
              document
                .getElementById("IoMdSquare" + index)
                .setAttribute("style", "color: #2cccd3");
            }}
            onMouseOut={() => {
              //setColorIcon("iconGray");
              document
                .getElementById("IoMdSquare" + index)
                .setAttribute("style", "color: #5e6d88");
            }}
            className="areasdiv"
            style={{ marginTop: "20px", paddingLeft: "10px" }}
          >
            <Col
              span={18}
              onClick={() => {
                setAreaPosition(area.areaName);
                setviewPositions("showBlock");
              }}
              style={{ textAlign: "left" }}
            >
              <IoMdSquare id={"IoMdSquare" + index} className={colorIcon} />
              {area.areaName}
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "10px",
              }}
              span={2}
            >
              <PlusCircleOutlined
                onClick={() => {
                  showInput(index);
                }}
                className="iconGreen iconsize"
              />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "25px",
                fontSize: "14px",
              }}
              span={1}
            >
              <RiPencilFill
                onClick={() => {
                  edit(area, index);
                }}
                className="iconGreen iconsize"
              />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "25px",
              }}
              span={1}
            >
              <BiGridVertical className="iconGreen iconsize" />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "5px",
              }}
              span={1}
            >
              <IoMdTrash
                onClick={() => {
                  setModalMove({
                    visible: true,
                    mode: 0,
                    type: 0,
                    idArea: area.idArea,
                    Areas: Areas,
                    subAreas: subAreas,
                    modalTitle:
                      "¿Qué deseas hacer con los colaboradores que pertenecen a esta área?",
                  });
                }}
                className="iconGreen iconsize"
              />
            </Col>
          </Row>
          <Row
            id={"inputArea" + index}
            className={inputSubArea}
            style={{
              display: "none",
            }}
          >
            <Col span={24}>
              <Form
                initialValues={{
                  area: "",
                }}
                form={form}
              >
                <Form.Item name={"area" + index}>
                  <Input
                    onPressEnter={
                      editionModeSub
                        ? (e) => editSubArea(e, area.idArea, index)
                        : (e) => sendSubArea(e, area.idArea, index)
                    }
                    value={subArea}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div>
            {subAreas.map((subArea, item) =>
              subArea.item === area.idArea ? (
                <SubAreasList
                  item={area.idArea}
                  setModalMove={setModalMove}
                  subArea={subArea}
                  setSubArea={setSubArea}
                  subAreas={subAreas}
                  setPassword={setPassword}
                  setSubAreas={setSubAreas}
                  form={form}
                  setEditionModeSub={setEditionModeSub}
                  setinputSubArea={setinputSubArea}
                  showInput={showInput}
                  index={index}
                  setAreaPosition={setAreaPosition}
                  setviewPositions={setviewPositions}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default AreasList;
