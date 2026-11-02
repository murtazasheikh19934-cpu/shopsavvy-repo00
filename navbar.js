fetch("./navbar.html")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {

        document.querySelector("#navbar-placeholder").innerHTML = data;

    })
    .catch(function(error) {

        console.log("Navbar load nahi hua:", error);

    });
