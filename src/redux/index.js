/* 액션 타입 선언 */
const CREATE = 'CREATE';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';

let nextId = 4;

export const createTodo = (text) => {
  return {
    type: CREATE,
    todo: {
      id: nextId++,
      text,
      done: false,
    },
  };
};
export const toggleTodo = (id) => ({
  type: TOGGLE,
  id,
});
export const removeTodo = (id) => ({
  type: REMOVE,
  id,
});
export const editTodo = (id, text) => ({
  type: EDIT,
  todo: {
    id,
    text,
    done: false,
  },
});

/* 초기 상태 선언 */
const initialState = [
  {
    id: 1,
    text: '일기 쓰기',
    done: true,
  },
  {
    id: 2,
    text: '밥 먹기',
    done: false,
  },
  {
    id: 3,
    text: '씻기',
    done: false,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    case EDIT:
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    default:
      return state;
  }
}
