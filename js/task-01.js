const numberCategoris = document.querySelector('ul#categories');
console.log(`Number of categories:`, numberCategoris.children.length);
console.log(``);
const CategoryEl = document.querySelectorAll('h2');
for (let i = 0; i < CategoryEl.length; i += 1) {
  console.log(`Category:`, CategoryEl[i].textContent);
  console.log(`Elements:`, CategoryEl[i].nextElementSibling.children.length);
  console.log(``);
};