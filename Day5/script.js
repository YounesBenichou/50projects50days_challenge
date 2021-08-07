const percentage = document.querySelector(".percentage");
const image = document.querySelector(".image");

let loading = 0;
let blure = 30;
let int = setInterval(bluring,30);

function bluring(){
    loading++;
    percentage.innerHTML = `${loading}%`;

    if (loading > 99){
        clearInterval(int);
    }

    percentage.style.opacity = 1- loading / 100;
    blure = blure - 30/100;
    image.style.filter = 'blur('+blure+'px)';
}