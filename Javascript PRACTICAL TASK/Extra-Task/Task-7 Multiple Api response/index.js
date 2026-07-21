let appState = {
    userData: null,
    todoData: null
};

let userApi = 'https://jsonplaceholder.typicode.com/users';

let todoApi = 'https://dummyjson.com/todos';

console.log(userApi)
console.log(todoApi)

Promise.all([
    fetch(userApi).then(response => response.json()),
    fetch(todoApi).then(response => response.json())
])

    .then(([user, todo]) => {
        appState.userData = user;
        appState.todoData = todo;
        displayData();
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

function displayData() {
    const outputDiv = document.getElementById('tabledata');
    outputDiv.innerHTML = "";

    appState.userData.forEach(user => {
        outputDiv.innerHTML += `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td></td>
            <td></td>
        </tr>`;
    });

    appState.todoData.todos.forEach(item => {
        outputDiv.innerHTML += `<tr>
            <td></td>
            <td></td>
            <td>${item.todo}</td>
            <td>${item.completed ? 'Done' : 'Pending'}</td>
        </tr>`;
    });
}