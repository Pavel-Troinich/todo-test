import { todos } from "../../data/todos";
import { Dispatch } from "redux";
import { v4 } from "uuid";
import { TodoAction, TodoState } from "./types";

const ADD = "ADD";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";
const CHANGE = "CHANGE";

const initialState: TodoState = {
  todos: todos,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: v4(), title: action.payload, isDone: false },
        ],
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        }),
      };
    case CHANGE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, title: action.payload.title };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export const addTodo = (task: string) => {
  return (dispatch: Dispatch<TodoAction>) => {
    return dispatch({ type: ADD, payload: task });
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<TodoAction>) => {
    return dispatch({ type: DELETE, payload: id });
  };
};

export const toggleTodo = (id: string) => {
  return (dispatch: Dispatch<TodoAction>) => {
    return dispatch({ type: TOGGLE, payload: id });
  };
};

export const changeTodo = (id: string, title: string) => {
  return (dispatch: Dispatch<TodoAction>) => {
    return dispatch({ type: CHANGE, payload: { id, title } });
  };
};
