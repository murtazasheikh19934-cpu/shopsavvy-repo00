let products = [
    {
        id:1,
        name:"HP 15s i5 12th Gen",
        category : "Electronic",
        price:145000,
        image:"./laptop-image1.png",
           description: "HP laptop with Intel Core i5 12th Generation processor."
    },
    {
       id:2,
        name:"Lenovo Chromebook Plus Gen 10 (14″ MediaTek)",
        category : "Electronic",
        price:99000,
        image:"./laptop-image2.png"  
    },
    {
       id:3,
        name:"Best Quality Oxford Backpack Durable Casual Simple Travel Waterproof Laptop backpack Bags for Men",
        category : "bags",
        price:2199.00,
        image:"./bag-image1.png"  
    },
    {
       id:4,
        name:"Men Crossbody Pouch Bag Waist Bag",
        category : "bags",
        price:999.00,
        image:"./bag-image2.png"  
    },
    {
       id:5,
        name:"Stylish White Sneaker shoes",
        category : "Shoes",
        price:1999.00,
        image:"./shoes-image1.png"  
    },
    {
       id:6,
        name:"Men Formal Loafers MF7052-Brown",
        category : "Shoes",
        price:6475,
        image:"./shoes-image2.png"  
    },
    {
       id:7,
        name:"Retro Aviator Thin Black Frame Polarized Men Sunglasses-205",
        category : "Accessories",
        price:2500,
        image:"./glasses-image.png"  
    },
    {
       id:8,
        name:"Stainless Steel Gents Bracelet Rope Style (4mm | 8 Inches)",
        category : "Accessories",
        price:1999.00,
        image:"./bracelet-image.png"  
    },
    {
       id:9,
        name:"K2 Survivor -20°C Insulated Jacket for Men",
        category : "Fashion",
        price:5999.00,
        image:"./jacket-image.png"  
    },
    {
       id:10,
        name:"Men Hoodie",
        category : "Fashion",
        price:7999.00,
        image:"./hoodie-image.png"  
    },
    {
       id:11,
        name:"Frame Living Room Sofa Set",
        category : "Home&Living",
        price:225000.00,
        image:"./sofa-image.png"  
    },
    {
       id:12,
        name:"Maywood Courtyard Living Lounge Coffee Center Tables (Set of 3)",
        category : "Home&Living",
        price:34999,
        image:"./table-image.png"  
    },

]
 function showProducts(productList) {

    let container = document.querySelector(".card-box");
    container.innerHTML = "";

    if (productList.length === 0) {
    let message = document.createElement("p");
    message.textContent = "No products found!";
    container.appendChild(message);
    return;
}
   

    productList.forEach(function(product) {
       let card = document.createElement("div");
    card.className="trend-cards";



    let image = document.createElement("img");
    image.src=product.image;

image.style.cursor = "pointer";

image.addEventListener("click", function() {
    window.location.href = "./product-detail.html?id=" + product.id;
});


    card.appendChild(image);
    
    let heading = document.createElement("h3");
    heading.textContent=product.name;
    card.appendChild(heading);
 
      let price = document.createElement("p");
price.textContent = "Rs. " + product.price;
card.appendChild(price);

let button = document.createElement("button")
button.textContent="Add to Cart";

button.addEventListener("click", function() {
    let existingProduct = cart.find(function(item) {
    return item.id === product.id;
});

if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
} else {
    cart.push({
        ...product,
        quantity: 1
    });
}

localStorage.setItem("cart", JSON.stringify(cart));
    let cartCount = document.querySelector("#cart-count");

    cartCount.textContent = cart.length;
;


    console.log(cart);
});
card.appendChild (button);
 container.appendChild(card);
});
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCart() {
let container = document.querySelector("#cart-product");
container.innerHTML="";


cart.forEach(function(product){
let item = document.createElement("div");
let image=document.createElement("img");
image.src=product.image;
item.appendChild(image);

let name=document.createElement("h3");
name.textContent=product.name;
item.appendChild(name);

let price=document.createElement("p");
price.textContent= "Rs" +  product.price*product.quantity;
let quantity = document.createElement("p");
quantity.textContent = "Quantity: " + product.quantity;
item.appendChild(quantity);


let removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";
item.appendChild(removeBtn);

removeBtn.addEventListener("click", function() {
    let index = cart.findIndex(function(item) {
    return item.id === product.id;
});


cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
showCart();
});



item.appendChild(price);
container.appendChild(item);
});
let total = 0;

cart.forEach(function(product) {
    total += product.price * product.quantity;
});

document.querySelector("#total-price").textContent = total;
}
if (document.querySelector("#cart-product")) {
    showCart();
}



if (document.querySelector(".card-box") &&
    !window.location.pathname.endsWith("product.html")) {
    showProducts(products);
}

let categories = document.querySelectorAll(".card-electro");

categories.forEach(function(categoryCard) {
    categoryCard.addEventListener("click", function() {
        let selectedCategory = categoryCard.dataset.category;

        window.open(
            "./product.html?category=" + encodeURIComponent(selectedCategory),
            "_blank"
        );
        
    });
});


let searchInput = document.querySelector("#search-input");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        let searchText = searchInput.value.toLowerCase().trim();

    
        document.body.classList.toggle("search-active", searchText !== "");
        let filteredProducts = products.filter(function(product) {
            return product.name.toLowerCase().includes(searchText);
        });

        
        showProducts(filteredProducts);

        let heading = document.querySelector(".products-section h2");

        if (searchText !== "") {
            heading.textContent = "Search Results";
        } else {
            heading.textContent = "Featured Products";
        }

    });

}


let menuToggle = document.querySelector("#menu-toggle");
let closeMenu = document.querySelector("#close-menu");
let navSidebar = document.querySelector("#nav-sidebar");
let sidebarOverlay = document.querySelector("#sidebar-overlay");

menuToggle.addEventListener("click", function() {
    navSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
});

closeMenu.addEventListener("click", function() {
    navSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
});

sidebarOverlay.addEventListener("click", function() {
    navSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
});

let navLinks = navSidebar.querySelectorAll("a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navSidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");
    });
});

