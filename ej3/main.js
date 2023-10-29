const btnCrear = document.querySelector("#boton")

btnCrear.addEventListener("click",pintaTabla)
const bd = [];

function crear(){



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
const valorApellidoTotal= valorPrimerApellido + " "+ valorSegundoApellido
const usuario= {valorInputNombre,valorApellidoTotal,valorInputDni,valorInputImagen}
bd.push(usuario);


}







function pintaTabla(event){
    event.preventDefault()
    crear()

    let tabla = ``
    
  bd.forEach(valor => {
    // console.log(element.nombre)
    tabla += `<tr><td>1</td><td><img width="30" src="${valor.valorInputImagen}"></td><td>${valor.valorInputNombre}</td><td>${valor.valorApellidoTotal}</td><td>${valor.valorInputDni}</td></tr>`
  });

  document.querySelector('#tablaUsuario').innerHTML = tabla
}