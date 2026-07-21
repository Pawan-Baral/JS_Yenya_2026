import { useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

function ToDoItem({ task, deleteTask, toggleCompleted, editTask}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
        />
      ) : (
<span
  className={task.completed ? "completed task-text" : "task-text"}
>
  {task.text}
</span>
      )}

      {isEditing ? (
        <button className="save-btn" onClick={()=>{editTask(task.id,editText);
           setIsEditing(false);}}><FaSave /></button>
      ) : (
        <button className="edit-btn" onClick={() =>{ setIsEditing(true) }}>
          <FaEdit />
        </button>
      )}

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        <FaTrash />
      </button>
    </div>
  );
}
export default ToDoItem;