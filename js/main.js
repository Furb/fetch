

var date = new Date();

document.getElementById("showDate").innerHTML = date;



fetch('https://api.github.com/users/furb/repos')
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    console.log(data)
  });