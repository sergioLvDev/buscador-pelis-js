let btnBuscar = document.getElementById("searchButton");
let mostrarPelis = document.getElementById("results");

let apiKey = "0dd1c2594a272843052c01ee9b002639";

btnBuscar.addEventListener("click", () => {
  let input = document.getElementById("searchInput").value;
  mostrarPelis.innerHTML = `<div class="loader"></div> `; //muestro el loader cuando se hace la peticion
  let urlBase = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`;
  fetch(`${urlBase}`)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .catch((error) => console.error(error));
});
function mostrarDatos(data) {
  mostrarPelis.innerHTML = ""; ////Borra la lista si es que ya hay peliculas por cada vez que se apriete el boton
  if (data.results.length === 0) {
    mostrarPelis.innerHTML = `<p class="vacia">No se encontraron resultados para tu busqueda</p>`;
    return;
  }
  data.results.forEach((element) => {
    let titulo = element.title;
    let descripcion = element.overview;
    let poster = element.poster_path;
    let fecha = element.release_date;
    mostrarPelis.innerHTML += `<div class="movie">
                               <img src="https://image.tmdb.org/t/p/w200/${poster}" alt="${titulo}"> 
                               <h2>${titulo}</h2>
                               <p>Fecha de lanzamiento: ${fecha}</p>
                               <p>${descripcion}</p>
                               </div>`;
  });
}

//1er paso traigo los elementos del DOM // id de los elementos
//2do paso traigo la info de la Api // con el fetch //trae un objeto con un array adentro de todas las coincidencias
//3er valido que el array no este vacio // si esta vacio muestro un mensaje que no se encontraron peliculas
//4to paso creo la funcion para buscar // obtengo la info de cada elemento del array y genero una tarjeta para cada pelicula con el acumulador += para que se agreguen las peliculas una abajo de la otra
//5to paso genero un loader mientras se carga la info
