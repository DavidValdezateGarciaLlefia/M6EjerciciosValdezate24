const btnCrear = document.querySelector("#boton")
btnCrear.addEventListener("click",crear)

function crear(event){

    event.preventDefault()

const inputNombre = document.querySelector("#nombre")
console.log(inputNombre)
const valorInputNombre = inputNombre.value
console.log(valorInputNombre)
const inputPrimerApellido = document.querySelector("#primerApellido")
const valorPrimerApellido = inputPrimerApellido.value 

const inputSegundoApellido = document.querySelector("#segundoApellido")
const valorSegundoApellido = inputSegundoApellido.value 

const inputDni = document.querySelector("#dni")
const valorInputDni = inputDni.value

const inputImagen = document.querySelector("#imagen")
const valorInputImagen = inputImagen.value

const nombreApellidos=' '+valorInputNombre +' '+valorPrimerApellido+ ' '+ valorSegundoApellido
document.querySelector("#nombreTotal").innerHTML=nombreApellidos
document.querySelector("#numeroDni").innerHTML=valorInputDni
document.querySelector("img").setAttribute("src", valorInputImagen)


}