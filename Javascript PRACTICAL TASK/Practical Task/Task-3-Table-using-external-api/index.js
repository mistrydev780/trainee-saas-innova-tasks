let users = [];

const getUser = async () => {
    let response = await fetch(" https://jsonplaceholder.typicode.com/users")
    let data =await response.json()
    users = data
    console.log(users)
    displayUsers(users)
}


function displayUsers (data) {
    let tabel = document.getElementById("userTable")

    tabel.innerHTML="";

    data.forEach(function(user){
        tabel.innerHTML += `
         <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
         </tr>
        `;
    });
}

document.getElementById('searchBtn').addEventListener("click", function (){

    let search = document.getElementById("search").value.toLowerCase();

    let result = users.filter(function(user){
        return 
        user.name.toLowerCase().include(search)
        return 
        user.email.toLowerCase().include(search)
    })
    displayUsers(result)
})

getUser()