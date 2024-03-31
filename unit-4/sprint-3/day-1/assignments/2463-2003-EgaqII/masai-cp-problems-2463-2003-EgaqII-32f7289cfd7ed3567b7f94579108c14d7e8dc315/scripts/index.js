// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const artURL = `${baseServerURL}/arts`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// art
let artTitleInput = document.getElementById("art-title");
let artImageInput = document.getElementById("art-image");
let artartistInput = document.getElementById("art-artist");
let artYearInput = document.getElementById(
  "art-year"
);
let artPaintBrushesInput = document.getElementById("art-paintbrushes");
let artPriceInput = document.getElementById("art-price");
let artMediumInput = document.getElementById("art-medium");
let artCreateBtn = document.getElementById("add-art");

// Update art
let updateArtIdInput = document.getElementById("update-art-id");
let updateArtTitleInput = document.getElementById("update-art-title");
let updateArtImageInput = document.getElementById("update-art-image");
let updateArtartistInput = document.getElementById(
  "update-art-artist"
);
let updateArtYearInput = document.getElementById(
  "update-art-year"
);
let updateArtPaintBrushesInput = document.getElementById(
  "update-art-paintbrushes"
);
let updateArtPriceInput = document.getElementById("update-art-price");
let updateArtMediumInput = document.getElementById("update-art-medium");
let updateArtBtn = document.getElementById("update-art");

//Update price
let updatePackageArtId = document.getElementById("update-package-art-id");
let updatePackageArtPackage = document.getElementById(
  "update-package-art-package"
);
let updatePackageArtBtn = document.getElementById("update-package-art");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterTemperaOnCanvas = document.getElementById("filter-Tempera-on-Canvas");
let filterOilOnCanvas = document.getElementById("filter-Oil-on-Canvas");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Arts Data
let artsData = [];
let queryParamString = null;
let pageNumber = 1;


async function fetchData(url,condition,page){
  try{
  let response = await fetch(`${url}?${condition || ""}_page=${page || 1}&_limit=5`);
  let totalData = response.headers.get("X-Total-Count");
  let noOfButtons = Math.ceil(totalData/5);
  createButtons(noOfButtons,condition);
  let data = await response.json();
  
  mainCard(data);
  console.log(data);
  }
  catch(error){
  console.log("Error:",error);
  }
  }

fetchData(artURL);
//
function mainCard(item){
  mainSection.innerHTML="";
  let card_list = document.createElement("div");
  card_list.className = "card-list";
  item.forEach((data)=>{
    let card=cardCreate(data);
    card_list.appendChild(card);
  })
  mainSection.appendChild(card_list);
}

function cardCreate(item) {
 
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", item.id);

    let card_img = document.createElement("div");
    card_img.className = "card-img";
    let img = document.createElement("img");
    img.src = item.image;
    img.alt = "art";

    card_img.appendChild(img);
    card.appendChild(card_img);

    let card_body = document.createElement("div");
    card_body.className = "card-body";

    let h5 = document.createElement("h5");
    h5.className = "card-title";
    h5.innerText = item.title;
    card_body.appendChild(h5);

    let p1 = document.createElement("p");
    p1.className = "card-artist";
    p1.innerText = item.artist;
    card_body.appendChild(p1);

    let p2 = document.createElement("p");
    p2.className = "card-year";
    p2.innerText = `year : ${item.year}`;
    card_body.appendChild(p2);

    let p3 = document.createElement("p");
    p3.className = "card-paintbrushes";
    p3.innerText = `paintbrushes : ${item.details.paintbrushes}`;
    card_body.appendChild(p3);

    let p4 = document.createElement("p");
    p4.className = "card-price";
    p4.innerText = item.price;
    card_body.appendChild(p4);

    let p5 = document.createElement("p");
    p5.className = "card-medium";
    p5.innerText = item.medium;
    card_body.appendChild(p5);

    let card_link = document.createElement("a");
    card_link.className = "card-link";
    card_link.setAttribute("data-id", item.id);
    card_link.href = "#";
    card_link.innerText = "Edit";

    card_link.addEventListener("click",(e)=>{
      e.preventDefault();
      updateAllField(item);
    })

    card_body.appendChild(card_link);

    let btn = document.createElement("button");
    btn.setAttribute("data-id", item.id);
    btn.className = "card-button";
    btn.innerText = "Delete";

    btn.addEventListener("click",(e)=>{
      deleteItem(item);
    })

    card_body.appendChild(btn);

    card.appendChild(card_body);
    
    return card;
}

