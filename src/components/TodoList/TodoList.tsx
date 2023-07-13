import React, { useState } from "react";
import { v4 } from "uuid";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";
import { ReactComponent as AddIcon } from "../../assets/icon/add.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducers/todoReducer";

const TodoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { todos } = useTypedSelector((state) => state.todo);
  console.log(todos);

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
        <button
          className={styles.todolist__addBtn}
          onClick={() => {
            if (value) {
              setValue("");
              // @ts-ignore
              dispatch(addTodo(value));
            }
          }}
        >
          <AddIcon /> Add task
        </button>
      </div>

      {todos.map((todo) => (
        <TodoItem key={v4()} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
