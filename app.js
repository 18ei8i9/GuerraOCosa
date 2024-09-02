
let fase = 0;
let carta = []
const numero=[1,2,3,4,5,6,7,8,9,10,11,12];
const palo = ["ORO", "COPA","ESPADA", "BASTO"];
const guerracosa = ["GUERRA", "COSA"];
const guerra = ["ESPADA", "BASTO"];
const cosa = ["ORO", "COPA"];
const par = [2,4,6,8,10,12];
const impar = [1,3,5,7,9,11];
const baja = [1,2,3,4,5,6];
const alta = [7,8,9,10,11,12];
let jugadores=[];
let jugadoresiniciales=[];
let turno=0;
let elecciones=[];
let ganadores=[];
let valorguia=""
let eleccion = new Audio("./audio/inicio.mp3");
let acierto = new Audio("./audio/acertado.mp3");
let ganaste = new Audio("./audio/ganaste.mp3");
let perdiste = new Audio("./audio/perdiste.mp3");
// para los mensajes del juego
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//titulo y carga de jugadores
function condicionesIniciales() {
    
    jugadoresiniciales=[];

    document.getElementById('nombre').style.display="block";
    document.getElementById('agregar').style.display="block";
    document.getElementById('terminar').style.display="none";
    document.getElementById('guerra').style.display="none";
    document.getElementById('cosa').style.display="none";
    document.getElementById('espada').style.display="none";
    document.getElementById('basto').style.display="none";
    document.getElementById('oro').style.display="none";
    document.getElementById('copa').style.display="none";
    document.getElementById('par').style.display="none";
    document.getElementById('impar').style.display="none";
    document.getElementById('alta').style.display="none";
    document.getElementById('baja').style.display="none";
    document.getElementById('1').style.display="none";
    document.getElementById('2').style.display="none";
    document.getElementById('3').style.display="none";
    document.getElementById('4').style.display="none";
    document.getElementById('5').style.display="none";
    document.getElementById('6').style.display="none";
    document.getElementById('7').style.display="none";
    document.getElementById('8').style.display="none";
    document.getElementById('9').style.display="none";
    document.getElementById('10').style.display="none";
    document.getElementById('11').style.display="none";
    document.getElementById('12').style.display="none";
    document.getElementById('continuar').style.display="none";
    document.getElementById('reiniciar').style.display="none";
    document.getElementById('jugar').style.display="none";
    
}

// funcion del boton para cargar los jugadores
function agregaJugador(){
    let nombre = document.getElementById("nombre").value;
    if(nombre !==""){
        jugadoresiniciales.push(nombre);
        document.getElementById('nombre').value = '';
        console.log(jugadoresiniciales);
        document.getElementById('terminar').style.display="block";
    }
}

