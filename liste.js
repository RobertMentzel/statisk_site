const myCategory = new URLSearchParams(window.location.search).get(`category`);

const productlist = document.querySelector("#produktliste");
let url = `https://kea-alt-del.dk/t7/api/products?category=${myCategory}`;

const mitArray = [];

function showProducts(data) {
  const markup = data
    .map(
      (product) => `<div class="produkt ${product.soldout && "soldOut"}">
      
      <a href="produkt.html?id=${product.id}">
      <span class="onSale ${product.discount && "visible"}">${product.discount}%</span>
          <img src="${`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produktbillede`}"  />
          <h3>${product.productdisplayname}</h3>
          <p>${product.articletype} | ${product.brandname}</p>
        <span class="newPrice ${product.discount && "visible"}"> Now: ${Math.floor(
        product.price - product.price * (product.discount / 100)
      )} kr.</span>
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
