const range = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
function onRangeMove(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
range.addEventListener('input', onRangeMove);
