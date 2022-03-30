import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoDate from "./components/TodoDate";
import TodoItem from "./components/TodoItem";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoDate />
        <TodoItem />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
