const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
    if (event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.remove('invalid')
    }
    const length = parseInt(input.getAttribute('data-length'))
    if (event.currentTarget.value.length === length) {
        event.currentTarget.classList.add('valid')
        return;
    
    }
    event.currentTarget.classList.add('invalid')
}



