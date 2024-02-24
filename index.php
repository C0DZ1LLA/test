<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C0DZ1LLA</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    
    <div id="container">
        <h1>Reusable Inventory Management System</h1>
    
        <h2 id="container">Made by SAMAN</h2>
        
        <div id="container">
        <div id="product-item button">
        <button id="add-btn" onclick="exportAllProducts()">Export All Products</button>
            <button onclick="clearDataAndRefresh()">Clear Data and Refresh</button>
        </div>

        <label for="category-selector">Select ITEMS:</label>
        <select id="category-selector">
            <option value="All">All</option>
        </select>
        <div id="product-container"></div>
    </div>

    <script>




let products = JSON.parse(localStorage.getItem('products')) || [
{
        id: 1,
        name: "product name" ,
        price: 9.05,
        bulk_price: 6.33,
        quantity: 0,
        total_profit: 0.00,
        category: "product category"
    },
];
        // Function to retrieve products from localStorage
        function getProductsFromLocalStorage() {
            const storedProducts = localStorage.getItem('products');
            if (storedProducts) {
                products = JSON.parse(storedProducts);
            }
        }

        // Function to initialize the inventory management system
        function initializeInventorySystem() {
            getProductsFromLocalStorage();
            populateProductContainer();
        }

        // Function to handle language selection
function changeLanguage() {
    // Get the selected language from the selector
    const selectedLanguage = document.getElementById('language-selector').value;

    // Call a function to translate the content based on the selected language
    translateContent(selectedLanguage);
}

// Function to translate the content based on the selected language
function translateContent(language) {
    // Example translation logic
    // You would need to replace this with your actual translation implementation
    if (language === 'fr') {
        document.getElementById('heading').innerText = 'Système de gestion des stocks réutilisable';
        // Translate other elements similarly
    } else {
        // Restore default language
        document.getElementById('heading').innerText = 'Reusable Inventory Management System';
        // Restore other elements to default language
    }
}


// Function to display products by category
function displayProductsByCategory(category) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        if (product.category === category || category === "All") {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");
            const profitPerUnit = product.price - product.bulk_price; // Calculate profit per unit
            const totalProfit = profitPerUnit * product.quantity; // Calculate total profit
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Unit Sell Price: €${product.price}</p>
                <p>Buying Price: €${product.bulk_price.toFixed(2)}</p>
                <p>Unit Quantity Amount: ${product.quantity}</p>
                <p>Unit Sell Total Price: €${(product.price * product.quantity).toFixed(2)}</p> <!-- Display calculation -->                <p>Unit Quantity Buying Total Cost: €${(product.bulk_price * product.quantity).toFixed(2)}</p>
                <p>Total Profit: €${totalProfit.toFixed(2)}</p> <!-- Display total profit -->
                <input type="number" id="add-quantity-${product.id}" placeholder="Quantity to add">
                <button id="add-btn-${product.id}">Add Quantity</button>
                <button class="subtract-btn">Subtract Quantity</button>
                <button class="export-btn">Export</button> <!-- Add export button -->
                <button class="clear-btn" onclick="clearProductData(${product.id})">Clear Data</button> <!-- Add clear data button -->
            `;

            // Add click event listener to subtract quantity
            productItem.querySelector(`.subtract-btn`).addEventListener("click", () => {
                subtractQuantity(product.id, product.price);
            });

            // Add click event listener to add quantity
            productItem.querySelector(`#add-btn-${product.id}`).addEventListener("click", () => {
                addQuantity(product.id);
            });
            
                        // Add click event listener to export button
                        productItem.querySelector(`.export-btn`).addEventListener("click", () => {
                exportProductData(product); // Pass the product data to the export function
            });

            productContainer.appendChild(productItem);
        }
    });
}

// Function to sanitize HTML input to prevent XSS attacks
function sanitizeHTML(value) {
            const div = document.createElement('div');
            div.textContent = value;
            return div.innerHTML;
        }

        // Initialize the inventory management system when the page loads
        document.addEventListener("DOMContentLoaded", function() {
            initializeInventorySystem();
        });

    // Function to export product data
function exportProductData(product) {
    // Create an array with the product data
    const productData = [
        {
            Name: product.name,
            'Unit Sell Price': product.price,
            'Buying Price': product.bulk_price,
            'Unit Quantity Amount': product.quantity,
            'Unit Sell Total Price': product.total_profit,
            'Unit Quantity Buying Total Cost': (product.bulk_price * product.quantity).toFixed(2),
            'Total Profit': (product.price - product.bulk_price) * product.quantity
        }
    ];

    // Convert data to CSV format
    const csvData = convertToCSV(productData, );

    // Create a Blob object with the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    // Create a download link for the Blob object
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'product.csv');
    document.body.appendChild(link);

    // Initiate the download process
    link.click();

    // Clean up
    document.body.removeChild(link);
}

    // Function to update quantity in local storage
    function updateLocalStorage() {
        localStorage.setItem('products', JSON.stringify(products));
    }
    // Function to convert data to CSV format
