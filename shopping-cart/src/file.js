let cart = document.getElementById("cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateItems = () => {
  return (cart.innerHTML = itemsData
    .map((e) => {
      let { id, name, price, desc, img } = e;
      let search = basket.find((x) => x.id === id) || [];
      return `
      
      <div class='shadow'>
      <div id=items-id-${id} class="cart-container">
    <a href="${img}" data-lightbox="itemsImg" >
   <img src="${img}" alt="cart"/>
   </a>
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="money">
        <h2>₹${price}</h2>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="counts">
           ${search.item === undefined ? 0 : search.item} 
           </div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
    })
    .join(""));
};
generateItems();

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
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  //   console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((i) => i.item).reduce((e, i) => e + i, 0);
};
calculation();
