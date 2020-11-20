

fetch('js/movies.json')

    .then(response => {
        return response.json();
    })

    .then(data => {

        let output = '<h2>List of adventure movies</h2>';

         data.forEach(movie => {



           output += `
              <div class="movieBox">
              <h4>
              ${movie.title}
              </h4>
              <a href=${movie.link}>
              <img src=${movie.poster} alt="">
              </a>
              </div>
          `;
        });

        document.getElementById('movie').innerHTML = output;


    })
    .catch(err => {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
    })


//singleMovie



fetch('http://www.omdbapi.com/?t=Willow&apikey=dab96338')
  .then(response => response.json())
  .then(data => {

    console.log(data)

    document.getElementById('movieTitle').innerHTML = movie.title;
  });