//boton que termina la carga y carga la primer decision
function terminaCarga(){
    eleccion.loop=true;
    eleccion.play();
    perdiste.pause();
    perdiste.currentTime=0;
    ganaste.pause();
    ganaste.currentTime=0;
    
    document.getElementById('nombre').style.display="none";
    document.getElementById('agregar').style.display="none";
    document.getElementById('terminar').style.display="none";
    document.getElementById('guerra').style.display="block";
    document.getElementById('cosa').style.display="block";
    document.getElementById('reiniciar').style.display="none";
    document.getElementById('jugar').style.display="none";
    document.getElementById("h3").innerHTML=" ";
    document.getElementById('guerra').style.backgroundImage = `url(./img/GUERRA.png)`;
    document.getElementById('cosa').style.backgroundImage = `url(./img/COSA.png)`;
    jugadores=jugadoresiniciales;
    fase = 1;
    carta=elegirValores(palo,numero);
    console.log(carta);
    console.log(jugadores);
    
    asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`)

}



function elegirValor() {
    const indiceAleatorio = Math.floor(Math.random() * valores.length);
    const valorElegido = valores[indiceAleatorio];
    document.getElementById('resultado').textContent = `Valor elegido:
${valorElegido}`;
    console.log('Valor elegido:', valorElegido);
}

function elegirValores(array1, array2) {
    const indiceAleatorio1 = Math.floor(Math.random() * array1.length);
    const valorElegido1 = array1[indiceAleatorio1];

    const indiceAleatorio2 = Math.floor(Math.random() * array2.length);
    const valorElegido2 = array2[indiceAleatorio2];

    return [valorElegido1, valorElegido2];
}

function tienenValoresIguales(arr1, arr2) {
    return arr1.some(valor => arr2.includes(valor));
}

function buscaValor(array,valorBuscado){
    return array.includes(valorBuscado);
}

function continuar(){
    if(fase==2){
        eleccion.loop=true;
        eleccion.play();
        acierto.pause();
        acierto.currentTime=0;
        document.getElementById("h3").innerHTML=" ";
        document.getElementById('continuar').style.display="none";
        asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`);
        if(tienenValoresIguales(guerra, carta)){
            
        document.getElementById('espada').style.display="block";
        document.getElementById('basto').style.display="block";
        document.getElementById('espada').style.backgroundImage = `url(./img/ESPADA.png)`;
        document.getElementById('basto').style.backgroundImage = `url(./img/BASTO.png)`;}
        else if(tienenValoresIguales(cosa, carta)){
            
        document.getElementById('oro').style.display="block";
        document.getElementById('copa').style.display="block";
        document.getElementById('oro').style.backgroundImage = `url(./img/ORO.png)`;
        document.getElementById('copa').style.backgroundImage = `url(./img/COPA.png)`;}
    }else if(fase==3){
        eleccion.loop=true;
        eleccion.play();
        acierto.pause();
        acierto.currentTime=0;
        document.getElementById("h3").innerHTML=" ";
        document.getElementById('par').style.backgroundImage = `url(./img/${carta[0]}PAR.png)`;
        document.getElementById('impar').style.backgroundImage = `url(./img/${carta[0]}IMPAR.png)`;
        asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`);
        document.getElementById('continuar').style.display="none";
        document.getElementById('par').style.display="block";
        document.getElementById('impar').style.display="block";
        
    }else if(fase==4){
        eleccion.loop=true;
        eleccion.play();
        acierto.pause();
        acierto.currentTime=0;
        document.getElementById("h3").innerHTML=" ";
        document.getElementById('alta').style.backgroundImage = `url(./img/${carta[0]+valorguia}ALTA.png)`;
        document.getElementById('baja').style.backgroundImage = `url(./img/${carta[0]}${valorguia}BAJA.png)`;
        asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`);
        document.getElementById('continuar').style.display="none";
        document.getElementById('alta').style.display="block";
        document.getElementById('baja').style.display="block";
    }else if(fase==5){
        document.getElementById("h3").innerHTML=" ";
        eleccion.loop=true;
        eleccion.play();
        acierto.pause();
        acierto.currentTime=0;
        asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`);
        document.getElementById('continuar').style.display="none";
        if(tienenValoresIguales(carta, par) & tienenValoresIguales(carta, baja)){
            document.getElementById('2').style.display="block";
            document.getElementById('4').style.display="block";
            document.getElementById('6').style.display="block";
            document.getElementById('2').style.backgroundImage = `url(./img/${carta[0]}2.png)`;
            document.getElementById('4').style.backgroundImage = `url(./img/${carta[0]}4.png)`;
            document.getElementById('6').style.backgroundImage = `url(./img/${carta[0]}6.png)`;
            
            
        }else if(tienenValoresIguales(carta, par) & tienenValoresIguales(carta, alta)){
            document.getElementById('8').style.display="block";
            document.getElementById('10').style.display="block";
            document.getElementById('12').style.display="block";
            document.getElementById('8').style.backgroundImage = `url(./img/${carta[0]}8.png)`;
            document.getElementById('10').style.backgroundImage = `url(./img/${carta[0]}10.png)`;
            document.getElementById('12').style.backgroundImage = `url(./img/${carta[0]}12.png)`;

        }else if(tienenValoresIguales(carta, impar) & tienenValoresIguales(carta, baja)){
            document.getElementById('1').style.display="block";
            document.getElementById('3').style.display="block";
            document.getElementById('5').style.display="block";
            document.getElementById('1').style.backgroundImage = `url(./img/${carta[0]}1.png)`;
            document.getElementById('3').style.backgroundImage = `url(./img/${carta[0]}3.png)`;
            document.getElementById('5').style.backgroundImage = `url(./img/${carta[0]}5.png)`;


        }else{
            document.getElementById('7').style.display="block";
            document.getElementById('9').style.display="block";
            document.getElementById('11').style.display="block";
            document.getElementById('7').style.backgroundImage = `url(./img/${carta[0]}7.png)`;
            document.getElementById('9').style.backgroundImage = `url(./img/${carta[0]}9.png)`;
            document.getElementById('11').style.backgroundImage = `url(./img/${carta[0]}11.png)`;

        }
    }
}




function compararConArrayAnterior(arrayActual) {
    
    elecciones[turno] = tienenValoresIguales(carta, arrayActual);
    if(elecciones[turno]){
        ganadores.push(jugadores[turno]);
    }
    console.log(turno);
    console.log(elecciones);
    valorguia = tienenValoresIguales(par, arrayActual)?"PAR":"IMPAR" ;
    console.log(`./img/${carta[0]+valorguia}BAJA.png`);
    
    if(turno==jugadores.length-1){
        
        

        
            document.getElementById('guerra').style.display="none";
            document.getElementById('cosa').style.display="none";
            document.getElementById('par').style.display="none";
            document.getElementById('impar').style.display="none";
            document.getElementById('alta').style.display="none";
            document.getElementById('baja').style.display="none";
            document.getElementById("h3").innerHTML=" ";
        
            if(ganadores.length!=0){
                acierto.loop=true;
                eleccion.pause();
                acierto.play();
                eleccion.currentTime=0;

        
                for(i=0;i<ganadores.length;i++){

                    document.getElementById("h3").innerHTML +=  ganadores[i] + " / " ;
                }
                document.getElementById('continuar').style.display="block";
                asignarTextoElemento('p',`ADIVINARON Y PASAN DE RONDA`);
                jugadores=ganadores;
                turno=0;
                ganadores=[];
                elecciones=[];
                fase++;}
            else{
                for(i=0;i<carta.length;i++){

                    document.getElementById("h3").innerHTML +=  carta[i] + " " ;
                }
                perdiste.loop=true;
                perdiste.play();
                eleccion.pause();
                eleccion.currentTime=0;
                document.getElementById('reiniciar').style.display="block";
                asignarTextoElemento('p',`NO ADIVINO NADIE`);
                document.getElementById('jugar').style.display="block";
                jugadores=[];
                ganadores=[];
                turno=0;
                fase=1;
               
            }
        

        }
    else {
        console.log(turno);
        
        turno++;
        console.log(turno);
        console.log(ganadores);
        asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`);
    }
    
 }

