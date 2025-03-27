var intentos = 0;
let random = 0;
function Adivinar()
{
    var num1 = parseInt(document.getElementById("IngresoNum").value);
    const mensaje = document.getElementById("Mensaje");

    console.log(num1);
    console.log(random);
    if(isNaN(num1) || random === 0)
    {
        mensaje.textContent = "Todavia no has generado un número o ingresado un número";
    }
    else if(!Verificar(num1)){
        mensaje.textContent = "El número debe ser mayor que 1 y menor que 100"
    }
    else if(random < num1)
    {
        mensaje.textContent = "El número es menor";
        intentos++;
    }
    else if (random > num1)
    {
        mensaje.textContent = "El número es mayor";+
        intentos++;
    }
    else
    {
        mensaje.textContent = "ADIVINASTE";
        intentos++;
    }
    document.getElementById("Intentos").textContent = "Intentos " + intentos;
}


function Random(){
    random = (parseInt)(Math.random() * 100 + 1);
    intentos = 0;
    document.getElementById("RandomHecho").textContent="Se generó un número nuevo correctamente";
    document.getElementById("Intentos").textContent = "Intentos: 0";
}

function Verificar(num1){
    const max = 100;
    const min = 1;
    var exito = true;
    if(num1 > max || num1 < min){
        exito = false;
    }
    return exito;
}