const inputRef = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');
const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.height = `${30 + 10 * i}px`;
    boxEl.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255,
    )}, ${getRandom(0, 255)})`;
    boxes.push(boxEl);
  }
  divBoxesEl.append(...boxes);
}

function onBtnCreateClick(event) {
  return createBoxes(inputRef.value);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

function onBtnDestroyClick(event) {
  destroyBoxes();
  inputRef.value = '';
}

btnCreateRef.addEventListener('click', onBtnCreateClick);
btnDestroyRef.addEventListener('click', onBtnDestroyClick);
