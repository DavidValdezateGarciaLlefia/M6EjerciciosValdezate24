

const partides = [
    {"avatar": "https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg",
     "nick": "Baki",
     "puntos": "100",
     "fecha": "02 10 2023"},

     {"avatar": "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg",
     "nick": "Gojo",
     "puntos": "999",
     "fecha": "01 12 2023"},

     {"avatar": "https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg",
     "nick": "Oliva",
     "puntos": "100",
     "fecha": "05 11 2023"}
]

const datosEjemploPartida = {
    avatar:'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',

    nick: 'MANUEL' ,

    puntos: 100 ,

    fecha:'21 MAYO 2023' 
    }
    


function pintaTabla(partides){



let tablaPartidas= `<h2 class="text-center text-light">Partidas</h2>
<div class="input-group mb-3">
    <input
        type="text"
        class="form-control"
        placeholder="Buscador"
        aria-label="Buscador"
        aria-describedby="button-addon2"
    />
    <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
    >
        <i class="bi bi-x-lg"></i>
    </button>
</div>
<table class="table table-dark">
    <theader>
        <tr>
            <td></td>
            <td>Nick <i class="bi bi-arrow-up-square"></i></td>
            <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
            <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
        </tr>
    </theader>
    <tbody>
    `
    
 partides.forEach(element =>{
    tablaPartidas+=
        `<tr>
            <td><img src="${element.avatar}" width="30px"/></td>
            <td>${element.nick}</td>
            <td>${element.puntos}</td>
            <td>${element.fecha}</td>
        </tr>
        `
    });
 
 
tablaPartidas+=
    `         
    </tbody>
    <tfoot></tfoot>
    </table>
    `

document.querySelector('#partidas').innerHTML = tablaPartidas

}

function pintaRanking(){

    let tablaRanking=` 
    <h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
        <theader>
            <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </theader>
        <tbody>
            <tr>
                <td class="fs-2">1</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">2</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">3</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>`
   document.querySelector('#ranking').innerHTML = tablaRanking
}

function insertaNuevaPartida(datosEjemploPartida){

    console.log('Guardando partida')
    partides.push(datosEjemploPartida)
    console.log(datosEjemploPartida)
    console.log(partides)
    

}

function pintaDatosPartida(partides){
    if(confirm('¿Quieres guardar la partida?')==true){
        insertaNuevaPartida(datosEjemploPartida)
        pintaTabla(partides)
        
    }else{
        pintaTabla(partides)
    }
}
    console.log(pintaRanking())
    console.log(pintaDatosPartida(partides))