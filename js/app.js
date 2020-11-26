const slides = document.querySelector('.contenedor_publicitario').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator=document.querySelector('.indicator');
let index = 0;

//barra_menu

const barraMenu =  document.querySelector('.barra_menu');
const item_Menu =  document.querySelectorAll('.item_menu');

item_Menu[0].addEventListener('mouseenter',function(){
    borrado();
});

item_Menu[1].addEventListener('mouseenter',function(){
    borrado();
});

item_Menu[2].addEventListener('mouseenter',function(){
    borrado();
});

item_Menu[0].addEventListener('click',function(){
    borrado();
});

item_Menu[1].addEventListener('click',function(){
    borrado();
});

item_Menu[2].addEventListener('click',function(){
    borrado();
});





function borrado(){
    for (let i = 0; i < barraMenu.children.length; i++) {
        barraMenu.children[i].classList.remove('active');
    };

    barraMenu.children[index].classList.add('active');

};

//Destello son lista de galeria
const indiceGaleria = document.querySelectorAll('.item_galeria');
const opGaleria = document.querySelector('.CG');
const articuloGaleria = document.querySelectorAll('.item_galeFondo')
const regreso = document.querySelectorAll('.regreso');




indiceGaleria[0].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[0].classList.add('active')

});
regreso[0].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[0].classList.remove('active')
});



indiceGaleria[1].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[1].classList.add('active')
});
regreso[1].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[1].classList.remove('active')
});


indiceGaleria[2].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[2].classList.add('active')
});
regreso[2].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[2].classList.remove('active')
});


indiceGaleria[3].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[3].classList.add('active')
});
regreso[3].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[3].classList.remove('active')
});


indiceGaleria[4].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[4].classList.add('active')
});
regreso[4].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[4].classList.remove('active')
});


indiceGaleria[5].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[5].classList.add('active')
});
regreso[5].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[5].classList.remove('active')
});


indiceGaleria[6].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[6].classList.add('active')
});
regreso[6].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[6].classList.remove('active')
});


indiceGaleria[7].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[7].classList.add('active')
});
regreso[7].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[7].classList.remove('active')
});


indiceGaleria[8].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[8].classList.add('active')
});
regreso[8].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[8].classList.remove('active')
});


indiceGaleria[9].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[9].classList.add('active')
});
regreso[9].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[9].classList.remove('active')
});


indiceGaleria[11].addEventListener('click',function(){
    opGaleria.classList.add('active');
    articuloGaleria[11].classList.add('active')
});
regreso[11].addEventListener('click', function () {
    opGaleria.classList.remove('active')
    articuloGaleria[11].classList.remove('active')
});




let vasco = document.querySelector('.dentro');

prev.addEventListener('click',function(){
    prevSlide();
    updateCircleindicator();
    resetTimer();
    hola();
})

next.addEventListener('click',function(){
    nextSlide();
    updateCircleindicator();
    resetTimer();
})

// creacion de indicadores 

function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement('div');
            div.innerHTML=i+1;
            div.setAttribute('onclick','indicateSlide(this)')
            div.id=i;
            if (i==0) {
            div.className='active';
            }
            indicator.appendChild(div);
        
    }
}
circleIndicator();

    function indicateSlide(e) {
        index=e.id;
        changeSlide();
        updateCircleindicator();
        resetTimer();
    }

        function updateCircleindicator(){
            for (let i = 0; i < indicator.children.length; i++) {
                indicator.children[i].classList.remove('active');
            }

            indicator.children[index].classList.add('active')
        }

function prevSlide() {
    if (index==0) {
        index=slides.length-1
    } else {
        index--
    }
    changeSlide();
}

function nextSlide() {
    if (index==slides.length-1) {
        index=0;
    } else {
        index++
    }
    
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        
    }

        slides[index].classList.add('active');
}

function resetTimer(){

    clearInterval(timer);
    timer=setInterval(autoPlay,7000);

}

function autoPlay() {
    nextSlide();
    updateCircleindicator();
    
}

let timer=setInterval(autoPlay,7000);


function hola(){
    vasco.classList.remove('active');
    vasco.classList.add('active');
}



var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'web.json'
})
