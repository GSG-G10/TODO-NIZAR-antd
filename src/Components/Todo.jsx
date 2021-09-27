import React, { useState } from "react";
import { Button } from "antd";
import "./Todo.css";
import CollectionCreateForm from "./CollectionCreateForm";


const Todo = () => {
  const [visible, setVisible] = useState(false);

  const addToList = (values) => {
    if (JSON.parse(localStorage.getItem("values")) == null) {
      let newData = JSON.stringify([values]);
      localStorage.setItem("values", newData);
    } else {
      let oldData = JSON.parse(localStorage.getItem("values"));
      const newValues = JSON.stringify([...oldData, values]);
      return localStorage.setItem("values", newValues);
    }
  };

  const onCreate = (values) => {
    //   localStorage.setItem('values',JSON.stringify(values))
    addToList(values)
      console.log(values)
    setVisible(false);
  };

  return (
    <div className="container">
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
          ADD NEW TASK
      </Button>
      <CollectionCreateForm
      visible={visible}
      onCreate = {onCreate}
      onCancel = {() => {
          setVisible(false)
      }}
      />
    </div>
  );
};

export default Todo;
