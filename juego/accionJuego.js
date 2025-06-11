let numeroSecreto= Math.floor(Math.random()*100)+1;
let tiempoRestante= 60;
let intentos=0;
let temporizador;

function iniciarTemporizador(){
    tiempo = setInterval(()=>{
        tiempoRestante -=1;
        document.getElementById("temporizador").innerText=tiempoRestante;
        if(tiempoRestante <=0){
            clearInterval(tiempo);
            document.getElementById("resultado").innerText="Se acabó el tiempo";
            document.getElementById("reiniciarBtn").style.display="block";
        }
    }, 1000);
}
function adivinar(){
    let intento= parseInt(document.getElementById("adivinaInput").value);
    intentos+=1;
    let resultado="";
    if(isNaN(intento)){
        resultado="Primero introduce un número!"
    }else if (intento<numeroSecreto){
        resultado="El número es mayor";
    }else if(intento>numeroSecreto){
        resultado="El número es menor";
    }else{
        resultado="¡Felicidades! Adivinaste el número secreto en " +intentos+ " intentos";
        clearInterval(tiempo);
        document.getElementById("reiniciarBtn").style.display="block";
    }
    document.getElementById("resultado").innerText=resultado;
    document.getElementById("adivinaInput").value="";
}
function reiniciar(){
    numeroSecreto= Math.floor(Math.random()*100)+1;
    intentos=0;
    tiempoRestante=60;
    document.getElementById("adivinaInput").value="";
    document.getElementById("resultado").innerText="";
    document.getElementById("temporizador").innerText=tiempoRestante;
    document.getElementById("reiniciarBtn").style.display="none";
    iniciarTemporizador();
}

window.onload=iniciarTemporizador;

document.getElementById("adivinaInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") { //13 codigo para la tecla enter pero solo con keyCode/
        adivinar();
    }
});
