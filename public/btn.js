const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

let dark = document.querySelector('#dark');
let html = document.querySelector('html');

dark.addEventListener('click', function () {
    if (dark.checked) {
        html.classList.add('dark');

    } else {
        html.classList.remove('dark');
    }

})

let modal = document.querySelector('#modal-btn');
let showModal = document.querySelector('#showModal');
let closeBtn = document.querySelector('#close-btn');

showModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
})
closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
})


let modalIqbal = document.querySelector('#modal-btn-iqbal');
let showModalIqbal = document.querySelector('#showModalIqbal');
let closeBtnIqbal = document.querySelector('#close-btn-iqbal');

showModalIqbal.addEventListener('click', function () {
    modalIqbal.classList.remove('hidden');
})
closeBtnIqbal.addEventListener('click', function () {
    modalIqbal.classList.add('hidden');
})
