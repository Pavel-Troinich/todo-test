export interface TodoState {
  todos: any[];
}

export interface TodoAction {
  type: string;
  payload?: any;
}
