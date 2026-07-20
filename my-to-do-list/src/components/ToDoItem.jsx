import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleCompleted, editTask}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  return (
    <div>
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
          style={{
            color: task.completed ? "green" : "whitesmoke",
            textDecoration: task.completed ? "line-through" : "none",
            opacity: task.completed ? 0.6 : 1,
          }}
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={()=>{editTask(task.id,editText);
           setIsEditing(false);}}>Save</button>
      ) : (
        <button onClick={() =>{ setIsEditing(true) }}>Edit</button>
      )}

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}
export default ToDoItem;