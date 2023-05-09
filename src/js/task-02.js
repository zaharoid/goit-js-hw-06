const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const itemRef = document.createElement('li')
  itemRef.textContent = ingredient
  itemRef.classList.add('list');
  return itemRef
})
const listRef = document.querySelector('#ingredients')

listRef.append(...items)
