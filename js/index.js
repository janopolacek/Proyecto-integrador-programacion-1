
let url = ("https://api.themoviedb.org/3/trending/all/day?api_key=b8041f10f73b7178ac9637ccbb409920")

fetch(url)
    .then(function (response) 
    { return response.json(); })
    .then(function (data) {
        console.log(data.results)
           
        for (let i = 0; i <=4; i++) 
        
        {  
 
        console.log(data.results[i])
            
            document.querySelector (".fotos").innerHTML +=  `  <article>
            <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].title}">

            <h3> ${data.results[i].title} </h3>
            <p> ${data.results[i].release_date}</p>
           
            <a href="detallepeliculas.html?id=${data.results[i].id}">Detalle</a>

            
        </article>  `}
        
     
        
        
        })
//que pasa con los titulo que aparecen undefinied ??

        let url2 = (" https://api.themoviedb.org/3/tv/popular?api_key=b8041f10f73b7178ac9637ccbb409920")

fetch(url2)
    .then(function (response) 
    { return response.json(); })
    .then(function (data) {
        console.log(data.results)
    
        for (let i = 0; i <=4; i++) {
            console.log(data.results[i])
            
            document.querySelector (".fotos2").innerHTML +=  ` <article>
            <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].name}">

            <h3> ${data.results[i].name} </h3>
            <p> ${data.results[i].first_air_date}</p>
            <a href="detalle.html?id=${data.results[i].id}"> Detalle</a>



            
        </article>  `
        }
    
    })

    let url3 = ("  https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920")

    fetch(url3)
        .then(function (response) 
        { return response.json(); })
        .then(function (data) {
            console.log(data.results)
        
            for (let i = 0; i <=4; i++) {
                console.log(data.results[i])
                
                document.querySelector (".fotos3").innerHTML +=  `<article>
                <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].title}">
    
                <h3> ${data.results[i].title} </h3>
                <p> ${data.results[i].release_date}</p>
                <a href="detallepeliculas.html?id=${data.results[i].id}"> Detalle </a>
    
                
            </article>  `
            }
        
        })