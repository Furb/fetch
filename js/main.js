
let url = ('js/movies.json')
fetch(url)

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

        document.getElementById('movies').innerHTML = output;


    })
    .catch(err => {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
    })


document.getElementById('btn').addEventListener('click', drinkThis);

      function drinkThis () {
      fetch('drinks.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        let drinkHtml = '';
        data.forEach(drink =>{
          drinkHtml += `

          <div class="movieBox">
          <h4>
          ${drink.title}
          </h4>
          </div>
      `;
        })

        document.getElementById('drinks').innerHTML = drinkHtml;
      })
    }
