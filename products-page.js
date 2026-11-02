
let params = new URLSearchParams(window.location.search);

let selectedCategory = params.get("category");

let result = products.filter(function(product) {
    return product.category === selectedCategory;
});

let heading = document.querySelector("#category-title");
heading.textContent = selectedCategory + " Products";

showProducts(result);


