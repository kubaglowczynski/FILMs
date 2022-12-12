window.onload = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => dataReady(data))
}

function dataReady(data){
    var result = data.results[0];
    var name = result.name.first;
    document.querySelector(".content-top-profile-name").innerHTML =`Hello ${name}!`;
    var image = result.picture.large;
    document.querySelector(".content-top-profile img").src = image;
    var username = result.login.username;
    document.querySelector(".profile span").innerHTML = username;
}