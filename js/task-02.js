const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientEl = document.createElement('li');
IngredientEl.classList.add('item');
for (let i = 0; i < ingredients.length; i += 1) {
  IngredientEl.textContent = ingredients[i];
  console.log(IngredientEl.textContent);
}


