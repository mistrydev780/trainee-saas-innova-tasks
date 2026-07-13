let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

let name = document.getElementById("name");
let category = document.getElementById("category")
let ingredient = document.getElementById("ingredient")

let addBtn = document.getElementById("addBtn")
let searchBtn = document.getElementById("searchBtn")

let recipeList = document.getElementById("recipeList")


function displayRecipes(data = recipes) {

    recipeList.innerHTML = "";

    data.forEach(function (recipe) {

        recipeList.innerHTML += `
            <div>
                <h3>${recipe.name}</h3>
                <p>Category : ${recipe.category}</p>
                <p>Ingredient : ${recipe.ingredient}</p>

                <button onclick="editRecipe(${recipe.id})">Edit</button>
                <button onclick="deleteRecipe(${recipe.id})">Delete</button>

                <hr>
            </div>
        `;

    });

}

function saveLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

addBtn.addEventListener("click", function () {
    let recipe = {
        id: Date.now(),
        name: name.value,
        category: category.value,
        ingredient: ingredient.value
    };
    recipes.push(recipe);
    saveLocalStorage();
    displayRecipes();

    name.value = "";
    category.value = "";
    ingredient.value = "";
});

function deleteRecipe(id) {
    recipes = recipes.filter(function (recipe) {
        return recipe.id !== id;
    });

    saveLocalStorage();
    displayRecipes();
}

function editRecipe(id) {
    let recipe = recipes.find(function (recipe) {
        recipe.id === id;
    });
    let newName = prompt("Enter New Recipe Name", recipe.name);
    if (newName) {
        recipe.name = newName;
    }

    saveLocalStorage();
    displayRecipes();
}

searchBtn.addEventListener("click", function () {
    let search = document.getElementById("search").value.toLowerCase();

    let result = recipes.filter(function (recipe) {
        return recipe.ingredient.toLowerCase().includes(search);
    })
    displayRecipes(result);
})
displayRecipes();
