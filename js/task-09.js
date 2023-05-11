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
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
}

