const API_URL = 'https://dummyjson.com/recipes';

let allRecipes = [];

const recipesListSection = document.querySelector('#recipesListSection');
const recipeDetailsSection = document.querySelector('#recipeDetailsSection');
const recipesContainer = document.querySelector('#recipesContainer');
const recipeDetails = document.querySelector('#recipeDetails');
const searchInput = document.querySelector('#searchInput');
const backButton = document.querySelector('#backButton');
const statusMessage = document.querySelector('#statusMessage');

document.addEventListener('DOMContentLoaded', function () {
    getRecipes();

    searchInput.addEventListener('input', searchRecipes);
    backButton.addEventListener('click', backToRecipesList);
});

function getRecipes() {
    statusMessage.innerText = 'Loading recipes...';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Error loading data from the server');
            }

            return response.json();
        })
        .then(function (data) {
            allRecipes = data.recipes;
            displayRecipes(allRecipes);
            statusMessage.innerText = '';
        })
        .catch(function (error) {
            statusMessage.innerText = 'An error occurred while loading the recipes. Please try again later.';
            console.log(error);
        });
}

function displayRecipes(recipes) {
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        statusMessage.innerText = 'No recipes were found for your search.';
        return;
    }

    statusMessage.innerText = '';

    recipes.forEach(function (recipe) {
        const card = createRecipeCard(recipe);
        recipesContainer.appendChild(card);
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;

    const title = document.createElement('h3');
    title.innerText = recipe.name;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener('click', function () {
        showRecipeDetails(recipe);
    });

    return card;
}

function searchRecipes() {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredRecipes = allRecipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(searchText);
    });

    displayRecipes(filteredRecipes);
}

function showRecipeDetails(recipe) {
    recipesListSection.classList.add('hidden');
    recipeDetailsSection.classList.remove('hidden');

    recipeDetails.innerHTML = '';

    const title = document.createElement('h2');
    title.innerText = recipe.name;

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;

    const timesContainer = document.createElement('div');
    timesContainer.className = 'recipe-times';

    const prepTime = document.createElement('div');
    prepTime.className = 'time-box';
    prepTime.innerText = `Preparation time: ${recipe.prepTimeMinutes} minutes`;

    const cookTime = document.createElement('div');
    cookTime.className = 'time-box';
    cookTime.innerText = `Cooking time: ${recipe.cookTimeMinutes} minutes`;

    timesContainer.appendChild(prepTime);
    timesContainer.appendChild(cookTime);

    const ingredientsTitle = document.createElement('h3');
    ingredientsTitle.innerText = 'Ingredients';

    const ingredientsList = document.createElement('ul');
    ingredientsList.className = 'ingredients-list';

    recipe.ingredients.forEach(function (ingredient) {
        const item = document.createElement('li');
        item.innerText = ingredient;
        ingredientsList.appendChild(item);
    });

    const instructionsTitle = document.createElement('h3');
    instructionsTitle.innerText = 'Instructions';

    const instructionsText = document.createElement('p');
    instructionsText.className = 'instructions-text';
    instructionsText.innerText = recipe.instructions.join('\n\n');

    recipeDetails.appendChild(title);
    recipeDetails.appendChild(img);
    recipeDetails.appendChild(timesContainer);
    recipeDetails.appendChild(ingredientsTitle);
    recipeDetails.appendChild(ingredientsList);
    recipeDetails.appendChild(instructionsTitle);
    recipeDetails.appendChild(instructionsText);
}

function backToRecipesList() {
    recipeDetailsSection.classList.add('hidden');
    recipesListSection.classList.remove('hidden');

    recipeDetails.innerHTML = '';
}