let recuperoPelis = localStorage.getItem('favoritosP');
let Pfavoritas = JSON.parse (recuperoPelis);
let pelis = document.querySelector ('.favoritosjs');
let pFavoritas = '';


if (Pfavoritas == null || Pfavoritas.length ==0){
                         
    pelis.innerHTML= ' <p>No hay ninguna pelicula seleccionada</p> '
}                                                            

else {
    for (let i=0; i<fav.lenght; i++){
       favpelis (fav[i])
    }

}

function favpelis (id){
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=b8041f10f73b7178ac9637ccbb409920?`

      fetch (url)
         .then (function (response){
            return response.json();
   })

   .then (function(data){
      console.log (data)
   })

   let imagenS = datos.poster_path
   let tituloS = datos.original_title
   let idSerie = datos.id

   ` <article class="article">
   <img src="https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="${info[i].title}">

   <h3> ${info[i].title} </h3>
   <p> ${info[i].release_date}</p>
   <a href="detallepeliculas.html?id=${info[i].id}"> Detalle </a>
</article>  `
}

let recuperoS = localStorage.getItem('favoritosP');
let Sfavoritas = JSON.parse (recuperoPelis);
let series = document.querySelector ('.favoritosjs');
let Favoritas = '';

if (Sfavoritas== null || Sfavoritas.length ==0){
                         
   series.innerHTML= ' <p>No hay ninguna pelicula seleccionada</p> '
}     

else {
   for (let i=0; i<fav.lenght; i++){
      favoritasS (fav[i])
   }

}


function favoritasS (id){
   let url = `https://api.themoviedb.org/3/tv/${id}?api_key=b8041f10f73b7178ac9637ccbb409920?`

     fetch (url)
        .then (function (response){
           return response.json();
  })

  .then (function(data){
     console.log (data)
  })

  let imagenS = datos.poster_path
  let tituloS = datos.original_title
  let idSerie = datos.id

  ` <article>
  <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].name}">

  <h3> ${data.results[i].name} </h3>
  <p> ${data.results[i].first_air_date}</p>
  <a href="detalle.html?id=${data.results[i].id}"> Detalle</a>

</article>  `
}
