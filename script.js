while (true) {
    //Pide numero
    let entrada = parseFloat(prompt("ingrese un numero:"));
    //verifica si se ingreso un numero
    if (!isNaN(entrada)) {
    // calculo
        let total = 1;
        for (let i = 1; i <= entrada; i++) {
            total *= i;
        }
    //añade parrado y contenido para mostrar el resultado
        let resultadoFactorial = document.createElement("p");
        resultadoFactorial.textContent = "El factorial del numero " + entra + " es: " + total;
    //salir del bucle si se ingreso un numero valido
        break;  
    } else {
    //mensaje de error
        alert("Por favor, ingrese un numero valido.");
       }
}