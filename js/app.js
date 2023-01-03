const form = document.getElementById("form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const searchResult = document.getElementById("search-result");
const appID = "d416adf6";
const appKeys = "2749c7e74f1c0c4a2d8bf4b8558449e9";

//form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //call function
  fetchAPI();
});
async function fetchAPI() {
  const url = `https://api.edamam.com/search?q=${searchInput.value}&app_id=${appID}&app_key=${appKeys}&to=20`;
  const response = await fetch(url);
  const data = await response.json();
  renderHtml(data.hits);
  console.log(data);
}

function renderHtml(results) {
  let render = "";
  results.map((result) => {
    render += `
     <div class="result-recipe">
            <img src="${result.recipe.image}" alt="" />
            <div class="result-description">
              <p class="title">${result.recipe.label}</p>
              <p class="calories">Calories: ${result.recipe.calories.toFixed(
                2
              )}</p>
              

                <a href="${
                  result.recipe.url
                }" target="_black"><button class="btn">Recipe</button></a>
              
            </div>
          </div>
    `;
  });
  searchResult.innerHTML = render;
}
