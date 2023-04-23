import { createSlice } from "@reduxjs/toolkit";

let nextId = 4;

const initialState = [
  {
    id: 1,
    text: "일기 쓰기",
    done: true,
  },
  {
    id: 2,
    text: "밥 먹기",
    done: false,
  },
  {
    id: 3,
    text: "씻기",
    done: false,
  },
];

const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      return state.concat({
        id: nextId++,
        text: action.payload,
        done: false,
      });
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      console.log(action.payload, "editTodo!!");

      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.value, done: false }
          : todo
      );
    },
  },
});

export const { createTodo, toggleTodo, removeTodo, editTodo } =
  counterSlice.actions;

export default counterSlice.reducer;
