const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const AllIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const IngredientEl = document.createElement('li');
  IngredientEl.classList.add('item');
  IngredientEl.textContent = ingredient;

  return IngredientEl;
});

console.log(elements);
AllIngredients.append(...elements);

// вариант через парс строк
// const eachIngr = ingredients
//   .map((ingredient) => `<li class = "item">${ingredient}</li>`)
//   .join("");

// console.log(eachIngr);

// AllIngredients.innerHTML = eachIngr;