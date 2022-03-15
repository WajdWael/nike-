// ==== MENU ====
// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)
//     if (toggleId && nav) {
//         toggle.addEventListener('click', () => {
//             toggle.addEventListener('click', () => {
//                 nav.classList.toggle('show');
//             })
//         })
//     }
// }
// showMenu('nav-toggle', 'nav__menu');


// ==== MENU TOGGLE ====
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('#mobile-menu');

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('is-active');
    navMenu.classList.toggle('show');
})


// ===== TALLES ======
const spann = document.querySelectorAll('.size__tallas');

function changeSize() {
    spann.forEach(size => size.classList.remove('active'))
    this.classList.add('active');
}
spann.forEach(size => size.addEventListener('click', changeSize));


// ===== CHANGE COLOR ======
const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker__img');

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);

    sneaker.forEach(s => s.classList.remove('shows'));
    sneakerColor.classList.add('shows')
}
colors.forEach(c => c.addEventListener('click', changeColor));


// pluse and menus
let btns = document.querySelectorAll('.btn');
let price = document.querySelector('.price__title');
let value = document.querySelector('.count');
let count = 1;
let d = `$`;
let p = 99.00;
btns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let styles = e.currentTarget.classList;
        if (styles.contains('mens') && count > 0) {
            count--;
        } else if (styles.contains('plus') && count <= 9) {
            count++;
        }
        value.textContent = count;
    })
})






/* ===========================================
START JAVASCRIPT 5 PROJECT 
============================================== */
// let count = 0;
// let value = document.querySelector('#value')
// let bttns = document.querySelectorAll('.bttn');

//loop
/****** WHAT DOES E MEAN AT FUNCTIONS ******/
// THE ANSWER : 
// "function(e)" is the event handling function 
// (on event, object is created) "e" is the object handler (object is made accessible)..
/*
let count = 0;
let value = document.querySelector('#value')
let bttns = document.querySelectorAll('.bttn');
*/
/*
bttns.forEach(function (item0) {
    item0.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        count > 0 ? value.style.color = "green" :
            count < 0 ? value.style.color = "red" : value.style.color = "#222";
        value.textContent = count;
    })
});
*/