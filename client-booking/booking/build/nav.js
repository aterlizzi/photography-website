const burgerBtn = document.getElementById('burger');
const container = document.getElementById('mnav-container');
const oneArrow = document.querySelector('.arrowOne');
const twoArrow = document.querySelector('.arrowTwo');
const menuOne = document.getElementById('menu-one');
const menuTwo = document.getElementById('menu-two');
const subLinks = document.querySelectorAll('.sub-link');
const sublinksTwo = document.querySelectorAll('.sub-link-two');
const interval = 1000;
let promise = Promise.resolve();

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    container.classList.toggle('mnav-active');
})

oneArrow.addEventListener('click', () => {
    oneArrow.classList.toggle('fa-angle-right-active');
    menuOne.classList.toggle('menu-one-active');
    subLinks.forEach((e, interval) => {
        promise = promise.then(function() {
            e.classList.toggle('sub-link-active');
            return new Promise(function(resolve){
                setTimeout(resolve, interval);
            });
        });
    }) 
})
twoArrow.addEventListener('click', () => {
    twoArrow.classList.toggle('fa-angle-right-active');
    menuTwo.classList.toggle('menu-two-active');
    sublinksTwo.forEach((e, interval) => {
        promise = promise.then(function() {
            e.classList.toggle('sub-link-active');
            return new Promise(function(resolve){
                setTimeout(resolve, interval);
            });
        });
    }) 
})

