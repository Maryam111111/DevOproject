// Display basket items
function displayBasket() {
    const basketItemsContainer = document.getElementById("basket-items");
    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    if (basket.length === 0) {
        basketItemsContainer.innerHTML = "<p>Your basket is empty.</p>";
    } else {
        basketItemsContainer.innerHTML = "";  // Clear previous basket items
        basket.forEach(car => {
            const carDiv = document.createElement("div");
            carDiv.classList.add("basket-item");

            const carImage = document.createElement("img");
            carImage.src = car.imageUrl;
            carImage.alt = car.name;
            carImage.classList.add("car-image");

            const carInfo = document.createElement("div");
            carInfo.classList.add("car-info");

            const carName = document.createElement("h3");
            carName.textContent = car.name;

            const carPrice = document.createElement("p");
            carPrice.textContent = `Price: ${car.price}`;

            carInfo.appendChild(carName);
            carInfo.appendChild(carPrice);
            carDiv.appendChild(carImage);
            carDiv.appendChild(carInfo);

            basketItemsContainer.appendChild(carDiv);
        });
    }
}

// Empty the basket
function emptyBasket() {
    localStorage.removeItem("basket");  // Remove the basket data from localStorage
    displayBasket();  // Update the UI to show empty basket
}

// Attach event listener to the "Empty Basket" button
document.getElementById("empty-basket-button").addEventListener("click", emptyBasket);

// On window load, display the basket
window.onload = function() {
    displayBasket();
};
