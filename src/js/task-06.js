const input = document.querySelector('#validation-input')

input.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
    
    if (event.currentTarget.value.length > input.getAttribute('data-length')) {
        event.currentTarget.classList.add('invalid');
        return;
    }
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid')
}



