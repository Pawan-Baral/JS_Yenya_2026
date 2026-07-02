let tasks = [];
let filter = 'all';



function displayTasks() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        //filter logic
        if (filter === 'active' && task.done) continue;
        if (filter === 'done' && task.done) continue;
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.done) span.style.textDecoration = "line-through";
        li.appendChild(span);

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = task.done ? "Undo" : "Done"
    }
    document.getElementById("list").innerHTML = html;
}
function addTask() {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if (text === "") {
        alert("WArning! Your are trying to add empty task");

        return;
    }
    tasks.push(text);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}
function removeTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    displayTasks();
}
function clearAll() {
    tasks = [];
    saveTasks();
    displayTasks();

}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let statusElement = document.getElementById("saveStatus");
    statusElement.innerHTML = "Saved !";
    setTimeout(function () {
        statusElement.innerText = "";
    }, 1200);
}
function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved !== null) {
        tasks = JSON.parse(saved);
    }
}
loadTasks();
displayTasks();
document.getElementById("task").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function displayTasks() {
    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        html += "<li>" + tasks[i] + " <button onclick='removeTask(" + i + ")';> x</button></li>";
    }
    document.getElementById("list").innerHTML = html;
}


function search() {

    let input = document.getElementById("task");
    let text = input.value;
    if (text === "") {
        alert("WArning! Your are trying to add empty task");

        return;
    }

    console.log("input", text)
    console.log("tasks", tasks )
    const searchData = tasks.filter((item) => {
        return item.includes(text)
    });

    console.log(searchData)
    let html = "";
    for (let i = 0; i < searchData.length; i++) {
        html += "<li>" + searchData[i] + " <button onclick='removeTask(" + i + ")';> x</button></li>";
    }
    document.getElementById("list").innerHTML = html;
}

console.log(tasks)