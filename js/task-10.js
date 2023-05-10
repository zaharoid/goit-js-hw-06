function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amount: document.querySelector('#controls > input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

// console.log(refs.amount);
// console.log(refs.create);
// console.log(refs.destroy);
// console.log(refs.boxes);






;

refs.create.addEventListener('click', onTakeValue)

refs.destroy.addEventListener('click', onClickDestroy)

function createBoxes (amount) {
  const blocks = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const block = document.createElement('div');
    block.style.width = `${size += 10}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = getRandomHexColor();
    blocks.push(block);
  }
  boxes.append(...blocks)
}

function onTakeValue () {
  const amount = refs.amount.value
  return createBoxes(amount);
  
}

function onClickDestroy () {
  boxes.innerHTML = '';
  refs.amount.value = ''
}