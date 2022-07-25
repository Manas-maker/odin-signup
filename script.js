var form = document.querySelector('form');
form.addEventListener('submit', e => {
    var pass1 = document.querySelector('#pass');
    var pass2 = document.querySelector('#confirm-pass');
    if (pass1.value != pass2.value) {
        e.preventDefault();
        pass1.classList.add('incorrect');
        pass2.classList.add('incorrect');
    }
})