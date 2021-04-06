const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории`);

categoriesEl.forEach(category => {
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
});