//

 function createButtons(noOfButtons,condition){
  paginationWrapper.innerHTML = "";
  for(let i = 1; i <= noOfButtons; i++){
  let bttn = document.createElement("button");
  bttn.className = "pagination-button";
  bttn.innerText = i;
  
  bttn.addEventListener('click',() => {
    fetchData(artURL,condition,i);
   });
   paginationWrapper.appendChild(bttn);
  }
 }

//sorting and filtering.

sortAtoZBtn.addEventListener("click",(e)=>{
  fetchData(artURL,"_sort=price&_order=asc&");
})
sortZtoABtn.addEventListener("click",(e)=>{
  fetchData(artURL,"_sort=price&_order=desc&");
})

filterTemperaOnCanvas.addEventListener("click",(e)=>{
  fetchData(artURL,"medium=Tempera on Canvas&");
})

filterOilOnCanvas.addEventListener("click",(e)=>{
  fetchData(artURL,"medium=Oil on Canvas&");
})


//POST AND GET(ADD ART)
async function postData(url) {
  try{
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
      title: artTitleInput.value,
      artist: artartistInput.value,
      year: artYearInput.value,
      medium: artMediumInput.value,
      price: artPriceInput.value,
      details: {
        paintbrushes: [artPaintBrushesInput.value],
      },
      image: artImageInput.value,
      }),
    });
    fetchData(artURL);
  } 
catch(error){
  console.error(error);
}
}
artCreateBtn.addEventListener("click", () => {
  postData(artURL);
});


//DELETE problem 4.
async function deleteItem(data){
  try{
  let res=await fetch(`${artURL}/${data.id}`,{
    method:"DELETE",
    headers:{"Content-type" : "application/json"}
  })

  fetchData(artURL);
}catch(error){
  console.log(error);
}
}


//problem 5

function updateAllField(data){
  updateArtIdInput.value=data.id;
  updateArtTitleInput.value=data.title;
  updateArtImageInput.value=data.image;
  updateArtartistInput.value=data.artist;
  updateArtYearInput.value=data.year;
  updateArtPaintBrushesInput.value=data.details.paintbrushes.join(',');
  updateArtPriceInput.value=data.price;
  updateArtMediumInput.value=data.medium;

  updatePackageArtId.value=data.id;
  updatePackageArtPackage.value=data.price;
}

updateArtBtn.addEventListener("click",(e)=>{
 updateToData();
})

async function updateToData(){
  let res=await fetch(`${artURL}/${updateArtIdInput.value}`,{
    method:"PATCH",
    headers:{"Content-type" :"application/json"},
    body:JSON.stringify({
      id:updateArtIdInput.value,
      title:updateArtImageInput.value,
      image:updateArtImageInput.value,
      artist:updateArtartistInput.value,
      year:updateArtYearInput.value,
      details:{paintbrushes:updateArtPaintBrushesInput.value.split(",")},
      price:updateArtPriceInput.value,
      medium:updateArtMediumInput.value
    })
  })
  fetchData(artURL);
}


//problem 6
updatePackageArtBtn.addEventListener("click",(e)=>{
  packUpdate();
})

async function packUpdate(){
  let res=await fetch(`${artURL}/${updatePackageArtId.value}`,{
    method:"PATCH",
    headers:{"Content-type" :"application/json"},
    body:JSON.stringify({
      id:updatePackageArtId.value,
      price:updatePackageArtPackage.value
    })
  
  })
  fetchData(artURL);
}

//problem 9.
searchByButton.addEventListener("click",(e)=>{
  fetchData(artURL,`${searchBySelect.value}=${searchByInput.value}&`)
})