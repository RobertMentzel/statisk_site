// const productContainer = document.querySelector(".productContainer");
// const myProduct = new URLSearchParams(window.location.search).get(`id`);

// fetch(`https://kea-alt-del.dk/t7/api/products`)
//   .then((response) => response.json())
//   .then((data) => {
//     productContainer.innerHTML = ` <div class="t-shirt">
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="produktBillede" />
//         <div>
//           <h1>Product Information</h1>
//           <h3>Model Name</h3>
//           <p>${data.productdisplayname}</p>
//           <h3>Color</h3>
//           <p>${data.basecolour}</p>
//           <h3>Article Type</h3>
//           <p>${data.articletype}</p>

//           <h2>${data.brandname}</h2>
//           <p>${data.brandbio}</p>
//         </div>
//         <div class="add_to_basket">
//           <p class="large_text">
//           ${data.productdisplayname}
//           </p>
//           <p>Nike | Tshirts</p>
//           <label for="size">Choose a size:</label>

//           <select name="size" id="size">
//             <option value="small">S</option>
//             <option value="medium">M</option>
//             <option value="large">L</option>
//             <option value="x-large">XL</option>
//           </select>
//           <button>Add to basket</button>
//         </div>
//       </div>
//     `;
//   });
const productId = new URLSearchParams(window.location.search).get(`id`);
const productContainer = document.querySelector(".productContainer");
// const productId = 1163;
// fetch(`https://kea-alt-del.dk/t7/api/products/?id=${productId}`);
// .then((response) => response.json())
// .then((data) => {
//   productContainer.innerHTML =

let url = `https://kea-alt-del.dk/t7/api/products/${productId}`;

function showProduct(data) {
  const markup = ` <div class="t-shirt">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="produktbillede" />
        <div>
          <h1>Product Information</h1>
          <h3>Model Name</h3>
          <p>${data.productdisplayname}</p>
          <h3>Color</h3>
          <p>${data.basecolour}</p>
          <h3>Article Type</h3>
          <p>${data.articletype}</p>

          <h2>${data.brandname}</h2>
          <p>${data.brandbio}</p>
        </div>
        <div class="add_to_basket">
          <p class="large_text">
          ${data.productdisplayname}
          </p>
          <p>Nike | Tshirts</p>
          <label for="size">Choose a size:</label>

          <select name="size" id="size">
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="x-large">XL</option>
          </select>
          <button>Add to basket</button>
        </div>
      </div>
    `;
  productContainer.innerHTML = markup;
}
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showProduct(data));
}

getData();
// let url = `https://kea-alt-del.dk/t7/api/products?id=${myProduct}`;

// const mitArray = [];

// function visProdukt(data) {
//   const markingUp = data
//     .map(
//       (theproduct) => `<div class="t-shirt">
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/${theproduct.id}.webp" alt="produktBillede" />
//         <div>
//           <h1>Product Information</h1>
//           <h3>Model Name</h3>
//           <p>${theproduct.productdisplayname}</p>
//           <h3>Color</h3>
//           <p>${theproduct.basecolour}</p>
//           <h3>Article Type</h3>
//           <p>${theproduct.articletype}</p>

//           <h2>${theproduct.brandname}</h2>
//           <p>${theproduct.brandbio}</p>
//         </div>
//         <div class="add_to_basket">
//           <p class="large_text">
//           ${theproduct.productdisplayname}
//           </p>
//           <p>Nike | Tshirts</p>
//           <label for="size">Choose a size:</label>

//           <select name="size" id="size">
//             <option value="small">S</option>
//             <option value="medium">M</option>
//             <option value="large">L</option>
//             <option value="x-large">XL</option>
//           </select>
//           <button>Add to basket</button>
//         </div>
//       </div>`
//     )
//     .join(``);
//   productContainer.innerHTML = markingUp;
// }
// function collectData() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => visProdukt(data));
// }

// collectData();
