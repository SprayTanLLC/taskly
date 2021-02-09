import React from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  return (
    <div className={classes.ListItem}>
      <li>{props.task}</li>
      <div>
        <button className={classes.Button}>
          <i class="far fa-check-square"></i>
        </button>
        <button className={classes.Button}>
          <i class="fas fa-edit"></i>
        </button>
        <button className={classes.Button}>
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
