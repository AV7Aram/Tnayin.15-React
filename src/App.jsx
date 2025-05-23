import { useState, useEffect } from "react";
import { TodoContainer } from "./components/TodoContainer/TodoContainer";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) =>
        setTodo(data.map(({ id, title, completed }) => ({
          id,
          task: title,
          completed,
        })))
      )
  }, []);

  const filteredTodo = todo.filter((t) => {
    if (filter === "done") {
      return t.completed
    };
    if (filter === "notDone") {
      return !t.completed
    };
    return true;
  });

  return (
    <TodoContainer
      task={task}
      setTask={setTask}
      todo={filteredTodo}
      setTodo={setTodo}
      setFilter={setFilter}
    />
  );
}

export default App;
