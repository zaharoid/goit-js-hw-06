function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector('button'),
  span: document.querySelector('.color')
}
refs.button.addEventListener('click', onButtonChangeColor)

function onButtonChangeColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor()
}

