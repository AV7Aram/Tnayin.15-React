import { TodoForm } from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";
import style from './TodoContainer.module.css'

export function TodoContainer({ task, setTask, todo, setTodo, setFilter }) {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <TodoForm task={task} setTask={setTask} setTodo={setTodo} setFilter={setFilter} />
                <TodoList todo={todo} setTodo={setTodo} />
            </div>
        </div>
    );
}
