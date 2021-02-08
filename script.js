const resultShowingArea = document.getElementById('meals');
const searchBtn = document.getElementById('search-btn');
const warningMessage = document.getElementById('message');
const searchArea = document.getElementById('seaching-area');
searchBtn.addEventListener('click',() => {
    const searchedText = document.getElementById('searched-text').value;
    resultShowingArea.innerHTML = '';
    if (searchedText === '') {
        warningMessage.style.display = 'block';
    } else {
        getFood(searchedText);
        warningMessage.style.display = 'none';
    }
});
function getFood(mealId) {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
    fetch(mealUrl)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}
const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    if (meals != null) {
        meals.map(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'col-md-3';
            const mealInfo = `
                    <div>
                    <img src="${meal.strMealThumb}">
                    <h4 >${meal.strMeal}</h4>
                    <button  onclick="displayMealDetails('${meal.idMeal}')">Details</button>
                    </div>
                `;
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        });
    } else warningMessage.style.display = 'block';
};
const displayMealDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderMealInfo(data.meals[0]);
        });
};
const renderMealInfo = searchedMeal => {
    const mealDetailsDiv = document.getElementById('meal-details-area');
    mealDetailsDiv.innerHTML = `
    <img src="${searchedMeal.strMealThumb}" >
    <h1 class ="text-left">${searchedMeal.strMeal}</h1>
    <h4 class ="text-left">Ingredients</h4>
    <ul style = "list-style-type:none;">
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure1}, ${searchedMeal.strIngredient1}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure2}, ${searchedMeal.strIngredient2}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure3}, ${searchedMeal.strIngredient3}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure4}, ${searchedMeal.strIngredient4}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure5}, ${searchedMeal.strIngredient5}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure6}, ${searchedMeal.strIngredient6}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure7}, ${searchedMeal.strIngredient7}</li>
        <li><i class="icon-check icons"></i>${searchedMeal.strMeasure8}, ${searchedMeal.strIngredient8}</li>
    </ul>
`;
mealDetailsDiv.className = 'text-center';
// mealDetailsDiv.style.alignContent = 'left';
searchArea.style.display = 'none';

};