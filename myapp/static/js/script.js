

const cars = [
    {
        name: "Model S",
        imageUrl: "/static/images/5.jpg",
        price: "£1,000"
    },
    {
        name: "Model M",
        imageUrl: "/static/images/7.jpg",
        price: "£4,000"
    },
    {
        name: "Model A",
        imageUrl: "/static/images/9.jpg",
        price: "£2,000"
    }
];

// Function to dynamically generate car cards
function displayCars() {
    const carList = document.getElementById("car-list");
    carList.innerHTML = ""; // Clear any existing content in the car list

    cars.forEach((car, index) => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        // Create image element
        const carImage = document.createElement("img");
        carImage.src = car.imageUrl;
        carImage.alt = car.name;
        carImage.classList.add("car-image");

        // Create car info
        const carInfo = document.createElement("div");
        carInfo.classList.add("car-info");

        const carName = document.createElement("h3");
        carName.textContent = car.name;

        const carPrice = document.createElement("p");
        carPrice.textContent = `Price: ${car.price}`;

        // Create Add to Basket button
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Basket";
        addButton.classList.add("add-to-basket");
        addButton.setAttribute("data-id", index);  // Use the index as a unique identifier

        // Append elements to the car card
        carInfo.appendChild(carName);
        carInfo.appendChild(carPrice);
        carInfo.appendChild(addButton);
        carCard.appendChild(carImage);
        carCard.appendChild(carInfo);

        // Append the car card to the car list container
        carList.appendChild(carCard);
    });
}

// Function to add car to basket
function addToBasket(carId) {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push(cars[carId]); // Add the car object to the basket (using the index as ID)
    localStorage.setItem("basket", JSON.stringify(basket)); // Save basket to localStorage
    updateBasketCount(); // Update the basket count
}
// Function to update the basket count (e.g., on the "View Basket" button)
function updateBasketCount() {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const basketCount = basket.length;
    const viewBasketButton = document.getElementById("view-basket");

    // Update the basket button text
    viewBasketButton.textContent = `View Basket (${basketCount})`;

    // Optionally, disable the "View Basket" button if the basket is empty
    if (basketCount === 0) {
        viewBasketButton.disabled = true;
    } else {
        viewBasketButton.disabled = false;
    }
}

// Event listener for the Add to Basket button
document.getElementById("car-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-basket")) {
        const carId = event.target.getAttribute("data-id"); // Get the car ID from data-id
        addToBasket(carId); // Add the car to the basket
    }
});

// Event listener for the "View Basket" button
document.getElementById("view-basket").addEventListener("click", function() {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    if (basket.length > 0) {
        window.location.href = "Basket.html"; // Only redirect if there are items in the basket
    } else {
        alert("Your basket is empty. Add some items before viewing the basket.");
    }
});

// Call the function to display the cars when the page loads
window.onload = function() {
    displayCars(); // Display cars when the page loads
    updateBasketCount(); // Initialize the basket count
};
