const clothesList = document.querySelector(".clothes__list");
const btnDeleteCard = document.querySelector(".delete__btn");

const url = "http://localhost:3000/clothes";

const fetchClothes = () =>
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        console.log("!res.ok");
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((element) => {
        clothesList.insertAdjacentHTML(
          "afterbegin",
          `<li>
           <h2>${element.name}</h2>
           <p>${element.category}</p>
           <p>${element.price}</p>
          </li>`
        );
      });
    });
fetchClothes();

btnDeleteCard.addEventListener("click", () => {
  const deleteId = document.getElementById("deleteId");
  console.log(deleteId.value);
  fetch(`http://localhost:3000/clothes/${deleteId.value}`, {
    method: "DELETE",
  });
});