function compararConValor (valorPalo){
    elecciones[turno] = fase==5 ? buscaValor(carta,parseInt(valorPalo)):buscaValor(carta,valorPalo);
    if(elecciones[turno]){
        ganadores.push(jugadores[turno]);
    }
    console.log(turno);
    console.log(elecciones);
    console.log(ganadores);
    if(turno==jugadores.length-1){
        document.getElementById('copa').style.display="none";
        document.getElementById('oro').style.display="none";
        document.getElementById('espada').style.display="none";
        document.getElementById('basto').style.display="none";
        document.getElementById('1').style.display="none";
        document.getElementById('2').style.display="none";
        document.getElementById('3').style.display="none";
        document.getElementById('4').style.display="none";
        document.getElementById('5').style.display="none";
        document.getElementById('6').style.display="none";
        document.getElementById('7').style.display="none";
        document.getElementById('8').style.display="none";
        document.getElementById('9').style.display="none";
        document.getElementById('10').style.display="none";
        document.getElementById('11').style.display="none";
        document.getElementById('12').style.display="none";
        document.getElementById("h3").innerHTML=" ";
        if(ganadores.length!=0){
            for(i=0;i<ganadores.length;i++){
               document.getElementById("h3").innerHTML +=  ganadores[i] + " / " ;
            }
            if(fase==5){
               ganaste.loop=true;
               ganaste.play();
               eleccion.pause();
               eleccion.currentTime=0;
               asignarTextoElemento('p',`DALE CAMPEÓN, DALE CAMPEÓN!!!`);
               document.getElementById('reiniciar').style.display="block";
               document.getElementById('jugar').style.display="block";
               jugadores=[];
               ganadores=[];
               turno=0;
               fase=1;
               }
            else{
                acierto.loop=true;
                eleccion.pause();
                acierto.play();
                eleccion.currentTime=0;
                document.getElementById('continuar').style.display="block";
                asignarTextoElemento('p',`ADIVINARON Y PASAN DE RONDA`);
                jugadores=ganadores;
                turno=0;
                ganadores=[];
                elecciones=[];
                fase++;
            }
        }
        else{

            for(i=0;i<carta.length;i++){

                document.getElementById("h3").innerHTML +=  carta[i]+ "  " ;
            }
            perdiste.loop=true;
            perdiste.play();
            eleccion.pause();
            eleccion.currentTime=0;
            document.getElementById('reiniciar').style.display="block";
            asignarTextoElemento('p',`NO ADIVINO NADIE`);
            document.getElementById('jugar').style.display="block";
            jugadores=[];
        }
    }
    else {
        console.log(turno);
        
        turno++;
        
        asignarTextoElemento('p',`jugador ${jugadores[turno]} elije una opcion`);
    }
}


condicionesIniciales();
