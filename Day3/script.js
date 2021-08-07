const button_open = document.getElementById('open');
const button_close = document.getElementById('close');
const circle = document.querySelector('.circle');
const nav = document.getElementById('navigator');
const container = document.querySelector('.content');

button_open.addEventListener('click',() => {
    circle.classList.add('with-nav');
    container.classList.add('with-nav');
    nav.classList.add('active');


})


button_close.addEventListener('click',() => {
    circle.classList.remove('with-nav');
    container.classList.remove('with-nav');
    nav.classList.remove('active');
})

