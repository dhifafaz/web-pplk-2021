const splash = document.querySelector('.launch-logo');
const login = document.querySelector('.login-page');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        login.classList.add('display')
    }, 4000);
})