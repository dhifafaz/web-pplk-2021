const splash = document.querySelector('.launch-logo');
const login = document.querySelector('.login-page');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        login.classList.add('display')
    }, 4000);
})

jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('ul a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});