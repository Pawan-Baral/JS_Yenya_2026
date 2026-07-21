import React, { use, useState ,useEffect } from 'react'
import Header from "./components/Header";
import TodoInput from "./components/ToDoInput";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/ToDoList";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import './App.css';
import EmptyState from "./components/EmptyState";
//import ToDoItem from './components/ToDoItem';



function App() {
  const [tasks,setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks");

    if(savedTasks){
      return JSON.parse(savedTasks);
    }
    return [];
  });

  console.log(tasks);
  const [darkMode, setDarkMode] = useState(()=>{
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme){ 
      return JSON.parse(savedTheme);
    }
    return false;
  });
  const [searchText,setSearchText] =useState("");
  const [filter,setFilter] =useState("all");
  const filteredTasks =tasks.filter(task=>task.text.toLowerCase().includes(searchText.toLowerCase()));
const displayTasks =filteredTasks.filter(task=>{
  if(filter==="all"){
    return true;
  }
 if(filter==="active"){
    return !task.completed;
  }
  if(filter==="completed"){
    return task.completed;
}
return true;
}
  
);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task=>task.completed).length;
  const remainingTasks= totalTasks-completedTasks;
  const activeTasks = displayTasks.filter(task => !task.completed);
  const completedTasksList = displayTasks.filter(task => task.completed);
useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
}, [tasks]);
useEffect(() => {
  localStorage.setItem("theme", JSON.stringify(darkMode));
}, [darkMode]);
  function addTask(text){
   
setTasks((previousTasks)=>{return [...previousTasks , 
  {
    id: Date.now(),
    text:text,
    completed:false,
  }
  ]})
}

function deleteTask(id){
  setTasks(previousTasks =>
    previousTasks.filter(task => task.id !== id)
);
}
function toggleCompleted(id){
  setTasks(previousTasks=>previousTasks.map(task=>{
    if (task.id===id){
      return {...task,completed:!task.completed}
    }
    return task;
  })
);

}
function editTask(id,newText){
  setTasks(previousTasks=>previousTasks.map(task =>{
    if(task.id===id){
      return {...task,text:newText};
    }
    return task;
  }));
  
}
function toggleTheme() {
  setDarkMode(previous => !previous);
}



return (
  <div className={  darkMode ? "app dark-mode" : "app"}>

    <Header
    darkMode={darkMode}
    toggleTheme={toggleTheme}
/>

    <TodoInput addTask={addTask} />

    <Toolbar
      searchText={searchText}
      setSearchText={setSearchText}
      filter={filter}
      setFilter={setFilter}
    />

    <h2 className="section-title">
    Active Tasks ({activeTasks.length})
</h2>

{activeTasks.length === 0 ? (
    <EmptyState message="No active tasks" />
) : (
    <TodoList
        tasks={activeTasks}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
        editTask={editTask}
    />
)}

<h2 className="section-title completed-title">
    Completed Tasks ({completedTasksList.length})
</h2>

{completedTasksList.length === 0 ? (
    <EmptyState message="No completed tasks" />
) : (
    <TodoList
        tasks={completedTasksList}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
        editTask={editTask}
    />
)}

    <Footer
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      remainingTasks={remainingTasks}
    />

  </div>
);
}

export default App;

// modules

// 2 kinds of exports

// -- named export (import as it is, we should use curly braces during export and import)
// -- default export (name can be changed during import, no curly braces required)
