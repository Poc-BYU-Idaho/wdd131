// I could change the import name of "recipes" to anything and the code would still work 
// because recipes is the default export from recipes.mjs
// Also, note that I'm not using curly braces around "recipes." They're only for named exports.
// Putting curly braces around it would actually prevent it from working.
// Also notice the "./" at the beginning of the filepath.
// This tells JavaScript that the path is relative to this file,
// so it starts looking for recipes.mjs from the folder that this file is in.
// Also notice in the .HTML file that I've put "type="module""" in the script tag.
// This allows me to import from other JS files.
import recipes from "./recipes.mjs"


function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random()*(maxNumber + 1))
}

function getRandomArrayItem(array) {
    return array[generateRandomNumber(array.length - 1)]
}





function getRecipeTemplate(recipe) {
    return `
            <div class="recipe">
                <img src="${recipe.image}" alt="food from recipe">
                <div class="recipe-info">
                    <span class="recipe-tags">${getTagsTemplate(recipe.tags)}</span>
                    <h2>${recipe.name}</h2>
                    <!-- The aria-label will be read by the screen reader, and the aria-hidden="true" on the stars will tell the screen reader to ignore those so they will not be read. -->
                    ${getRatingTemplate(recipe.rating)}
                    <span class="recipe-description">${recipe.description}</span>
                </div>
            </div>
            `
}

// This is a helper function for the getRecipeTemplate function.
function getTagsTemplate(tags) {

	// loop through the tags list and transform the strings to HTML.
    let tagHtml = ""
	tags.forEach(tag => {tagHtml += `${tag} `})
    return tagHtml
}

// This is a helper function for the getRecipeTemplate function.
function getRatingTemplate(rating) {

	// begin building an html string using the ratings HTML written earlier as a model.
	let ratingHtml = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i <= 4; i++) {

        // check to see if the current index of the loop is less than our rating.
        if (i < rating) {

            // if so then output a filled star.
            ratingHtml += `<span aria-hidden="true" class="icon-star">⭐</span>`

        } else {

            // else output an empty star.
            ratingHtml += `<span aria-hidden="true" class="icon-star">☆</span>`
        }
		

    }

	// after the loop, add the closing tag to our string.
	ratingHtml += `</span>`

	// return the html string.
	return ratingHtml
}




// This function puts a list of recipes on the webpage.
function renderRecipes(recipeList) {

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings.
    let recipesHtml = ""
    recipeList.forEach(recipe => recipesHtml += getRecipeTemplate(recipe))

	// Set the HTML strings as the innerHTML of our output element.
    document.getElementById("recipes").innerHTML = recipesHtml

}

// Loads the webpage with a random recipe from the recipe list.
function init() {
    
  // get a random recipe.
  const recipe = getRandomArrayItem(recipes)

  // render the recipe with renderRecipes. Notice how recipe is passed into the function using square brackets.
  // This puts the recipe in an array so it can be rendered by the renderRecipes function.
  renderRecipes([recipe]);
}

init()





// Get the search form from the HTML for reference.
let searchForm = document.querySelector("#searchForm")

// Get the search input box from the HTML for reference.
let searchInputBox = document.getElementById("searchInputBox")

// Add an event listener to the magnifying glass image on the webpage.
// When you click it, it will search the recipes list and display recipes whose tags, description, name, or ingredients
// contain the search query that's currently in the search input box.
// It will then display them on the webpage in alphabetical order.
searchForm.querySelector("img").addEventListener("click", (event) => {

    // Get the value in the search input box and convert it to lowercase letters.
    let searchQuery = searchInputBox.value.toLowerCase()

    // Render recipes to the webpage that contain the search query in their tags, description, name, or ingredients.
    // Also make sure the recipes are in alphabetical order (by name) by using the .sort() method.
    renderRecipes(recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchQuery) || 
    recipe.description.toLowerCase().includes(searchQuery) || 
    recipe.tags.find(tag => tag.toLowerCase().includes(searchQuery)) || 
    recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(searchQuery)))
    .sort((a,b) => {

        // I'm not using else if or else because return will automatically stop the function's execution.
        if (a.name.toLowerCase() < b.name.toLowerCase()) {

            // Put recipe a before recipe b by returning -1.
            return -1
        }

        if (a.name.toLowerCase() > b.name.toLowerCase()) {

            // Put recipe a after recipe b by returning 1.
            return 1
        }

        // If they're the exact same, don't change their order.
        return 0
    }))
})