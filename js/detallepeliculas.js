
let queryString = location.search
let datos = new URLSearchParams(queryString)
let idGenre = datos.get('id')

let url = `https://api.themoviedb.org/3/movie/${idGenre}?api_key=b8041f10f73b7178ac9637ccbb409920`

fetch(url)
    
    .then(function (response){
        return response.json(); 
    })
    
    .then(function (data) {
        console.log(data) 

     let generos = ""

        for (let i = 0; i < data.genres.length; i++) {
           generos += `<a href="./genero-detalle.html?id=${data.genres[i].id}"> ,${data.genres[i].name}.<a/>`}
    
 document.querySelector(".detalle").innerHTML += `  <article>
            <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="${data.title}">

            <h3> Titulo: ${data.original_title} </h3>
            <p> Estreno: ${data.release_date}</p>
            <p> Rating: ${data.vote_average} </p>
            <p> Duracion: ${data.runtime} </p>
            <p> Sinopsis: ${data.overview} </p>
            <p> Generos: ${generos} </p>
           


            
        </article> `

    

    })

    .catch(function (error) {
        console.log(error)
    })
