import { TodoTask } from '../TodoTask/TodoTask'
import style from './TodoList.module.css'

export function TodoList({ todo, setTodo }) {
    return (
        <div className={style.tasks}>
            {todo.map((task) => (
                <TodoTask key={task.id} task={task} setTodo={setTodo} />
            ))}
        </div>
    );
}
