let btnBuscar = document.getElementById("searchButton");
let mostrarPelis = document.getElementById("results");
console.log(btnBuscar);
console.log(mostrarPelis);

btnBuscar.addEventListener("click", () => {
  let input = document.getElementById("searchInput").value;

  let apiKey = "0dd1c2594a272843052c01ee9b002639";
  let urlBase = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`;

  fetch(`${urlBase}`)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .catch((error) => console.error(error));
});
function mostrarDatos(data) {
  console.log(data.results);
}

/* 
  data.results.forEach((element) => {
    let titulo = element.title;
    console.log(titulo);
    mostrarPelis.classList.add("movie");
    mostrarPelis.innerHTML = `<h2>${titulo}</2>`;
  }); */
