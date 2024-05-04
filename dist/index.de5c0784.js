const clothesList = document.querySelector(".clothes__list");
const url = "http://localhost:3000/clothes";
const fetchClothes = ()=>fetch(url).then((res)=>{
        if (!res.ok) console.log("!res.ok");
        return res.json();
    }).then((data)=>{
        data.forEach((element)=>{
            clothesList.insertAdjacentHTML("afterbegin"`<li>
           <h2>${element.name}</h2>
           <p>${element.category}</p>
           <p>${element.price}</p>
          </li>`);
        });
    });
fetchClothes();

//# sourceMappingURL=index.de5c0784.js.map
