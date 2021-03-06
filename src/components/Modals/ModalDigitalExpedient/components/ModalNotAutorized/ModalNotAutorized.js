import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import ModalLoadFile from "../ModalLoadFile/ModalLoadFile";

function ModalNotAutorized({ NotAutorized, setNotAutorized }) {
  const [t, i18n] = useTranslation("global");
  const [modalLoadFile, setModalLoadFile] = useState(false);
  return (
    <>
      <Modal
        title={t("organigram.areasandpositions-perfil.tab1.modal-authorized.title")}
        className="middleModal"
        visible={NotAutorized}
        onCancel={() => {
          setNotAutorized(false); 
        }}
        footer={[
          <Button
            className="primary"
            onClick={() => {
              setNotAutorized(false);
              setModalLoadFile(true);
            }}
          >
            {t("organigram.areasandpositions-perfil.tab1.modal-authorized.btn-replace")}
          </Button>,
        ]}
      >
        <p className="secondaryText">
          Falta de legibilidad en el archivo, la imagen debe de ser más clara
        </p>
      </Modal>
      <ModalLoadFile
        modalLoadFile={modalLoadFile}
        setModalLoadFile={setModalLoadFile}
      />
    </>
  );
}

export default ModalNotAutorized;
