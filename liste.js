const productlist = document.querySelector("#produktliste");
let url = "https://kea-alt-del.dk/t7/api/products";

const mitArray = [];

function showProducts(data) {
  const markup = data
    .map(
      (product) => `<div class="produkt">
      <a href="produkt.html">
          <img src="${`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produktbillede`}" />
          <h3>${product.productdisplayname}</h3>
          <p>${product.articletype} | ${product.brandname}</p>
          
          <p>${product.price} kr.</p>
          </a>
        </div>`
    )
    .join(``);
  productlist.innerHTML = markup;
}
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProducts(data));
}

getData();
