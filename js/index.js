const requestURL = "../json/peliculas.json";
console.log("hola");
async function fetchMoviesJSON() {
  const response = await fetch(requestURL);
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then((movies) => {
  for (let index = 0; index < movies.peliculas.length; index++) {
    const moviesSection = document.getElementById("moviesSection");
    let id = movies.peliculas[index].id;
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let gender = movies.peliculas[index].clasificacion;
    let img = movies.peliculas[index].caratula;
    let button = movies.peliculas[index].info;
  
    moviesSection.innerHTML += `
    <div class="container">
    <div class="col-6">
      <img src="${img}" class="rounded float-start" width="310" height="436" alt="caratula de la pelicula" >
        <div class="card-body">                   
            <h2 class= " card-text fst-italic ">${id}. ${title}</h2>
            <h3 class="card-text" id="text">${director}</h3>
            <h4 class="card-text blockquote" id="text">${gender}</h4>
            <a href="${button}" class="btn btn-secondary fst-italic">Info</a>
        </div>
    </div>
</div>            
       `;
  }
});


