/*
			   Name: Farouk Afolabi
			   StudentId: 1207660
			   Date: March 10th, 2024.
			*/

//Create four empty arrays

let produce = ["Apple", "Banana", "Mango", "Grape", "Pear", "Broccoli"];
let bakery = ["Baguette", "Pumpkin Pie", "Chocolate Cookies"];
let meats = ["Beef", "Chicken", "Ham", "Turkey"];
let cheese = ["Cheddar", "Swiss", "Gouda", "Havarti", "Asiago"];

let tempValue = "";

let results = window[tempValue.toLowerCase()];

//Created an empty array
let shoppingCart = [];

function changeItemDropdown(numElements) {
  var select = document.getElementById("itemNumDropdown");
  select.innerHTML = ""; // Clear previous options

  for (var i = 1; i <= numElements; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
}

// function for displaying products

function displayProducts() {
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  let productOutputDiv = document.getElementById("productOutput");
  let addToCart = document.getElementById("addToCart");
  addToCart.disabled = false;
  // console.log(radioButtons);
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      tempValue = radioButtons[i].value;
      if (tempValue.toLowerCase() === "produce") {
        productOutputDiv.innerText = produce;
        changeItemDropdown(produce.length);
      } else if (tempValue.toLowerCase() === "bakery") {
        productOutputDiv.innerText = bakery;
        changeItemDropdown(bakery.length);
      } else if (tempValue.toLowerCase() === "meats") {
        productOutputDiv.innerText = meats;
        changeItemDropdown(meats.length);
      } else if (tempValue.toLowerCase() === "cheese") {
        productOutputDiv.innerText = cheese;
        changeItemDropdown(cheese.length);
      }
    }
  }
}

// FUNCTION FOR ADDING PRODUCTS

function addProduct() {
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  let product = document.getElementById("product");

  // console.log(radioButtons);
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      tempValue = radioButtons[i].value;
      if (tempValue.toLowerCase() === "produce") {
        if (produce.includes(product.value)) {
          return;
        }
        produce.push(product.value);
        product.value = "";
        displayProducts();
      } else if (tempValue.toLowerCase() === "bakery") {
        if (bakery.includes(product.value)) {
          return;
        }
        bakery.push(product.value);
        product.value = "";
        displayProducts();
      } else if (tempValue.toLowerCase() === "meats") {
        if (meats.includes(product.value)) {
          return;
        }
        meats.push(product.value);
        product.value = "";
        displayProducts();
      } else if (tempValue.toLowerCase() === "cheese") {
        if (cheese.includes(product.value)) {
          return;
        }
        cheese.push(product.value);
        product.value = "";
        displayProducts();
      }
    }
  }
}

function addItemToCart() {
  let radioButtons = document.querySelectorAll('input[type="radio"]');
  let dropDown = document.getElementById("itemNumDropdown");
  let cartOutput = document.getElementById("cartOutput");
  console.log(dropDown.value);
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      tempValue = radioButtons[i].value;
      if (tempValue.toLowerCase() === "produce") {
        shoppingCart.push(produce[dropDown.value - 1]);
        cartOutput.innerText = shoppingCart;
      } else if (tempValue.toLowerCase() === "bakery") {
        shoppingCart.push(bakery[dropDown.value - 1]);
        cartOutput.innerText = shoppingCart;
      } else if (tempValue.toLowerCase() === "meats") {
        shoppingCart.push(meats[dropDown.value - 1]);
        cartOutput.innerText = shoppingCart;
      } else if (tempValue.toLowerCase() === "cheese") {
        shoppingCart.push(cheese[dropDown.value - 1]);
        cartOutput.innerText = shoppingCart;
      }
    }
  }
}

function removeItem() {
  let removeText = document.getElementById("tb_remove");
  if (shoppingCart.includes(removeText.value)) {
    let index = shoppingCart.indexOf(removeText.value);
    shoppingCart.splice(index, 1);
    cartOutput.innerText = shoppingCart;
    console.log(index);
  }
}

function changeItemDropdown(maxNumber) {
  // Validate maxNumber
  if (maxNumber > 1) {
    // Get Dropdown Element
    let dropDown = document.getElementById("itemNumDropdown");

    // Empty Dropdown
    dropDown.innerHTML = "";

    // Add options to dropDown
    for (var x = 1; x <= maxNumber; x++) {
      var tempElement = document.createElement("option");
      tempElement.innerHTML = x;
      tempElement.value = x;
      dropDown.appendChild(tempElement);
    }

    console.log("Dropdown updated!");
  } // end if
  else {
    console.log("Dropdown not updated!");
  }
} // end changeItemDropdown function
