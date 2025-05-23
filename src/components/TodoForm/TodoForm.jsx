import style from './TodoForm.module.css'
import { TodoFilter } from '../TodoFilter/TodoFilter';

export function TodoForm({ task, setTask, setTodo, setFilter }) {
    const addTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ title: task.trim(), completed: false }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setTodo((prev) => [
                        { id: Date.now(), task: data.title, completed: false },
                        ...prev,
                    ]);
                    setTask("");
                })
        };
    }

    return (
        <div className={style.newTask}>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Task to be done..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <TodoFilter setFilter={setFilter} />
                <button>Add</button>
            </form>
        </div>
    );
}
