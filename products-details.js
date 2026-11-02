let params = new URLSearchParams(window.location.search);

let productId = Number(params.get("id"));

let selectedProduct = products.find(function(product) {
    return product.id === productId;
});

console.log(selectedProduct);
let detailImage = document.querySelector("#detail-img");

detailImage.src = selectedProduct.image;

let detailName = document.querySelector("#detail-name");

detailName.textContent = selectedProduct.name;

let detailPrice = document.querySelector("#detail-price");

detailPrice.textContent = "Rs. " + selectedProduct.price;

let detailCart = document.querySelector("#detail-cart");

detailCart.addEventListener("click", function() {

    let existingProduct = cart.find(function(item) {
        return item.id === selectedProduct.id;
    });

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            ...selectedProduct,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
});

let detailDescription = document.querySelector("#detail-description");

if (selectedProduct.description) {
    detailDescription.textContent = selectedProduct.description;
} else {
    detailDescription.textContent = "";
}
console.log(detailDescription);