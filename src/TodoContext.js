import React, {
  useReducer,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";

const initialTodos = [
  // {
  //   id: 1,
  //   text: "일기 쓰기",
  //   done: true,
  // },
  // {
  //   id: 2,
  //   text: "밥 먹기",
  //   done: false,
  // },
  // {
  //   id: 3,
  //   text: "씻기",
  //   done: false,
  // },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("todolist");
    return localData ? JSON.parse(localData) : initialTodos;
  });
  const nextId = useRef(state.length + 1);

  useEffect(() => {
    console.log(state);
    window.localStorage.setItem("todolist", JSON.stringify(state));
  }, [state]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
