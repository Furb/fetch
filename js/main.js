

let url = 'js/movies.json';

//TODO: copy/paste the link into a browser, so that you can see the data you are going to work with
//The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise
fetch(url)
    //when the promise is resolved we extract the JSON part of the response object
    .then(response => {
        return response.json();
    })
    //then we can work with the JSON data
    .then(data => {

        let output = '<h2>List of adventure movies</h2>';

         data.forEach(movie => {



           output += `
              <div class="movieBox">
              <h4>
              ${movie.title}
              </h4>
              <img src=${movie.poster} alt="">
              </div>
          `;
        });



        document.getElementById('movie').innerHTML = output;


    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
    })
