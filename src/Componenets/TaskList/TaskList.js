import React, { useState } from "react";
import classes from "./TaskList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";

const TaskList = () => {
  const [inputText, setInputText] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const addTask = () => {
    setTaskArray((taskArray) => [...taskArray, inputText]);
    setInputText("");
  };
  return (
    <div className={classes.TaskList}>
      <div className={classes.Form}>
        <input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
          type="text"
          placeholder="Add Task"
        ></input>
        <button onClick={addTask}>+</button>
      </div>
      <div className={classes.ToDoItems}>
        <ul>
          {taskArray.map((task, index) => {
            return <ToDoItem task={task} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
