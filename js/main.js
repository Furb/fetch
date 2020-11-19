


//the url is a refrence to our json file with content
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
        // We iterate through all the objects
        data.forEach(movie => {

        	console.log(movie.title);

            const movieBox = document.getElementById('title');
            movieBox.innerHTML = movie.title;

        })
    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    })