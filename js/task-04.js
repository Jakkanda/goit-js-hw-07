const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -=1;
    },
}
const counterValueEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');

btnDecrementEl.addEventListener('click', () => {
    counter.decrement();
    counterValueEl.textContent = counter.value;
 });
btnIncrementEl.addEventListener('click', () => {
    counter.increment();
    counterValueEl.textContent = counter.value;
});
