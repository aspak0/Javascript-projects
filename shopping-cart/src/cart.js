let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((i) => i.item).reduce((e, i) => e + i, 0);
};
calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((e) => {
        let { id, item } = e;
        let search = itemsData.find((x) => x.id === id) || [];
        let { img, name, price } = search;
        return `
        <div class="cart-item">

        <a href="${img}" data-lightbox="itemsImg" >
        <img  width="100" height="100" src=${img} alt=""/>
        </a> 
        <div class="cart-details" >
        <div class="title-price">
         <h4 class="tPrice">
         <p>${name}</p>
         <p class="cartItemPrice">₹${price}</p>
         </h4>
         <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>

        </div>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="counts">${item}</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
        <h3>₹ ${item * price}</h3>
        </div>
        </div>
        `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <h2>Cart Is Empty</h2>
        <a href="index.html">
        <button class="homeBtn">Back to Home</button>
        </a>
        `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((e) => e.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  //   console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  //   console.log(selectedItem.id);
  basket = basket.filter((e) => e.id !== selectedItem.id);
  generateCartItems();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearAll = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((e) => {
        let { item, id } = e;
        let search = itemsData.find((x) => x.id === id) || [];
        return item * search.price;
      })
      .reduce((e, i) => e + i, 0);
    label.innerHTML = `
      <h2>Total Bill: ₹ ${amount}</h2>
      <div>
      <button class="checkOut">Checkout</button>
      <button onclick="clearAll()" class="removeAll">Clear All</button>
      </div>
      `;
  } else return;
};
totalAmount();
