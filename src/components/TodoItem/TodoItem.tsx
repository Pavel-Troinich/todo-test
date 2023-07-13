import React from "react";
import styles from "./TodoItem.module.scss";
import { ReactComponent as DoneIcon } from "../../assets/icon/done.svg";
import { ReactComponent as EditIcon } from "../../assets/icon/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/icon/trash.svg";
import { ReactComponent as RedoIcon } from "../../assets/icon/redo.svg";
import TodoItemPropsType from "./TodoItem.types";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../store/reducers/todoReducer";

const TodoItem = ({ todo }: TodoItemPropsType) => {
  const dispatch = useDispatch();

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
          // @ts-ignore
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.isDone ? (
            <RedoIcon title="Not completed" />
          ) : (
            <DoneIcon title="Done" />
          )}
        </button>
        <button className={styles.todoitem__btn}>
          <EditIcon title="Edit" />
        </button>
        <button
          className={styles.todoitem__btn}
          onClick={() => {
            // @ts-ignore
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
