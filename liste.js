const myCategory = new URLSearchParams(window.location.search).get(`category`);
let allData = [];
const productlist = document.querySelector("#produktliste");
let url = `https://kea-alt-del.dk/t7/api/products?category=${myCategory}`;

const mitArray = [];

document.querySelectorAll("[data-filter]").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  const filter = this.dataset.filter; // Corrected attribute name
  let fraction;

  if (filter === "All") {
    fraction = allData;
  } else if (filter === "Discount") {
    fraction = allData.filter((product) => product.discount > 0);
  } else if (filter === "In-Stock") {
    fraction = allData.filter((product) => product.soldout == 0);
  }
  console.log("Products to be shown:", fraction);
  showProducts(fraction);
}

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showProducts(allData);
  });

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
