document.addEventListener("DOMContentLoaded", function () {
    const recipeContainer = document.getElementById('recipeSuggestions');
    const recipeForm = document.getElementById('recipeForm');
    const searchInput = document.getElementById('searchInput');
    let recipes = []; // Store fetched recipes

    // Fetching recipes from the JSON file
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => {
            recipes = data; // Store fetched recipes in a variable
            displayRecipes(recipes); // Display all recipes initially
        })
        .catch(error => console.error('Error fetching the recipes:', error));

    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = ''; // Clear previous content
        recipesToDisplay.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe';
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            `;
            recipeContainer.appendChild(recipeDiv);
        });
    }

    // Handle search functionality
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(searchTerm)
            )
        );
        displayRecipes(filteredRecipes); // Display filtered recipes
    });

    // Handling recipe submission
    recipeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('recipeIngredients').value.split(',').map(ingredient => ingredient.trim());
        const instructions = document.getElementById('recipeInstructions').value;

        const newRecipe = {
            name: name,
            ingredients: ingredients,
            instructions: instructions
        };

        console.log('New Recipe Added:', newRecipe);

        // Reset the form
        recipeForm.reset();
        alert('Recipe added successfully!');

        // Add the new recipe to the local recipes array and display it
        recipes.push(newRecipe);
        displayRecipes(recipes);
    });

    // Fade in the recipe section on scroll
    window.addEventListener('scroll', function () {
        const recipeSection = document.querySelector('.recipe-section');
        const sectionPosition = recipeSection.getBoundingClientRect().top;

        if (sectionPosition < window.innerHeight) {
            document.body.classList.add('scrolled');
        }
    });
});



