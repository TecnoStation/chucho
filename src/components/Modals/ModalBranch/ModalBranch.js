import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

export default function ModalBranch({
  modal,
  setModal,
  form,
  branchs,
  setBranchs,
  editionmode,
  setEditionmode,
  index,
}) {
  const [t, i18n] = useTranslation("global");
  const sendBranch = (values) => {
   
    setBranchs([
      ...branchs,
      {
        idBranch: uuid(),
        name: values["name"],
        direction: values["direction"],
      },
    ]);

    form.resetFields();
    setModal(false);
  };

  const editBranch = (values) => {
    branchs[index].name = values["name"];
    branchs[index].direction = values["direction"];
    setModal(false);
    setEditionmode(false);
    form.setFieldsValue({
      name: "",
      direction: "",
    });
  };

  return (
    <Modal
      title={editionmode ? "Editar Sucursal" :t("organigram.add-branch-modal.title")}
      className="branchModal"
      visible={modal}
      onCancel={() => {
        setModal(false);
        form.setFieldsValue({
          name: "",
          direction: "",
        });
      }}
      footer={false}
    >
      <Form
        onFinish={editionmode ? editBranch : sendBranch}
        name="formBranch"
        layout="vertical"
        initialValues={{
          idBranch: "",
          name: "",
          direction: "",
        }}
        form={form}
        style={{ textAlign: "left", marginTop: "-10px" }}
      >
        <Form.Item
          name="name"
          label={t("organigram.add-branch-modal.branch-name")}
          rules={[
            {
              required: true,
              message: t("field-requiered"),
            },
          ]}
        >
          <Input
            type="text"
            placeholder={t("organigram.add-branch-modal.branch-name-placeholder")}
          />
        </Form.Item>

        <Form.Item
          name="direction"
          label={t("organigram.add-branch-modal.branch-direction")}
          rules={[
            {
              required: true,
              message: t("field-requiered"),
            },
          ]}
        >
          <Input
            addonAfter={<EnvironmentOutlined />}
            placeholder={t("organigram.add-branch-modal.branch-direction-placeholder")}
          />
        </Form.Item>

        <div style={{ textAlign: "right" }}>
          <Button
            onClick={() => {
              setModal(false);
            }}
            className="secondary"
            style={{ marginRight: "16px" }}
          >
            {t("organigram.add-branch-modal.btn-cancel")}
          </Button>

          {editionmode ? (
            <Button className="primary" htmlType="submit">
              {t("organigram.add-branch-modal.btn-edit")}
            </Button>
          ) : (
            <Button className="primary" htmlType="submit">
              {t("organigram.add-branch-modal.btn-save")}
            </Button>
          )}
        </div>
      </Form>
    </Modal>
  );
}
