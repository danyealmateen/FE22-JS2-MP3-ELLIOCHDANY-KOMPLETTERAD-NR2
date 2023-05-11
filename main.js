import anime from "/node_modules/animejs/lib/anime.es.js";
import _ from "/node_modules/underscore/underscore-esm.js";
let chips, cookie, gum, candy, soda,data,dbdata,cartItems;
const url = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/.json`;
init()



// let candyStock = localStorage.getItem("candyStock")
// let chipsStock = localStorage.getItem("chipsStock")
// let cookieStock = localStorage.getItem("cookieStock")
// let gumStock = localStorage.getItem("gumStock")
// let sodaStock = localStorage.getItem("sodaStock")


cartItems= JSON.parse(localStorage.getItem("cartItems"))
let stock = [0,0,0,0,0]
console.log(cartItems);
  if (cartItems !== null) {
    cartItems.forEach((item) => {
      switch (item.name) {
        case "Candy Skittles":
          stock[0]++
          break;
        case "Chips Estrella":
          stock[1]++
          break;
        case "Gum Stimorol":
          stock[2]++
          break;
        case "Cookies Marabou":
          stock[3]++
          break;
        case "Soda Pepsi":
          stock[4]++
          break;
        default:
          break;
      }
      // itemsInCart++;
      // totalPrice += item.price;
    });
  }
document.getElementById("candyAmount").innerText+="1".repeat(stock[0])
document.getElementById("chipsAmount").innerText+="1".repeat(stock[1])
document.getElementById("cookieAmount").innerText+="1".repeat(stock[2])
document.getElementById("gumAmount").innerText+="1".repeat(stock[3])
document.getElementById("sodaAmount").innerText+="1".repeat(stock[4])

console.log("stock from localstorage:",stock);

 async function init() {
  await getProducts();
  updateGUI();
  checkAndDisableCandyBtn();
  checkAndDisableSodaBtn();
  checkAndDisableCookieBtn();
  checkAndDisableChipsBtn();
  checkAndDisableGumBtn();
 }
// export async function postProducts() {

//   if (productArray.length !== 0) {
//     const init = {
//       method: "PUT",
//       body: JSON.stringify(productArray),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     };

//     const response = await fetch(url, init);
//     const data = await response.json();
//   }
// }

// let cartItems = JSON.parse(localStorage.getItem("cartItems"));
let productArray = [];
let itemToCartArray = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [];

const itemCounter = document.getElementById("itemCounter");


let itemsInCart = itemToCartArray? itemToCartArray.length : 0;
itemCounter.innerText = `Items in cart: ${itemsInCart}`;

const errorMessage = document.getElementById("errorMessage");

//How many products of each product the user wants to buy
const amountOfCandy = document.getElementById("candyAmount");
const amountOfChips = document.getElementById("chipsAmount");
const amountOfCookie = document.getElementById("cookieAmount");
const amountOfGum = document.getElementById("gumAmount");
const amountOfSoda = document.getElementById("sodaAmount");

//Checking if cart is empty or not and displaying items in the cart from the last session.
// if (cartItems !== null) {
//   cartItems.forEach((item) => {
//     if (item <= 0) {
//       itemsInCart++;
//     } else {
//       itemsInCart++;
//       itemCounter.innerHTML = `Items from last session ${itemsInCart}`;
//     }
//   });
// }

//Get the current stock value from localstorage if true - set it to 1 if false
// let candyStock = localStorage.getItem("candyStock") || 3;
// let chipsStock = localStorage.getItem("chipsStock") || 3;
// let cookieStock = localStorage.getItem("cookieStock") || 3;
// let gumStock = localStorage.getItem("gumStock") || 3;
// let sodaStock = localStorage.getItem("sodaStock") || 3;



//Products


// let chips = {
//   name: "Chips Estrella",
//   price: 10,
//   stock: chipsStock,
//   url: "https://swedishfoodshop.com/pub/media/catalog/product/cache/577ee1db3aa78a031ff4355fb63b3264/e/s/estrellavinag.jpg",
// };

// let cookie = {
//   name: "Cookies Marabou",
//   price: 10,
//   stock: cookieStock,
//   url: "https://static.mathem.se/shared/images/products/large/07622300589882_C1N1.jpeg",
// };

// let gum = {
//   name: "Gum Stimorol",
//   price: 10,
//   stock: gumStock,
//   url: "https://static.mathem.se/shared/images/products/large/05704592006116_c1n1.jpeg.jpg",
// };

// let candy = {
//   name: "Candy Skittles",
//   price: 10,
//   stock: candyStock,
//   url: "https://www.skittles.com/sites/g/files/fnmzdf586/files/migrate-product-files/bam8afcev37jvz2mfpnk.png",
// };

// let soda = {
//   name: "Soda Pepsi",
//   price: 10,
//   stock: sodaStock,
//   url: "https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1647879396/cloud/249826/Pepsi.jpg",
// };






//Cards pushed into the array
productArray.push(candy);
productArray.push(chips);
productArray.push(cookie);
productArray.push(gum);
productArray.push(soda);

//Sort products in alphabeticaly order
productArray = _.sortBy(productArray, "name");

//Cards
const productCard = document.getElementById("productCard");
const candyCard = document.getElementById("candyCard");
const chipsCard = document.getElementById("chipsCard");
const cookieCard = document.getElementById("cookieCard");
const gumCard = document.getElementById("gumCard");
const sodaCard = document.getElementById("sodaCard");

//Buttons
const candyBtn = document.getElementById("candyBtn");
const chipsBtn = document.getElementById("chipsBtn");
const cookieBtn = document.getElementById("cookieBtn");
const gumBtn = document.getElementById("gumBtn");
const sodaBtn = document.getElementById("sodaBtn");

// checkAndDisableCandyBtn();
candyBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemCounter.innerText = `Items in cart: ${itemsInCart}`;
  amountOfCandy.innerText += 1; //Adds how many of the product in the DOm
  itemToCartArray.push(candy);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  // candy.stock -= 1;
  data[0].stock--

  // localStorage.setItem("candyStock", candy.stock);
  // updateStock(0, candy.stock);
  // candyCard.innerText = `OUT OF STOCK!`;
  candyCard.style.textAlign = "center";
  //getProducts()
  //updateStock(0, candy.stock);
  // getProducts()
  updateGUI();
  checkAndDisableCandyBtn();

});
// checkAndDisableCandyBtn();

// checkAndDisableChipsBtn();
chipsBtn.addEventListener("click", () => {
  itemsInCart++;
  itemCounter.innerHTML = `${itemsInCart}`;
  itemCounter.innerText = `Items in cart: ${itemsInCart}`;
  amountOfChips.innerText += 1; //Adds how many of the product in the DOM
  itemToCartArray.push(chips);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  // chipsBtn.disabled = true;
  // chips.stock -= 1;
  data[1].stock--
  
  // localStorage.setItem("chipsStock", chips.stock);
  // updateStock(1, chips.stock);
  // chipsCard.innerText = `OUT OF STOCK!`;
  chipsCard.style.textAlign = "center";
  // getProducts()
  // updateStock(0, candy.stock);
  // getProducts()
  updateGUI();
  checkAndDisableChipsBtn();
});
// checkAndDisableChipsBtn();

// checkAndDisableCookieBtn();
cookieBtn.addEventListener("click", async () => {
  itemsInCart++;
  // itemCounter.innerHTML = `${itemsInCart}`;
  itemCounter.innerText = `Items in cart: ${itemsInCart}`;
  amountOfCookie.innerText += 1; //Adds how many of the product in the DOm
  itemToCartArray.push(cookie);
  cookieCard.style.textAlign = "center";
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  // cookieBtn.disabled = true;
  // cookie.stock -= 1;
  data[2].stock--

  // localStorage.setItem("cookieStock", cookie.stock);
  // await updateStock(2, cookie.stock);
  // cookieCard.innerText = `OUT OF STOCK!`;
  // await getProducts()
  updateGUI();
  checkAndDisableCookieBtn();
});
// checkAndDisableCookieBtn();

// checkAndDisableGumBtn();
gumBtn.addEventListener("click", async () => {
  itemsInCart++;
  // itemCounter.innerHTML = `${itemsInCart}`;
  itemCounter.innerText = `Items in cart: ${itemsInCart}`;
  amountOfGum.innerText += 1; //Adds how many of the product in the DOm
  itemToCartArray.push(gum);
  gumCard.style.textAlign = "center";

  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  // gumBtn.disabled = true;
  // gum.stock -= 1;
  data[3].stock--

  // localStorage.setItem("gumStock", gum.stock);
  // await updateStock(3, gum.stock);
  // gumCard.innerText = `OUT OF STOCK!`;
  // await getProducts()
  updateGUI();
  checkAndDisableGumBtn();
});
// checkAndDisableGumBtn();

// checkAndDisableSodaBtn();
sodaBtn.addEventListener("click", () => {
  itemsInCart++;
  // itemCounter.innerHTML = `${itemsInCart}`;
  itemCounter.innerText = `Items in cart: ${itemsInCart}`;
  amountOfSoda.innerText += 1;
  itemToCartArray.push(soda);
  localStorage.setItem("cartItems", JSON.stringify(itemToCartArray));
  // sodaBtn.disabled = true;
  // soda.stock -= 1;
  data[4].stock--

  // localStorage.setItem("sodaStock", soda.stock);
  // updateStock(4, soda.stock);
  // sodaCard.innerText = `OUT OF STOCK!`;
  sodaCard.style.textAlign = "center";
  //  getProducts()
  updateGUI();
  checkAndDisableSodaBtn();
});
// checkAndDisableSodaBtn();

//Post products

// postProducts();

//Get products
async function getProducts() {

  try {
    const response = await fetch(url);
    const _data = await response.json();
    console.log(_data)
    data=_data
    candy = _data[0];
    chips = _data[1];
    cookie = _data[2];
    gum = _data[3];
    soda = _data[4];

   // console.log(candy)

  } catch (error) {
    console.log("Connection problem");
    errorMessage.innerText = `CONNECTION PROBLEMS`;
  }
}

function updateGUI
(){
  console.log(data);
  candyCard.innerHTML = `
  ${data[0].name}
  Price: ${data[0].price}
  Stock: ${data[0].stock}
  <img id="url" src="${data[0].url}" />`;

    chipsCard.innerHTML = `
  ${data[1].name} 
  Price: ${data[1].price} 
  Stock: ${data[1].stock}<br>
  <img id="url" src="${data[1].url}" />`;

    cookieCard.innerHTML = `
   ${data[2].name} <br>
  Price: ${data[2].price} 
  Stock: ${data[2].stock}
  <img id="url" src="${data[2].url}" />`;

    gumCard.innerHTML = `
   ${data[3].name} 
