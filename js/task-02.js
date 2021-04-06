const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const items = []
ingredients.forEach(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    items.push(item);
})

const list = document.querySelector('#ingredients');
list.append(...items);

