import React, { useState } from "react";
import classes from "./Form.module.css";
import ListItems from "../ListItems/ListItems";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleClick = () => {
    setTasks((tasks) => [...tasks, inputText]);
    setInputText("");
  };
  return (
    <div>
      <div className={classes.Form}>
        <input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          placeholder="Add Task"
          value={inputText}
        ></input>
        <button onClick={handleClick}>+</button>
      </div>
      <div className={classes.TaskList}></div>
      <ul>
        {tasks.map((task, index) => {
          return <ListItems task={task} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Form;
