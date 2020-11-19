


//the url is our endpoint and contains the data that we want to work with
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
            //Create a div with a card class
            console.log(movie.title);
            document.getElementById("title").innerHTML = movie.title;

        })
    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    })