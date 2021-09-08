import React, { useState } from "react";
import { Form, Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import CheckboxList from "./components/CheckboxList/CheckboxList";

export default function ModalPermissions({ Permissions, setPermissions }) {
  const [t, i18n] = useTranslation("global");
  const [PermissionsList, setPermissionsList] = useState([
    {
      id: 0,
      name: "Permisos de Administrador",
      checked: false,
    },
    {
      id: 1,
      name: 'Permisos para ver Nine Box',
      checked: false,
    },
    {
      id: 2,
      name: 'Permisos de Edición de Objetivos',
      checked: true,
    },
    {
      id: 3,
      name: 'Permisos para ver Organigrama',
      checked: true,
    },
    {
      id: 4,
      name: 'Permisos para editar Organigrama',
      checked: false,
    },
    {
      id: 5,
      name: 'Permisos para crear Plan de Desarrollo',
      checked: false,
    }
  ])
  return (
    <>
      <Modal
        title={t("organigram.collaborator-form.permissions-modal.title")}
        className="PermissionsModal"
        visible={Permissions}
        onCancel={() => {
          setPermissions(false);
        }}
        footer={[
          <div style={{marginTop: "0px"}}>
            <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setPermissions(false);
            }}
          >
            {t("organigram.collaborator-form.permissions-modal.btn-cancel")}
          </Button>
          <Button
            className="primary"
            onClick={() => {
              setPermissions(false);
            }}
          >
            {t("organigram.collaborator-form.permissions-modal.btn-appli")}
          </Button>
          </div>
        ]}
      >
       
        <Form id="PermissionsList" style={{textAlign: "left", marginTop: "10px"}} >
          <CheckboxList PermissionsList={PermissionsList} />
        </Form>



         
      </Modal>
    </>
  );
}
