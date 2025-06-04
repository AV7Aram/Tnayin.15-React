import { useState } from "react";
import { TaskText } from "../TaskText/TaskText";
import { TaskActions } from "../TaskActions/TaskActions";
import style from "./TodoTask.module.css";
import { instance } from "../../App";

export function TodoTask({ task, setTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.task);

    const deleteTask = () => {
        instance.delete(`todos/${task.id}`)
            .then(() => {
                setTodo((prev) => prev.filter((t) => t.id !== task.id));
            });
    };

    const updateTask = () => {
        instance.patch(`todos/${task.id}`, { title: editText })
            .then(() => {
                setTodo((prev) =>
                    prev.map((t) =>
                        t.id === task.id ? { ...t, task: editText.trim() } : t
                    )
                );
                setIsEditing(false);
            });
    };

    const toggleCompleted = () => {
        instance.patch(`todos/${task.id}`, { completed: !task.completed })
            .then(() => {
                setTodo((prev) =>
                    prev.map((t) =>
                        t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                );
            });
    };

    const handleEditToggle = () => {
        if (isEditing) {
            updateTask();
        } else {
            setIsEditing(true);
        }
    };

    const handleBlurOrEnter = (e) => {
        if (e.type === "blur" || (e.key === "Enter" && editText.trim())) {
            updateTask();
        }
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    return (
        <div
            className={style.task}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
            <input type="checkbox" checked={task.completed} onChange={toggleCompleted} />
            <TaskText
                task={task}
                isEditing={isEditing}
                editText={editText}
                setEditText={setEditText}
                onBlurOrEnter={handleBlurOrEnter}
                onDoubleClick={() => setIsEditing(true)}
            />
            <TaskActions
                isEditing={isEditing}
                onEdit={handleEditToggle}
                onDelete={deleteTask}
            />
        </div>
    );
}