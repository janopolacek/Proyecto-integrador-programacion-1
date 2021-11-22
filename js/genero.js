let url = (" https://api.themoviedb.org/3/genre/movie/list?api_key=b8041f10f73b7178ac9637ccbb409920")

fetch(url)
    .then(function (response) 
    { return response.json(); })
 
    .then(function(data){
        console.log(data.genres);

        for ( let i=0; i < 20; i++){
            document.querySelector(".columnasgen").innerHTML += 
            ` <article class="columna">
            <ul class="listagen">
            <a href="./genero-detallep.html?id=${data.genres[i].id}">
            <li> ${data.genres[i].name} </li>
            </a>
            </ul>


            </article>
            ` 
        }


    })

    .catch(function(error){
        console.log(` el error fue` + error);
    })

    let url2 = ("  https://api.themoviedb.org/3/genre/tv/list?api_key=b8041f10f73b7178ac9637ccbb409920")

fetch(url2)
    .then(function (response) 
    { return response.json(); })
 
    .then(function(data){
        console.log(data.genres);

        for ( let i=0; i < 20; i++){
            document.querySelector(".columnasgen2").innerHTML += 
            ` <article class="columna">
            <ul class="listagen">
            <a href="./genero-detalles.html?id=${data.genres[i]}">
            <li> ${data.genres[i].name} </li>
            </a>
            </ul>


            </article>
            ` 
        }


    })