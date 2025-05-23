import style from './TaskText.module.css';

export function TaskText({ task, isEditing, editText, setEditText, onBlurOrEnter, onDoubleClick }) {
    return isEditing ? (
        <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={onBlurOrEnter}
            onBlur={onBlurOrEnter}
            style={{ flexGrow: 1 }}
        />
    ) : (
        <span onDoubleClick={onDoubleClick} className={style.taskName}>
            {task.completed ? <span>{task.task}</span> : task.task}
        </span>
    );
}
