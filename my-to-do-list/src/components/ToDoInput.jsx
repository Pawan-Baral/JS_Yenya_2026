import { useState } from "react";

function ToDoInput({addTask}) {
  const [input,setInput]=useState("");
  return <div>
    
<form onSubmit={(event)=>{
  event.preventDefault();
  addTask(input);
  setInput("");
}}
>
      <input type="text"
     id="taskInput"
      placeholder="Make task as small as possible"
      value={input}
       onChange={(event)=>{
      setInput(event.target.value);
    }}></input>
</form>
    <button id="addTaskButton"
onClick={() => {
  const text = input.trim();

  if (text !== "") {
    addTask(text);
    setInput("");
  }
}}>+ Add Task</button>
  </div>;
}                                         
export default ToDoInput;