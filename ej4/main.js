
//capturamos evento click delboton para ponerselo a los numeros random y llamamos a una funcion 
const botonNumeros = document.querySelector('#botonNumero')
botonNumeros.addEventListener('click',numeros)

//capturamos el evento click del boton para convertir el textarea en mayuscula
const botonMayusculas = document.querySelector('#botonMayuscula')
botonMayusculas.addEventListener('click',mayusculas)
//capturamos el evento click del boton para convertir el textarea en minuscula
const botonMinusculas = document.querySelector('#botonMinuscula')
botonMinusculas.addEventListener('click',minusculas)

//capturamos el evento click del boton para buscar las coincidencias
const botonBuscador = document.querySelector('#botonBuscar')
botonBuscador.addEventListener('click',buscar)

//capturamos el evento click del boton para buscar el nombre
const botonNombre = document.querySelector('#botonNombre')
botonNombre.addEventListener('click',buscarNombre)
//capturamos el evento click del boton para buscar la fecha
const botonFecha = document.querySelector('#botonFecha')
botonFecha.addEventListener('click',fecha)
//capturamos el evento click del boton para generar la contraseña
const botonContrasenya = document.querySelector('#botonContrasenya')
botonContrasenya.addEventListener('click',contrasenya)
//capturamos el evento click del boton para generar el emoticono
const botonEmoticono = document.querySelector('#botonEmoticono')
botonEmoticono.addEventListener('click',emoticono)
function numeros(event){
    //para que no nos desaparezca al clickar el boton
    event.preventDefault()

    //creamos una variable para el numero minimo y a la vez lo pillamos del input del html con un documentquery selector y su id
    const numero1 = document.querySelector("#num1")
    //capturo el valor del input
    const valorNumero1 = numero1.value
    const valorInputNumero1 = parseInt(valorNumero1)
    //lo mostramos por consola para ver si funciona
    //console.log(valorInputNumero1)
    //creamos una variable para el numero minimo y a la vez lo pillamos del input del html con un documentquery selector y su id
    const numero2 = document.querySelector("#num2")
    //capturo el valor del input
    const valorNumero2 = numero2.value
    const valorInputNumero2 = parseInt(valorNumero2)
    //lo mostramos por consola para ver si funciona
    //console.log(valorInputNumero2)

    //Cogemos los dos numeros y con un math.random , multimplicamos por el numero mas grande y le restamos -1 y despues le sumas el valor del numero uno para que lo comparen y de un numero random
   let numeroRandom = Math.floor(Math.random()*(valorInputNumero2-valorInputNumero1+1))+valorInputNumero1
   //console log para ver si funciona
   //console.log(numeroRandom)
   //pillamos el div con querySelector y con inner html le ponemos el numeroRandom
   document.querySelector("#numeroAleatorio").innerHTML=numeroRandom

}
//creamos la funcion para el boton mayusculas
function mayusculas(event){
//para que no se quede en blanco al hacer la funcion
    event.preventDefault()

    //pillamos el valor del text area que es el texto que vamos a transformar
const textoMayusculas = document.querySelector('#texto')
//pillamos el valor del text area y le sacamos el valor
const valorTextoMayusculas = textoMayusculas.value
//mostramos por consola a ver si lo pilla bien
//console.log(valorTextoMayusculas)
//pasamos el texto de minusculas a mayusculas pillando una nueva variable y que el vlaor sea la anterior variable pero en minusculas
const valorTextoMayusculasNuevo = valorTextoMayusculas.toUpperCase()
//lo ponemos en el div donde va a ir el texto a minusculas y mayusculas con el queryselector lo pillamos y innerHTML lo metemos y que se muestre
document.querySelector('#textoFinal').innerHTML=valorTextoMayusculasNuevo
 //hacemos un console log para ver cuantas palabras tiene el texto para ver si funciona bien
    //console.log('Numero de palabras del texto',valorTextoMayusculasNuevo.split(" ").length)
    //pillamos solo el strong de el texto contiene X palabras 
    document.querySelector('#numeroPalabras').
    //y le metemos al html el valor que sera el numero de palabras del texto
    innerHTML=valorTextoMayusculasNuevo.split(" ").length
    //creamos una variable que esta contendra todos los matches del texto que pongamos pero el match sera lo que pongamos en el documento
//cogemos las 10 primeras palabras con el substring
let textoResumen = valorTextoMayusculasNuevo.substring(0,10)
//le añadimos como extra los puntos suspensivos
textoResumen += "..."
//pillamos el div del resumen y lo ponemos con un innerHTML
document.querySelector('#resumen').innerHTML= textoResumen
    
}

