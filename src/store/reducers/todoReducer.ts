import { todos } from "../../data/todos";
import { Dispatch } from "redux";
import { v4 } from "uuid";

const ADD = "ADD";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";

interface TodoState {
  todos: any[];
}

interface TodoAction {
  type: string;
  payload?: any;
}

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
