var nombre = "Angel";
var nombre = "3";
console.log("Me llamo " + nombre);
//Union de tipos
var variosTipos = true;
variosTipos = 3;
var otraVariosTipos;
otraVariosTipos = false;
//Sin tipo y sin inicializar coge como tipo: any
var esVerdad;
esVerdad = 1;
esVerdad = "si";
//Template literals
var apellido = "Villalba";
console.log("Me llamo " + nombre + " " + apellido);
console.log("Me llamo:\n " + nombre + " " + apellido);
//Desestructuración
var serie = {
    titulo: "Game of Thrones",
    vista: false
};
//var titulo= serie.titulo;
//var vista = serie.vista;
var titulo = serie.titulo, vista = serie.vista; //tiene que coincidir el nombre
var personajes = ["Robb", "Arya", "Sansa", "Bran", "Rickon", "Jon"];
var robb = personajes[0], arya = personajes[1];
console.log("Mis personajes favoritos de " + titulo + " son: " + robb + " y " + arya);
//Condicionales
var num = "1";
if (num == 1) { //Con == compara el valor, con === compara valor y tipo.
    console.log("Es 1");
}
else if (num == 2) {
    console.log("Es 2");
}
else {
    console.log("Es otro");
}
/*
switch(num) {
    case 1:
        console.log("Es 1");
        break;
    case 2: console.log("Es 2");
        break;
    default:
    console.log("Es otro");
}

//Bucles

for(var i=0; i< personajes.length; i++) {
    console.log(personajes[i]);
}

//for (let i in personajes) { //La i obtiene la posición
 //   console.log(`${i}: ${personajes}`);
//}

for (pos i in personajes) { //La pos obtiene la posición
    console.log(`${pos} : ${personajes[pos]}`);
}
for (val i in personajes) { //La val obtiene la valor
    console.log(val);
}

personajes.forEach(function (val, pos) {
    console.log(val);
})
let index=1
while(index<3) {
    console.log(`Hola a todos`);
    index ++;
}
*/
//Funciones
function getNumLoteria() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.sort(function (a, b) {
        return a - b;
    }).join(", ");
}
var numLoteria = getNumLoteria(12, 5, 44);
console.log(numLoteria);
//Funciones flecha
//personajes.forEach((val, pos) => {
//    console.log(val);
//})
function esPar(n) {
    return n % 2 === 0;
}
var numPares = [1, 2, 3, 4, 5].filter(esPar);
console.log(numPares);
function getDatos(cb) {
    console.log('Despues de ejecutar getDatos');
    setTimeout(function () {
        //return ['Un dato', 'otro dato'];
        cb(['Un dato', 'otro dato']);
    }, 2000);
}
console.log('Antes de ejecutar getDatos');
//let misDatos= getDatos();
getDatos(function (datos) {
    console.log(datos);
});
