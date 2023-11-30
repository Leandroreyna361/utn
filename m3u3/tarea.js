// Ejercicio 1 
function transporte(metros) {
    let medio;
    if (metros >= 0 && metros <= 1000){ medio = "Recomiendo ir a pie"}
    else if (metros > 1001 && metros <= 10000){ medio = "Recomiendo ir en bicicleta"}
    else if (metros > 10001 && metros <= 30000){ medio = "Recomiendo ir en colectivo"}
    else if (metros > 30001 && metros <= 100000){ medio = "Recomiendo ir en auto"}
    else if (metros > 100000){ medio = "Recomiendo ir en avion"}
    else {medio = "Cantidad de metros invalido"}
    return medio;
}
const metros= 60000
const mediorecomendado = transporte(metros);
console.log(mediorecomendado);
// Utilizo la extencion Quokka para imprimir en consola.