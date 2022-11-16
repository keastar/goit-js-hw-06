const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const AllIngredients = document.querySelector('#ingredients');

const eachIngr = ingredients
  .map((ingredient) => `<li class = "item">${ingredient}</li>`)
  .join("");

console.log(eachIngr);

AllIngredients.innerHTML = eachIngr;

// const IngredientEl = document.createElement('li');
// IngredientEl.classList.add('item');
// for (let i = 0; i < ingredients.length; i += 1) {
//   IngredientEl.textContent = ingredients[i];
//   console.log(IngredientEl.textContent);
// }

// AllIngredients.append(IngredientEl);
// console.log(AllIngredients);
