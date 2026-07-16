let tasks = JSON.parse(localStorage.getItem("task")) || [];

let task = document.getElementById("task");
let description = document.getElementById("description")

let addBtn = document.getElementById("addBtn")

let taskList = document.getElementById("taskList")

function saveLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

displayTasks();

addBtn.addEventListener("click", function () {

    let newTask = {

        id: Date.now(),
        task: task.value,
        description: description.value,
        date: new Date().toLocaleDateString(),
        completed: false
    };
    tasks.push(newTask);
    saveLocalStorage();
    displayTasks();
    task.value = "";
    description.value = "";
});

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function (item) {

        taskList.innerHTML += `

        <div style="border:1px solid black;padding:10px;margin:10px;">

            <h3>
                ${item.task}
            </h3>

            <p>${item.description}</p>

            <p>Date : ${item.date}</p>

            <p>Status : ${item.completed
 ? "Completed" : "Pending"}</p>

            <input
                type="checkbox"
                ${item.completed ? "checked" : ""}
                onchange="toggleStatus(${item.id})"
            >

            <button onclick="deleteTask(${item.id})">
                Delete
            </button>

        </div>

        `;

    });

}


function toggleStatus(id) {

    let task = tasks.find(function (item) {

        return item.id === id;

    });

    task.completed = !task.completed;

    saveLocalStorage();

    displayTasks();

}


function deleteTask(id) {

    tasks = tasks.filter(function (item) {

        return item.id !== id;

    });

    saveLocalStorage();

    displayTasks();

}
displayTasks();