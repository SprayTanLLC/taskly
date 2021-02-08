import React from "react";
import classes from "./Container.module.css";
import Form from "../Form/Form";

const Container = () => {
  return (
    <div className={classes.Container}>
      <Form />
    </div>
  );
};

export default Container;
