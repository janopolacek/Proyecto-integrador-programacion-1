//como le decimos que id estamos seleccionenado 


/*let idObjeto = new URLSearchParams (location.search)
let id = idObjeto.get('id');
console.log(id)*/

let queryString = location.search
let datos = new URLSearchParams(queryString)
let idGenre = datos.get('id')

let url = `https://api.themoviedb.org/3/tv/${idGenre}?api_key=b8041f10f73b7178ac9637ccbb409920`

fetch(url)
    
    .then(function (response){
        return response.json(); 
    })
    
    .then(function (data) {
        console.log(data)
        
        
        let generos = ""

        for (let i = 0; i < data.genres.length; i++) {
           generos += `<a href="./genero-detalles.html?id=${data.genres[i].id}"> ,${data.genres[i].name}.<a/>`}
    
 document.querySelector(".detalle").innerHTML += `  <article>
            <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="${data.name}">

            <h3> titulo: ${data.original_name} </h3>
            <p> estreno: ${data.first_air_date}</p>
            <p> numero de capitulos: ${data.number_of_episodes} <\p>
            <p> numero de temporadas: ${data.number_of_seasons} <\p>
            <p> Generos: ${generos}<\p>
            <p> Rating: ${data.vote_average} <\p>
            <p> Sinopsis: ${data.overview} <\p>
            
            
        </article> `

    

    })

    .catch(function (error) {
        console.log(error)
    })
