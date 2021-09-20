import React, { useState } from "react";
import { Button, Col, Modal, Row, Upload } from "antd";
import { useTranslation } from "react-i18next";
import { BiImageAdd } from "react-icons/bi";
import ImgCrop from "antd-img-crop";

const { Dragger } = Upload;

function ModalPhoto({ photo, setPhoto, setSrc }) {
  const [t, i18n] = useTranslation("global");

  const onChange = (e) => {
    onPreview(e.file);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    setSrc(image.src);
  };

  return (
    <Modal
      title={"Sube tu foto de perfil"}
      className="photoModal"
      centered={true}
      visible={photo}
      onCancel={() => {
        setPhoto(false);
      }}
      footer={false}
    >
      <Row>
        <Col span={24}>
          <p style={{ textAlign: "left" }}>Subir una imagen</p>
        </Col>
      </Row>
      <Row className="borderPicture">
        <Col span={24}>
          <ImgCrop
            modalTitle="Sube tu foto de perfil"
            shape="round"
            modalWidth="584px"
            modalOk="Aceptar"
            modalCancel="Cancelar"
            onModalOk={(e) => {
              setPhoto(false);
            }}
          >
            <Upload listType="text" onPreview={onPreview} onChange={onChange}>
              <br />
              <p className="ant-upload-drag-icon">
                <br />
                <br />
                <BiImageAdd className="iconsize5 iconGreen" />
                <br />
                Da clic para buscar o arrastra tu imagen
              </p>
            </Upload>
          </ImgCrop>
        </Col>
      </Row>
      <div style={{ marginTop: "60px", textAlign: "right" }}>
        <Button
          style={{ marginRight: "15px" }}
          className="secondary"
          onClick={() => {
            setPhoto(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          className="primary"
          onClick={() => {
            setPhoto(false);
          }}
        >
          Aceptar
        </Button>
      </div>
    </Modal>
  );
}

export default ModalPhoto;
