import React from "react";
import styles from "./TodoItem.module.scss";
import { ReactComponent as DoneIcon } from "../../assets/icon/done.svg";
import { ReactComponent as EditIcon } from "../../assets/icon/edit.svg";
import { ReactComponent as DelIcon } from "../../assets/icon/trash.svg";
import { ReactComponent as RedoIcon } from "../../assets/icon/redo.svg";

const TodoItem = () => {
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoitem__task}>
        Go shopping fdfhjdrtny trhtdjtyjdjyt gfrt
      </div>
      <div className={styles.todoitem__btnBlock}>
        <button className={styles.todoitem__btn} title="Выполнено">
          <DoneIcon />
        </button>
        <button className={styles.todoitem__btn} title="Не выполнено">
          <RedoIcon />
        </button>
        <button className={styles.todoitem__btn} title="Редактировать">
          <EditIcon />
        </button>
        <button className={styles.todoitem__btn} title="Удалить">
          <DelIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
