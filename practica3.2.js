const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const imagen = document.getElementById('imagen');
// Todos los botones de la botonera
const boton1 = document.getElementById('listaBotones-boton1');
const boton2 = document.getElementById('listaBotones-boton2');
const boton3 = document.getElementById('listaBotones-boton3');
const boton4 = document.getElementById('listaBotones-boton4');
const boton5 = document.getElementById('listaBotones-boton5');
const boton6 = document.getElementById('listaBotones-boton6');

let imagenes = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];
let descripcion = ['1. Paisaje', '2. Paisaje', '3. Paisaje', '4. Paisaje', '5. Paisaje','6. Paisaje'];
let listaBotones = ['boton1', 'boton2', 'boton3', 'boton4', 'boton5', 'boton6']
let imagenActual = 0;
boton1.style.background = 'orange';

// Le pongo el timer
// setInterval(codigoEventos, 5000);

// Evento para el boton de retroceder.
anterior.addEventListener('click', (e)=>{
    if(imagenActual === 0){
        imagenActual = 5;
    }else{
        imagenActual--;
    }

    imagen.src = imagenes[imagenActual];
    cambiarColoresBotones();
})

// Evento para el boton de avanzar
siguiente.addEventListener('click', (e)=>{
    if(imagenActual === 5){
        imagenActual = 0;
    }else{
        imagenActual++;
    }

    imagen.src = imagenes[imagenActual];
    cambiarColoresBotones();
})

// Botonera
boton1.addEventListener('click', (e)=>{
    transparente();
    imagenActual = 0;
    imagen.src = imagenes[imagenActual];
    boton1.style.backgroundColor = 'orange';
})
boton2.addEventListener('click', (e)=>{
    transparente();
    imagenActual = 1;
    imagen.src = imagenes[imagenActual];
    boton2.style.backgroundColor = 'orange';
})
boton3.addEventListener('click', (e)=>{
    transparente();
    imagenActual = 2;
    imagen.src = imagenes[imagenActual];
    boton3.style.backgroundColor = 'orange';
})
boton4.addEventListener('click', (e)=>{
    transparente();
    imagenActual = 3;
    imagen.src = imagenes[imagenActual];
    boton4.style.backgroundColor = 'orange';
})
boton5.addEventListener('click', (e)=>{
    transparente();
    imagenActual = 4;
    imagen.src = imagenes[imagenActual];
    boton5.style.backgroundColor = 'orange';
})
boton6.addEventListener('click', (e)=>{
    transparente();
    imagenActual = 5;
    imagen.src = imagenes[imagenActual];
    boton6.style.backgroundColor = 'orange';
})

function transparente(){
    boton1.style.backgroundColor = 'transparent';
    boton2.style.backgroundColor = 'transparent';
    boton3.style.backgroundColor = 'transparent';
    boton4.style.backgroundColor = 'transparent';
    boton5.style.backgroundColor = 'transparent';
    boton6.style.backgroundColor = 'transparent';
}

function cambiarColoresBotones(){
    transparente();
    switch(imagenActual){
        case 0: boton1.style.backgroundColor = 'orange'; break;
        case 1: boton2.style.backgroundColor = 'orange'; break;
        case 2: boton3.style.backgroundColor = 'orange'; break;
        case 3: boton4.style.backgroundColor = 'orange'; break;
        case 4: boton5.style.backgroundColor = 'orange'; break;
        case 5: boton6.style.backgroundColor = 'orange'; break;
    }
}