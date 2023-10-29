// console.log('Hola desde main.js')


//Capturamos evento click del botón y llamamos a una función
const botonSumar = document.querySelector('#botonSumar')
botonSumar.addEventListener('click',sumar)


//función sumar suma valores de los inputs y los muestra por consola
const botonRestar = document.querySelector('#botonRestar')
botonRestar.addEventListener('click',restar)

const botonMultiplicar = document.querySelector('#botonMultiplicar')

botonMultiplicar.addEventListener('click',multiplicar)

const botonDividir = document.querySelector('#botonDividir')
botonDividir.addEventListener('click',dividir)

function sumar(event){
    //Evito que refresque la página
    event.preventDefault()

    //Capturo el elemento input
    const input1 = document.querySelector('#num1')
    //Capturo su valor
    const valorInput1 = input1.value 
    const valorInput1Num = parseInt(valorInput1)
    //Capturo el elemento input
    console.log(valorInput1)
    //Capturo su valor
    const input2 = document.querySelector('#num2')
    const valorInput2 = input2.value 
    const valorInput2Num = parseInt(valorInput2)
    //Capturo el elemento input
    console.log(valorInput2)
    
    //Capturar el botón
   

    console.log('valor input1 : ', valorInput1)
    console.log('valor input2 : ', valorInput2)
    const resultado = valorInput1Num + valorInput2Num
    console.log(resultado)
    document.querySelector("#resultadoFinal").value=resultado
}



function restar(event){
    event.preventDefault()

    const input1 = document.querySelector('#num1')
    const valorInput1 = input1.value
    const valorInput1Num = parseInt(valorInput1)
    console.log(valorInput1)

    const input2 = document.querySelector('#num2')
    const valorInput2 = input2.value
    const valorInput2Num = parseInt(valorInput2)
    console.log(valorInput2)
    const resultado = valorInput1Num - valorInput2Num

    console.log(resultado)
    document.querySelector("#resultadoFinal").value=resultado

}



function multiplicar(event){
    event.preventDefault()

    const input1 = document.querySelector('#num1')
    const valorInput1 = input1.value
    const valorInput1Num = parseInt(valorInput1)
    console.log(valorInput1)

    const input2 = document.querySelector('#num2')
    const valorInput2 = input2.value
    const valorInput2Num = parseInt(valorInput2)
    console.log(valorInput2)
    const resultado = valorInput1Num * valorInput2Num

    console.log(resultado)
    document.querySelector("#resultadoFinal").value=resultado

}

function multiplicar(event){
    event.preventDefault()

    const input1 = document.querySelector('#num1')
    const valorInput1 = input1.value
    const valorInput1Num = parseInt(valorInput1)
    console.log(valorInput1)

    const input2 = document.querySelector('#num2')
    const valorInput2 = input2.value
    const valorInput2Num = parseInt(valorInput2)
    console.log(valorInput2)
    const resultado = valorInput1Num * valorInput2Num

    console.log(resultado)

    document.querySelector("#resultadoFinal").value=resultado

}
function dividir(event){
    event.preventDefault()

    const input1 = document.querySelector('#num1')
    const valorInput1 = input1.value
    const valorInput1Num = parseFloat(valorInput1)
    console.log(valorInput1)

    const input2 = document.querySelector('#num2')
    const valorInput2 = input2.value
    const valorInput2Num = parseInt(valorInput2)
    console.log(valorInput2)
    const resultado = valorInput1Num / valorInput2Num

    console.log(resultado)
    const result = document.querySelector('#resultadoFinal')


document.querySelector("#resultadoFinal").value=resultado

}



