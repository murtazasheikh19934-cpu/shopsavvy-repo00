fetch("./footer.html")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.querySelector("#footer-placeholder").innerHTML = data;
    })
    .catch(function(error) {
        console.log("Footer load nahi hua:", error);
    });