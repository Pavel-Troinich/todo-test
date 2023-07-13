import React, { useState } from "react";
import styles from "./TodoItem.module.scss";
import { ReactComponent as DoneIcon } from "../../assets/icon/done.svg";
import { ReactComponent as EditIcon } from "../../assets/icon/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/icon/trash.svg";
import { ReactComponent as RedoIcon } from "../../assets/icon/redo.svg";
import TodoItemPropsType from "./TodoItem.types";
import { useDispatch } from "react-redux";
import {
  changeTodo,
  deleteTodo,
  toggleTodo,
} from "../../store/reducers/todoReducer";

const TodoItem = ({ todo }: TodoItemPropsType) => {
  const dispatch: any = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(todo.title);

  if (isEdit) {
    return (
      <div className={styles.todoitem}>
        <input
          className={styles.todoitem__changeInput}
          type="text"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={styles.todoitem__changeBtn}
          onClick={() => {
            dispatch(changeTodo(todo.id, value));
            setIsEdit(false);
          }}
        >
          Change
        </button>
      </div>
    );
  }
  return (
    <div className={styles.todoitem}>
      <div
        className={styles.todoitem__task}
        style={
          todo.isDone
            ? { textDecoration: "line-through", color: "#8B8B8B" }
            : {}
        }
      >
        {todo.title}
      </div>
      <div className={styles.todoitem__btnBlock}>
        <button
          className={styles.todoitem__btn}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.isDone ? (
            <RedoIcon title="Not completed" />
          ) : (
            <DoneIcon title="Done" />
          )}
        </button>
        <button
          className={styles.todoitem__btn}
          onClick={() => setIsEdit(true)}
        >
          <EditIcon title="Edit" />
        </button>
        <button
          className={styles.todoitem__btn}
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          <DelIcon title="Delete" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
