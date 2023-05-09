const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInput);


function onInput (event) {
    
refs.output.textContent = event.currentTarget.value;
if (refs.output.textContent === '') {
    refs.output.textContent = 'Anonymous'
}
 }


