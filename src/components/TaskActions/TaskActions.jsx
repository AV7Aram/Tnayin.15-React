import { FaRegEdit, FaRegTrashAlt, FaRegSave } from "react-icons/fa";
import style from './TaskActions.module.css';

export function TaskActions({ isEditing, onEdit, onDelete }) {
    return (
        <>
            <button className={style.edit} onClick={onEdit}>
                {isEditing ? <FaRegSave /> : <FaRegEdit />}
            </button>
            <button className={style.delete} onClick={onDelete}>
                <FaRegTrashAlt />
            </button>
        </>
    );
}
