var nombre: string = "Angel";
var nombre= "3";
console.log("Me llamo "+nombre);

//Union de tipos
var variosTipos: number | boolean = true;
variosTipos= 3;
//variosTipos= "Un string";

//Alias
type numBool= number | boolean;
var otraVariosTipos: numBool;
otraVariosTipos = false;

//Sin tipo y sin inicializar coge como tipo: any
var esVerdad;
esVerdad = 1;
esVerdad = "si";

//Template literals
var apellido= "Villalba";
console.log("Me llamo "+nombre +" " +apellido);
console.log(`Me llamo:
 ${nombre} ${apellido}`);

 //Desestructuración
 var serie = {
     titulo: "Game of Thrones",
     vista: false
 }
//var titulo= serie.titulo;
//var vista = serie.vista;
var {titulo, vista} = serie; //tiene que coincidir el nombre

var personajes = ["Robb", "Arya", "Sansa", "Bran", "Rickon", "Jon"];
var [robb, arya] = personajes;
console.log(`Mis personajes favoritos de ${titulo} son: ${robb} y ${arya}`);

//Condicionales
var num="1"
if(num == 1) { //Con == compara el valor, con === compara valor y tipo.
    console.log("Es 1");
} else if(num == 2) {
    console.log("Es 2");
} else {
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

function getNumLoteria(...nums:Array<number>): string {
    return nums.sort(function(a, b) {
         return a-b;}).join(", ");
}
var numLoteria =getNumLoteria(12, 5, 44);
console.log(numLoteria);

//Funciones flecha

//personajes.forEach((val, pos) => {
//    console.log(val);
//})

function esPar(n) {
    return n % 2 ===0;
}

let numPares=[1, 2, 3, 4, 5].filter(esPar);
console.log(numPares);

function getDatos(cb: Function) {
    console.log('Despues de ejecutar getDatos');
    setTimeout( () => {
        //return ['Un dato', 'otro dato'];
        cb(['Un dato', 'otro dato']);
    }, 2000)
}

console.log('Antes de ejecutar getDatos');
//let misDatos= getDatos();
getDatos(datos => {
    console.log(datos);
})

