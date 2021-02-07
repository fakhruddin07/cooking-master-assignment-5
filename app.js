const meal = firstLetter =>{
const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
fetch(url)
.then(res => res.json())
.then(data => displayFoods(data))
}


const searchBar = document.getElementById("search");
searchBar.addEventListener("click", function () {
    const searchMeal = document.getElementById("search-meal").value;
    meal(searchMeal)
})

const displayFoods = foods => {
    const ul = document.getElementById("food-list")
    let food = foods.meals;
    ul.innerText = "";

    food.forEach( foodies => {
        const foodiesDiv = document.createElement("div");
        foodiesDiv.className = "foodDiv"
        const foodAbout =`
            <img src = ${foodies.strMealThumb}>
            <h5>${foodies.strMeal}</h5>
            <button onclick ="displayFoodDetails('${foodies.idMeal}')">Details</button>
        `
        foodiesDiv.innerHTML = foodAbout;
        ul.appendChild(foodiesDiv)
    });
}

const displayFoodDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        renderFoodInfo(data.meals[0])
    })
}

const renderFoodInfo = foodes => {
    console.log(foodes)
    const foodDetails = document.getElementById("food-detail")
    const ul = document.createElement("ul")
    foodDetails.innerText = ""

    const foodsIngredients =`
        <img src = ${foodes.strMealThumb}>
        <li>${foodes.strIngredient1}</li>
        <li>${foodes.strIngredient2}</li>
        <li>${foodes.strIngredient3}</li>
        <li>${foodes.strIngredient4}</li>
        <li>${foodes.strIngredient5}</li>
        <li>${foodes.strIngredient6}</li>
        <li>${foodes.strIngredient7}</li>
        <li>${foodes.strIngredient8}</li>
        <li>${foodes.strIngredient9}</li>
        <li>${foodes.strIngredient10}</li>
    ` 
    ul.innerHTML = foodsIngredients;
    foodDetails.appendChild(ul);
}