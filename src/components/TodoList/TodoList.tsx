import React, { useState } from "react";
import { v4 } from "uuid";
import { todos } from "../../data/todos";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";

const TodoList = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.todolist}>
      <h1 className={styles.todolist__title}>ToDo list</h1>
      <div className={styles.todolist__add}>
        <input
          className={styles.todolist__addInput}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.todolist__addBtn}>
          <AddIcon /> Добавить задачу
        </button>
      </div>

      {todos.map((item) => (
        <TodoItem key={v4()} />
      ))}
    </div>
  );
};

export default TodoList;
