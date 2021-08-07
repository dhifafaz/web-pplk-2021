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

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".head-bar").addClass("scrolled");
    }
    else {
        $(".head-bar").removeClass("scrolled");
    }

    // Tugas Scroll
    if (scroll > 100) {
        $(".tugas-search").addClass("scrolled");
    }
    else {
        $(".tugas-search").removeClass("scrolled");
    }
});