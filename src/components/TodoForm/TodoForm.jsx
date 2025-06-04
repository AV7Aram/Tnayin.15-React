import style from './TodoForm.module.css'
import { TodoFilter } from '../TodoFilter/TodoFilter';
import { instance } from '../../App';

export function TodoForm({ task, setTask, setTodo, setFilter }) {
    const addTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            instance.post("todos", { title: task.trim(), completed: false })
                .then((res) => {
                    setTodo((prev) => [
                        { id: Date.now(), task: res.data.title, completed: false },
                        ...prev,
                    ]);
                    setTask("");
                });
        }
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