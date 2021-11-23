
let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString) 
let id= queryStringObject.get('id') 

let urlGenero = (`https://api.themoviedb.org/3/discover/movie?api_key=b8041f10f73b7178ac9637ccbb409920&with_genres=${id}`)

fetch (urlGenero)
   .then (function (response){
return response.json()
 })

 .then (function (data){
   console.log (data);
let info = data.results
let sectionSeries = document.querySelector(".clase")
let generosSeries = ""
 for (let i=0; i<info.length; i++){
   generosSeries += 
    ` <article class="article2">
    <img src="https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="${info[i].title}">

    <h3> ${info[i].title} </h3>
    <p> ${info[i].release_date}</p>
    <a href="detallepeliculas.html?id=${info[i].id}"> Detalle </a>
</article>  `

 }
 sectionSeries.innerHTML = generosSeries
})

.catch(function(error) {
   console.log(error)
})


