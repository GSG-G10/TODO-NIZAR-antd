import React, { Fragment } from "react";

const ShowTasks = () => {
  const value = JSON.parse(localStorage.getItem("values"));

  return (
    <Fragment>
      {value &&
        value.map((ele) => (
          <div key={ele.title}>
            <p>{ele.title}</p>
            <p>{ele.prioirty}</p>
          </div>
        ))}
    </Fragment>
  );
};

export default ShowTasks;
