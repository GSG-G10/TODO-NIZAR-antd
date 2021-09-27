import React from "react";
import { Modal, Form, Radio, Input } from "antd";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Create New Task"
      okText="Add a Task"
      cancelText="Canel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("validate failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form-in-modal"
        initialValues={{
          prioirty: "TOMORROW",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "please write your task name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="prioirty">
          <Radio.Group>
            <Radio value="TODAY">TODAY</Radio>
            <Radio value="TOMORROW">TOMORROW</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;
