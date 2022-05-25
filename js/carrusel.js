const carrusel = document.querySelector("#carrusel--lista");
let carrusel__elemento = document.querySelectorAll(".carrusel__elemento");
let carrusel__elementoUltimo = carrusel__elemento[carrusel__elemento.length - 1];

const btnSiguiente = document.querySelector("#btn--siguiente");
const btnAnterior = document.querySelector("#btn--anterior");

carrusel.insertAdjacentElement('afterbegin', carrusel__elementoUltimo);

function next_Item(){
    let carrusel__elementoPrimero = document.querySelectorAll(".carrusel__elemento")[0];
    carrusel.style.marginLeft = "-200%";
    carrusel.style.transition = "all 0.5s";
    setTimeout(function (){
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement('beforeend', carrusel__elementoPrimero);
        carrusel.style.marginLeft = "-100%";
    }, 500);
}

function prev_Item(){
    let carrusel__elemento = document.querySelectorAll(".carrusel__elemento");
    let carrusel__elementoUltimo = carrusel__elemento[carrusel__elemento.length - 1];
    carrusel.style.marginLeft = "0";
    carrusel.style.transition = "all 0.5s";
    setTimeout(function (){
        carrusel.style.transition = "none";
        carrusel.insertAdjacentElement('afterbegin', carrusel__elementoUltimo);
        carrusel.style.marginLeft = "-100%";
    }, 500);
}

btnSiguiente.addEventListener('click', function(){
    next_Item();
});

btnAnterior.addEventListener('click', function(){
    prev_Item();
});

setInterval(function(){
    next_Item();
}, 10000);
