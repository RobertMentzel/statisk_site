const kategori = document.querySelector("#categories");
let url = "https://kea-alt-del.dk/t7/api/categories";

const Array = [];

function showCategories(data) {
  const markUp = data
    .map(
      (element) => `<a href="produktliste.html?category=${element.category}"
          ><div class="box"> ${element.category}</div
        ></a>`
    )
    .join(``);
  kategori.innerHTML = markUp;
}
function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showCategories(data));
}

hentData();
