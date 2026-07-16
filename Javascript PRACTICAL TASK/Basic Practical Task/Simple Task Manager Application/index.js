
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


let task = document.getElementById("task");
let description = document.getElementById("description");
let status = document.getElementById("status");


let btnAdd = document.getElementById("btnAdd");
let btnEdit = document.getElementById("btnEdit");

let editId = null;

function saveLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    let table = `
    <tr>
        <th>Task Id</th>            
        <th>Task Name</th>
        <th>Task Description</th>       
        <th>Status</th>                     
        <th>Action</th>                  
    </tr>
    `;

    tasks.forEach(function (item) {

        table += `
        <tr>
            <td>${item.id}</td>
            <td>${item.task}</td>
            <td>${item.description}</td>
            <td>${item.status}</td>
            <td>
                <button onclick="deleteTask(${item.id})">Delete</button>
            </td>
            <td>
            <button onclick="editTask(${item.id})">Edit</button>
            </td>
        </tr>
        `;

    });

    document.querySelector("table").innerHTML = table;
}

btnAdd.addEventListener("click", function (event) {

    event.preventDefault();

    if (editId == null) {

        let newTask = {
            id: Date.now(),
            task: task.value,
            description: description.value,
            status: status.value
        };

        tasks.push(newTask);

    } else {

        let taskData = tasks.find(function (item) {
            return item.id === editId;
        });

        taskData.task = task.value;
        taskData.description = description.value;
        taskData.status = status.value;

        editId = null;

    }

    saveLocalStorage();
    displayTasks();

    task.value = "";
    description.value = "";
    status.value = "pending";

});

function editTask(id) {

    let taskData = tasks.find(function (item) {
        return item.id === id;
    });

    task.value = taskData.task;
    description.value = taskData.description;
    status.value = taskData.status;

  editId = id;

}

function deleteTask(id) {

    tasks = tasks.filter(function (item) {

        return item.id !== id;

    });

    saveLocalStorage();

    displayTasks();

}

displayTasks();