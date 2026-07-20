import ToDoItem from "./ToDoItem";

function ToDoList({tasks,deleteTask,toggleCompleted,editTask}) {
  console.log(tasks);
  const toDOList=tasks.map(task=>( <ToDoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} editTask={editTask}/> ));
  return <div>{ toDOList}</div>;
}
export default ToDoList;