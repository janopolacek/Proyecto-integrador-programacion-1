let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString) 
let id= queryStringObject.get('id') 

let urlGenero =  `https://api.themoviedb.org/3/discover/tv?api_key=b8041f10f73b7178ac9637ccbb409920&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}`;

fetch (urlGenero)
   .then (function (response){
return response.json()
 })

 .then (function (data){
   console.log (data);
let info = data.results
let sectionSeries = document.querySelector(".claseSeries")
let generosSeries = ""
 for (let i=0; i<info.length; i++){
   generosSeries += 
    ` <article class="article3">
    <img src="https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="${info[i].original_name}">

    <h3> ${info[i].original_name} </h3>
    <p> ${info[i].first_air_date}</p>
    <a href="detalle.html?id=${info[i].id}"> Detalle </a>
</article>  `

 }
 sectionSeries.innerHTML = generosSeries
})

.catch(function(error) {
   console.log(error)
})