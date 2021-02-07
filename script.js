
const searchBtn = document.getElementById('btn-search');
const detailsShowingArea = document.getElementById('meal-container');
const message = document.getElementById('invalid-text');

// Event listener for search button to get the meal name
searchBtn.addEventListener("click",()=>{
    const inputMeal = document.getElementById('input-meal').value;
    detailsShowingArea.innerHTML = "";
    if(message === ''){
        message.style.display = 'block';

    }else{
        message.style.display = 'none';
        //i have to show the searched result here
        //have to set a function that search the meal
        searchFood(inputMeal);

    }

})
function searchFood(foodName){

}