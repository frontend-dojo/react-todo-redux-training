import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { combineReducers, createStore } from "redux";

export type Todo = { id: string; content: string };

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [] as Todo[],
  reducers: {
    // TODO 必要なアクションを書く
  }
});

const reducer = combineReducers({
  todoList: todoListSlice.reducer
});

export const actions = { ...todoListSlice.actions };

const store = createStore(reducer);

export default store;
export type RootState = {
  todoList: Todo[];
};
