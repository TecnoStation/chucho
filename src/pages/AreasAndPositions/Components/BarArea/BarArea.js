import React from "react";
import { Col, Input, Row, Form } from "antd";
import { IoMdSquare, IoMdTrash } from "react-icons/io";
import { PlusCircleOutlined } from "@ant-design/icons";
import { RiPencilFill } from "react-icons/ri";
import { BiGridVertical } from "react-icons/bi";

function BarArea({ level }) {
  return (
    <>
      {level === 1 ? (
        <div>
          <Row
            className="areasdiv"
            style={{
              marginTop: "20px",
              paddingLeft: "10px",
              textAlign: "right",
            }}
          >
            <Col span={18} style={{ textAlign: "left" }}>
              <IoMdSquare className="iconGray" /> CEO
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "10px",
              }}
              span={2}
            >
              <PlusCircleOutlined
                //   onClick={() => {
                //     showInput(index);
                //   }}
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
                //   onClick={() => {
                //     edit(area);
                //   }}
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
                //   onClick={() => {
                //     setModalMove({
                //       visible: true,
                //       mode: 0,
                //       idArea: area.idArea,
                //       Areas: Areas,
                //     });
                //   }}
                className="iconGreen iconsize"
              />
            </Col>
          </Row>
          <Row
            //   id={"inputArea" + index}
            //   className={inputSubArea}
            style={{
              display: "none",
            }}
          >
            <Col span={24}>
              <Form
                initialValues={{
                  area: "",
                }}
                //   form={form}
              >
                <Form.Item name={"area"}>
                  <Input
                  //   onPressEnter={
                  //     editionModeSub
                  //       ? (e) => editSubArea(e, index)
                  //       : (e) => sendSubArea(e, index)
                  //   }
                  //   value={subArea}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      ) : (
        <Row
          style={{
            marginTop: "20px",
            paddingLeft: "20px",
            textAlign: "right",
          }}
        >
          <Col span={24}>
            <Row className="subareasdiv">
              <Col span={18} style={{ textAlign: "left" }}>
                <IoMdSquare className="iconGreen" /> CEO
              </Col>
              <Col
                style={{
                  textAlign: "right",
                  paddingRight: "10px",
                }}
                span={2}
              >
                <PlusCircleOutlined className="iconGreen iconsize" />
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
                  // onClick={(e) => {
                  //   editS(e, subArea);
                  // }}
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
                  // onClick={() => {
                  //   setModalMoveSub({
                  //     visible: true,
                  //     idSubArea: subArea.idSubArea,
                  //     mode: 1,
                  //     subAreas: subAreas,
                  //   });
                  // }}
                  className="iconGreen iconsize"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
}

export default BarArea;
