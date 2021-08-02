const shows = document.querySelectorAll(".show");

shows.forEach((show) => {
    show.addEventListener('click',() => {
        shows.forEach((show) => {
            show.classList.remove('active');
        })
        show.classList.add('active');
    })
})