<   Price: ${data[3].price} 
   Stock: ${data[3].stock}
  <img id="url" src="${data[3].url}" />`;

    sodaCard.innerHTML = `
  ${data[4].name} 
  Price: ${data[4].price} 
  Stock: ${data[4].stock}
  <img id="url" src="${data[4].url}" />`;
}
// async function updateStock(product, newStock) {
//   const patchUrl = `https://della-311b1-default-rtdb.europe-west1.firebasedatabase.app/${product}.json`;

//   const init = {
//     method: "PATCH",
//     body: JSON.stringify({ stock: newStock }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };
//   const response = await fetch(patchUrl, init);
//   const data = await response.json();
// }

function checkAndDisableCandyBtn() {
  console.log(candy)
  if (candy.stock -stock[0] <= 0) {
    candyBtn.disabled = true;
  } else {
    candyBtn.disabled = false;
  }
}

function checkAndDisableChipsBtn() {
  if (chips.stock-stock[1]  <= 0) {
    chipsBtn.disabled = true;
  } else {
    chipsBtn.disabled = false;
  }
}

function checkAndDisableCookieBtn() {
  if (cookie.stock-stock[2]  <= 0) {
    cookieBtn.disabled = true;
  } else {
    cookieBtn.disabled = false;
  }
}

function checkAndDisableGumBtn() {
  if (gum.stock -stock[3] <= 0) {
    gumBtn.disabled = true;
  } else {
    gumBtn.disabled = false;
  }
}

function checkAndDisableSodaBtn() {
  if (soda.stock-stock[4] <= 0) {
    sodaBtn.disabled = true;
  } else {
    sodaBtn.disabled = false;
  }
}

setTimeout(function () {
  getProducts();
}, 100);

anime({
  targets: "div",
  duration: 1000,
  rotate: 360,
});