function convertToCSV(data) {
    const header = Object.keys(data[0]).join(',');
    const csv = data.map(row => Object.values(row).join(',')).join('\n');
    return `${header}\n${csv}`;

}

 // Function to export all products
 function exportAllProducts() {
            const allProductData = products.map(product => ({
                Name: product.name,
                'Unit Sell Price': product.price,
                'Buying Price': product.bulk_price,
                'Unit Quantity Amount': product.quantity,
                'Unit Sell Total Price': product.total_profit,
                'Unit Quantity Buying Total Cost': (product.bulk_price * product.quantity).toFixed(2),
                'Total Profit': (product.price - product.bulk_price) * product.quantity
            }));

            // Convert all product data to CSV format
            const csvData = convertToCSV(allProductData);

            // Create a Blob object with the CSV data
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

            // Create a download link for the Blob object
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'products.csv');
            document.body.appendChild(link);

            // Initiate the download process
            link.click();

            // Clean up
            document.body.removeChild(link);
        }

        // Function to clear data and refresh the page
        function clearDataAndRefresh() {
            // Clear localStorage
            localStorage.clear();
            // Delete cookies if any
            document.cookie = "";
            // Reload the page
            location.reload();
        }

                // Function to clear data for a specific product
                function clearProductData(productId) {
            const productIndex = products.findIndex(product => product.id === productId);
            if (productIndex !== -1) {
                products[productIndex].quantity = 0;
                products[productIndex].total_profit = 0;
                updateLocalStorage();
                const selectedCategory = document.getElementById("category-selector").value;
                displayProductsByCategory(selectedCategory);
            }
        }





    // Function to subtract quantity
    function subtractQuantity(productId, price) {
        products = products.map(product => {
            if (product.id === productId && product.quantity > 0) {
                product.quantity -= 1;
                product.total_profit += price; // Update total profit based on product's price
            }
            return product;
        });
        updateLocalStorage();
        const selectedCategory = document.getElementById("category-selector").value;
        displayProductsByCategory(selectedCategory);
    }

    // Function to add quantity
    function addQuantity(productId) {
        const additionalQuantity = parseInt(document.getElementById(`add-quantity-${productId}`).value);
        if (!isNaN(additionalQuantity) && additionalQuantity > 0) {
            products = products.map(product => {
                if (product.id === productId) {
                    product.quantity += additionalQuantity;
                }
                return product;
            });
            updateLocalStorage();
            const selectedCategory = document.getElementById("category-selector").value;
            displayProductsByCategory(selectedCategory);
        } else {
            alert("Please enter a valid quantity to add.");
        }
    }

    // Populate the category selector options
    function populateCategorySelector() {
        const categorySelector = document.getElementById("category-selector");
        const categories = products.map(product => product.category);
        const uniqueCategories = [...new Set(categories)];
        uniqueCategories.forEach(category => {
            const option = document.createElement("option");
            option.text = category;
            categorySelector.add(option);
        });
    }

    // Display products based on the selected category
    document.getElementById("category-selector").addEventListener("change", function() {
        const selectedCategory = this.value;
        displayProductsByCategory(selectedCategory);
    });

    // Populate category selector and display products when the page loads
    populateCategorySelector();
    displayProductsByCategory("All");

    // Function to update product quantity
    function updateProductQuantity(productId, quantity) {
        const product = products.find(p => p.id === productId);
        if (product) {
            product.quantity = parseInt(quantity);
            // Update total profit
            product.total_profit = (product.price * product.quantity).toFixed(2);
            // Save updated products to localStorage
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    // Function to handle quantity input change
    function handleQuantityChange(event) {
        const productId = parseInt(event.target.dataset.productId);
        const quantity = event.target.value;
        updateProductQuantity(productId, quantity);
    }

// Function to calculate total cost based on quantity
function calculateTotalCost(productId) {
    const additionalQuantity = parseInt(document.getElementById(`add-quantity-${productId}`).value);
    const product = products.find(p => p.id === productId);
    if (product && !isNaN(additionalQuantity) && additionalQuantity > 0) {
        const totalPrice = product.price * additionalQuantity;
        console.log(`Total cost for ${additionalQuantity} units of ${product.name}: €${totalPrice.toFixed(2)}`);
    } else {
        alert("Please enter a valid quantity to calculate the total cost.");
    }
}

    // Event listener for quantity input change
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', handleQuantityChange);
    });

    // Event listener for export button click
    document.getElementById('export-btn').addEventListener('click', exportProductsData);

    </script>
</body>
</html>
