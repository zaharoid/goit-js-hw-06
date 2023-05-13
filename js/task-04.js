const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
};

refs.decrement.addEventListener("click", onDecrementClick);
refs.increment.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  refs.counterValue.textContent = parseInt(refs.counterValue.textContent) - 1;
}

function onIncrementClick() {
  refs.counterValue.textContent = parseInt(refs.counterValue.textContent) + 1;
}
