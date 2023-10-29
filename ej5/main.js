//creamos variable botonjugador1 y que al clickar haga una funcion
const boton1 = document.querySelector('#botonJugador1')
boton1.addEventListener('click',movimientoJugador1)

//creamos variable botonjugador1 y que al clickar haga una funcion
const boton2 = document.querySelector('#botonJugador2')
boton2.addEventListener('click',movimientoJugador2)


//ponemos numeros que iran variando a los dos jugadores
let numeroJugador1 = 1 
let numeroJugador2 = 1
//ponemos las casillas para seleccionarlas
casillaJug1= `#casillas1 #c${numeroJugador1}`
casillaJug2= `#casillas2 #c${numeroJugador2}`


//mostrmos
console.log(numeroJugador1)
//el numero de los jugadores se tiene que incrementar asi que hacemos una funcion que lo haga
function generaRandom1(){
//llamamos a un numero aleatorio de 1 a 6 que son los movimientos de casillas maximos que puede hacer el jugador
    let numeroRandom1 = Math.floor((Math.random()*6))+1
//lo sumamos con el numero general del jugador 1 
    numeroJugador1 = numeroJugador1+numeroRandom1
//lo mostramos a ver si funciona 
    console.log(numeroJugador1)
}
console.log(numeroJugador1)
//el numero de los jugadores se tiene que incrementar asi que hacemos una funcion que lo haga
function generaRandom2(){
//llamamos a un numero aleatorio de 1 a 6 que son los movimientos de casillas maximos que puede hacer el jugador
    let numeroRandom2 = Math.floor((Math.random()*6))+1
//lo sumamos con el numero general del jugador 1 
    numeroJugador2 = numeroJugador2+numeroRandom2
//lo mostramos a ver si funciona 
    console.log(numeroJugador2)
}

function movimientoJugador1(){

    // esto lo usaremos para hacer una diferencia y que el jugador al pasarse de la casilla 20 vuelva las casillas que se haya sobrepasado
    let vueltaJugador1 = 1
    
    
    //quitamos la ficha de donde esta actualmente
    document.querySelector(casillaJug1).innerHTML=''
//llamamos a la funcion para que genere numero despues de borrar el resultado
     generaRandom1()

//y despues pone la casilla con la ficha del jugador
    if (numeroJugador1<20){
        casillaJug1= `#casillas1 #c${numeroJugador1}`
        document.querySelector(casillaJug1).innerHTML = `<div class="ficha jugador1"></div>`
    }
//hacemos un if para comparar si estan en la misma posicion los dos jugadores
if(numeroJugador1==numeroJugador2){
    //ponemos valor actual jugador 2
    casillaJug2= `#casillas2 #c${numeroJugador2}`
    //lo vaciamos
    document.querySelector(casillaJug2).innerHTML=''
    //le damos otro valor para que este en la casilla 1 
    numeroJugador2 = 1
    // le volvemos a dar el valor 
    casillaJug2= `#casillas2 #c${numeroJugador2}`
    //y despues lo ponemos en el div con el innerhtml
    document.querySelector(casillaJug2).innerHTML = `<div class="ficha jugador2"></div>`
}
    //si es mayor que 20...
    if (numeroJugador1>20){
//hacemos tal cual que tiene que dar si o si el numero sin o se queda i gual o avanza un poco
        vueltaJugador1 = numeroJugador1 - 20
        numeroJugador1 = 20 - vueltaJugador1
        document.querySelector(casillaJug1).innerHTML= `<div class="ficha jugador1"></div>`

    }
// si es 20 saldra una alerta de que hemos ganado
    if (numeroJugador1==20){
        alert('¡Enhorabuena! ¡Jugador NUMERO 1 HAS GANADO!')
    }

}

function movimientoJugador2(){

    // esto lo usaremos para hacer una diferencia y que el jugador al pasarse de la casilla 20 vuelva las casillas que se haya sobrepasado
    let vueltaJugador2 = 1
    
    
    //quitamos la ficha de donde esta actualmente
    document.querySelector(casillaJug2).innerHTML=''
//llamamos a la funcion para que genere numero despues de borrar el resultado
     generaRandom2()

//y despues pone la casilla con la ficha del jugador
     if (numeroJugador2<20){
        casillaJug2= `#casillas2 #c${numeroJugador2}`
        document.querySelector(casillaJug2).innerHTML = `<div class="ficha jugador2"></div>`
     }
//hacemos un if para comparar si estan en la misma posicion los dos jugadores
if(numeroJugador2==numeroJugador1){
    //pillamos valor casilla jug 1
    casillaJug1= `#casillas1 #c${numeroJugador1}`
    //poemos casilla jugador a vacio
    document.querySelector(casillaJug1).innerHTML=''
    //ponemos para que vuelva a la casilla 1
    numeroJugador1 = 1
    casillaJug1= `#casillas1 #c${numeroJugador1}`
    document.querySelector(casillaJug1).innerHTML = `<div class="ficha jugador1"></div>`
}
    
    if (numeroJugador2>20){
//hacemos tal cual que tiene que dar si o si el numero sin o se queda i gual o avanza un poco
        vueltaJugador2 = numeroJugador2 - 20
        numeroJugador2 = 20 - vueltaJugador2
        document.querySelector(casillaJug2).innerHTML= `<div class="ficha jugador2"></div>`

    }
// si es 20 saldra una alerta de que hemos ganado
    if (numeroJugador2==20){
        alert('¡Enhorabuena! ¡Jugador NUMERO 2 HAS GANADO!')
    }

}
    


