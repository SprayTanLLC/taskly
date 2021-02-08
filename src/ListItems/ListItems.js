import React from "react";
import classes from "./ListItems.module.css";

const ListItems = (props) => {
  return (
    <div className={classes.ListItems}>
      <li>{props.task}</li>
      <button>-</button>
    </div>
  );
};

export default ListItems;
