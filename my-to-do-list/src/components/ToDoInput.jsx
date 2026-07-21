import { useState } from "react";

function ToDoInput({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const text = input.trim();

    if (text !== "") {
      addTask(text);
      setInput("");
    }
  }

  return (<>
    <form className="todo-input" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Make task as small as possible"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button type="submit">
        + Add Task
      </button>

    </form>
    
    </>
  );
}

export default ToDoInput;