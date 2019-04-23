const URL = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
const url2 = "https://ejemplos-dc1c1.firebaseio.com/peliculas/";

function getGenero () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL);

    xhr.addEventListener ('readystatechange', function ()  {
        if(xhr.readyState === 4) {
            let genero = JSON.parse(xhr.responseText);
           console.log("Generos: ", genero); 
           var num = prompt("Elige un genero: 0 (action) o 1 (terror)");
           var opcion = genero[num];
           console.log(opcion);
           getPeliculas(num);
            
        }
    })
    xhr.send();
     
}

function getPeliculas (opcion) {
    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', url2+opcion+'.json');
    console.log(url2+opcion+'.json');
    xhr.addEventListener ('readystatechange', function ()  {
        if(xhr.readyState === 4) {
            let peliculas = JSON.parse(xhr2.responseText);
            console.log(peliculas);
            for (let id in peliculas) {
                console.log(`Las películas del ${genero} son: ${peliculas[id]}.join(', ')`);
            }
        }
    }
    xhr2.send(); 
 
}

getGenero();