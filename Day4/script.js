const btn = document.querySelector('.btn');
const search = document.querySelector('.input');

btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    btn.classList.toggle('active');
    search.focus();
})
