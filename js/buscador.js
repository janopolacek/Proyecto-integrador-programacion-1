let queryString = location.search;
let busqueda = new URLSearchParams(queryString) 
let buscar = busqueda.get('buscar') 
let resultados = document.querySelector('.corazondeleon')
let contenido = ``


let url = `https://api.themoviedb.org/3/search/movie?api_key=b8041f10f73b7178ac9637ccbb409920&query=${buscar}`

fetch (url)
.then (function (response){
 return response.json();

})

.then (function(data){
console.log (data)
let dataPeliculas = data.results
let contenido = ``
for (let i=0; i< dataPeliculas.length; i++){
   resultados.innerHTML += `  <article>
<img src="https://image.tmdb.org/t/p/w342/${dataPeliculas[i].poster_path}" alt="${dataPeliculas[i].title}">

<h3> ${dataPeliculas[i].title} </h3>
<p> ${dataPeliculas[i].release_date}</p>

<a href="detallepeliculas.html?id=${dataPeliculas[i].id}">Detalle</a>

</article>  `
}

document.querySelector(".corazondeleon").innerHTML += contenido

if(dataPeliculas.length == 0){
   alert(`no se encontraron coincidencias`)
}
})

.catch(function (error) {
   console.log(error)
})


let url1 = `https://api.themoviedb.org/3/search/tv?api_key=b8041f10f73b7178ac9637ccbb409920&query=${buscar}`

fetch (url1)
.then (function (response){
 return response.json();

})

.then (function(data){
console.log (data)
let dataSeries = data.results
let series = document.querySelector(".corazondeleon")
let contenido = ``
for (let i=0; i< dataSeries.length; i++){
   document.querySelector(".corazondeleon").innerHTML +=  ` <article>
   <img src="https://image.tmdb.org/t/p/w342/${dataSeries[i].poster_path}" alt="${dataSeries[i].name}">

   <h3> ${dataSeries[i].name} </h3>
   <p> ${dataSeries[i].first_air_date}</p>
   <a href="detalle.html?id=${dataSeries[i].id}"> Detalle</a>



   
</article>  `
}
document.querySelector(".corazondeleon").innerHTML += contenido

if(dataSeries.length == 0){
   alert(`no se encontraron coincidencias`)
}

})


.catch(function (error) {
   console.log(error)
})