function minusculas(event){
    //para que no se quede en blanco al hacer la funcion
        event.preventDefault()
    
        //pillamos el valor del text area que es el texto que vamos a transformar
    const textoMinusculas = document.querySelector('#texto')
    //pillamos el valor del text area y le sacamos el valor
    const valorTextoMinusculas = textoMinusculas.value
    //mostramos por consola a ver si lo pilla bien
    //console.log(valorTextoMinusculas)
    //pasamos el texto de mayusculas a minusculas pillando una nueva variable y que el vlaor sea la anterior variable pero en minusculas
    const valorTextoMinusculasNuevo = valorTextoMinusculas.toLowerCase()
    //lo ponemos en el div donde va a ir el texto a mayusculas y minusculas con el queryselector lo pillamos y innerHTML lo metemos y que se muestre
    document.querySelector('#textoFinal').innerHTML=valorTextoMinusculasNuevo
    //hacemos un console log para ver cuantas palabras tiene el texto para ver si funciona bien
    //console.log('Numero de palabras del texto',valorTextoMinusculasNuevo.split(" ").length)
    //pillamos solo el strong de el texto contiene X palabras 
    document.querySelector('#numeroPalabras').
    //y le metemos al html el valor que sera el numero de palabras del texto
    innerHTML=valorTextoMinusculasNuevo.split(" ").length
//cogemos las 10 primeras palabras con el substring
    let textoResumen = valorTextoMinusculasNuevo.substring(0,10)
    //le añadimos como extra los puntos suspensivos
    textoResumen += "..."
//pillamos el div del resumen y lo ponemos con un innerHTML
    document.querySelector('#resumen').innerHTML= textoResumen

    
    }

//creamos la funcion para buscar coincidencias
function buscar(event){
    event.preventDefault()

//pillamos valor del textarea

    const textoFinal = document.querySelector('#texto')
    const valorTextoFinal = textoFinal.value
    console.log(valorTextoFinal)
//pillamos valor del texto buscador (el de la lupa)
    const textoBuscador = document.querySelector('#buscador')
    const valorTextoBuscador = textoBuscador.value
    console.log(valorTextoBuscador)
//
    console.log('Numero de palabras del texto',valorTextoFinal.split(`${valorTextoBuscador}`).length-1)

    
    }


//creamos la funcion que al buscar el boton de convertir nombre
    function buscarNombre(event){
        event.preventDefault()
//pillamos el input del nombre de convertir nombre
        nombre = document.querySelector('#nombre')
//pillamos vlaor
        nombreValor = nombre.value
//quitamos espacios delante y atras y asi de paso no saldran guiones y encima lo ponemos en mayusculas
        nombreValor = nombreValor.trim().toUpperCase()
//mostrmaos en consola a ver si lo pilla
        console.log(nombreValor)
//remplazamos espacios con guiones
        nuevoTexto = nombreValor.replaceAll(" ", "-")
//inner html para meterle el texto ya remplazado
        document.querySelector('#nombreFinal').innerHTML = nuevoTexto
    }
    function fecha(event){
// pillamos el fvalor del input fecha
     const fecha = document.querySelector('#fecha')
// pillamos el valor 
     fechaValor = fecha.value
     // mostramos en consola por si acaso
     console.log(fechaValor)
     //cambiamos todas las / con -
     nuevaFecha = fechaValor.replaceAll("/", "-")
     //pillamos el strong para meter el valor con un innerhtml que sera el valor de la nuevaFecha
    document.querySelector('#fechaFinal').innerHTML = nuevaFecha
    
    }

//creamos la funcion para generar la contraseña al pulsar el boton

    function contrasenya(event){
        
        //hacemos un array con todas las letras minusculas y mayusculas
        const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        //creamos una variable vacia string para guardar los valores
        let randomString = "";
        //creamos un bucle que haga 10 iteraciones
        for(let i=0; i<=9;i++){
            //ponemos que cada vez genere un numero random y la longitud del random sera lo largo que sea el array de letras
            let generadorLetras = Math.floor(Math.random() * letras.length);
            //console log para comprobar si se generan bien los numeros
            console.log(generadorLetras)
            //con un += le vamos poniendo valores a la variable randomString para que tenga una contrasenya aleatoria de 10 letras
            randomString += letras[generadorLetras]
            
        }
        //comprobamos que la variable generadorLetras se ha hecho bien
            console.log(randomString)
        //seleccionamos el input contrasenya y le ponemos de valor el randomString que es la contraseña
          document.querySelector('#contrasenya').value = randomString
    }

//creamos la funcion para generar emoticono random al pulsar el boton

    function emoticono(event){

        //hacemos un array de emoticonos
        const emojis = [
      
            "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤠", "🤡", "🥳", "😎", "😴", "🥱", "😵", "🤯",
            "😭", "😢", "😥", "😰", "😅", "😓", "😪", "😭", "😣", "😤", "😡", "😠", "🤬", "😮", "😯", "😰", "😱", "😳", "😵", "🤯", "🤠", "🤡", "🥳", "😎", "😴", "🥱", "😵", "🤯",
            "🤐", "😷", "🤒", "🤕", "🥵", "🥶", "😴", "🥱", "😵", "🤯",
            "🥵", "🥶", "😴", "🥱", "😵", "🤯",
            "😵", "🤯",
            "🤠", "🤡", "🥳", "😎", "😴", "🥱", "😵", "🤯"
        ]
    //hacemos 2 cosas, primero hacemos un numero random que este dentro del valor del array emojis de 0 al final del array, y despues hacemos que otra variable coja el array emojis y su valor de la posicion del array sea la que generemos con el numero random 
        let generadorNumeroEmoji = Math.floor(Math.random() * emojis.length);
        let generadorEmoji = emojis[generadorNumeroEmoji]
        // mostramos por consola
        console.log(generadorEmoji)
        //ponemos la informacion en el div del html
        document.querySelector('#emoji').innerHTML = generadorEmoji
    }
  