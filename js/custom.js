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
});


// var clickedButtonJurusan = false;

// document.getElementsByClassName('button-jurusan').addEventListener("click", function() {
//     clickedButtonJurusan = true;
// }​);

// if (clickedButtonJurusan) {

// }
​
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
