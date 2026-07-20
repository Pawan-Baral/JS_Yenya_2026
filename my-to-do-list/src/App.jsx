import React, { use, useState ,useEffect } from 'react'
import Header from "./components/Header";
import TodoInput from "./components/ToDoInput";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/ToDoList";
import Footer from "./components/Footer";
//import ToDoItem from './components/ToDoItem';



function App() {
  const [tasks,setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem("tasks");

    if(savedTasks){
      return JSON.parse(savedTasks);
    }
    return [];
  });
  const [searchText,setSearchText] =useState("");
  const [filter,setFilter] =useState("all");
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task=>task.completed).length;
  const remainingTasks= totalTasks-completedTasks;
useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
}, [tasks]);
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
const filteredTasks =tasks.filter(task=>task.text.toLowerCase().includes(searchText.toLowerCase()));

console.log(tasks);
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
  return (
  <>
  <Header />
  <TodoInput addTask={addTask} />
  <TodoList  deleteTask={deleteTask} tasks={displayTasks} toggleCompleted={toggleCompleted} editTask={editTask}/>
 
  <SearchBar searchText={searchText} setSearchText={setSearchText}/>
  <FilterButtons filter={filter} setFilter={setFilter} />
  <Footer
  totalTasks={totalTasks}
  completedTasks={completedTasks}
  remainingTasks={remainingTasks}
/>
  
  </>)
}

export default App;

// modules

// 2 kinds of exports

// -- named export (import as it is, we should use curly braces during export and import)
// -- default export (name can be changed during import, no curly braces required)
