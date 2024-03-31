// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const artURL = `${baseServerURL}/arts`;
let mainSection = document.getElementById("data-list-wrapper");

// pagination div
let paginationWrapper = document.getElementById("pagination-wrapper");

// navbar cart count
let cart = document.getElementById("cart");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");

sortAtoZBtn.addEventListener("click", (e)=>{
  fetchData(artURL,"_sort=price&_order=asc&");
})

let sortZtoABtn = document.getElementById("sort-high-to-low");

sortZtoABtn.addEventListener("click", (e)=>{
  fetchData(artURL,"_sort=price&_order=desc&");
})


let filterTemperaOnCanvas = document.getElementById("filter-Tempera-on-Canvas");

filterTemperaOnCanvas.addEventListener("click" , (e)=>{
  fetchData(artURL,"medium=Tempera on Canvas&");
})

let filterOilOnCanvas = document.getElementById("filter-Oil-on-Canvas");

filterOilOnCanvas.addEventListener("click" ,(e)=>{
  fetchData(artURL,"medium=Oil on Canvas&");
})

//Arts Data
let artsData = [];
let queryParamString = null;
let pageNumber = 1;


function fetchData(url,condition,pageNumber){
  fetch(`${url}?${condition ||""}_page=${pageNumber || 1}&_limit=5`)
  .then((res)=>{
    let totalPost=res.headers.get("X-Total-Count");
    let numOfButton=Math.ceil(totalPost/5);
    createButtons(numOfButton,condition);
    return res.json();
  })
  .then((data)=>{
    renderJobs(data);
   })
   .catch((error)=> console.error(error));
}


//intial fetch;
fetchData(artURL);

//render art card

function renderJobs(data){
  //clear
  mainSection.innerHTML="";
  const cardListDiv=document.createElement("div");
  cardListDiv.className="card-list";

  data.forEach(item=>{
    let card=createJobCard(item);
    cardListDiv.append(card);
  })
  mainSection.append(cardListDiv);
}



//function to create card.
function createJobCard(art){
  const card =document.createElement("div");
  card.className="card";
  
  const cardImg=document.createElement("div");
  cardImg.className="card-img;"

  const img =document.createElement("img");
  img.src=art.image;
  img.alt="art";
  cardImg.appendChild(img);
  card.appendChild(cardImg);

  const cardBody=document.createElement("div");
  cardBody.className="card-body";

  const h5T=document.createElement("h5");
  h5T.className="card-title";
  h5T.innerText=art.title;

  cardBody.append(h5T);

  const p1T=document.createElement("p");
  p1T.className="card-artist";
  p1T.innerText=art.artist;

  cardBody.append(p1T);

  const p2T=document.createElement("p");
  p2T.className="card-year";
  p2T.innerText=`year : ${art.year}`;

  cardBody.append(p2T);

  const p3T=document.createElement("p");
  p3T.className="card-paintbrushes";
  p3T.innerText= `paintbrushes : ${art.details.paintbrushes}`

  cardBody.append(p3T);

  const p4T=document.createElement("p");
  p4T.className="card-price";
  p4T.innerText= art.price;

  cardBody.append(p4T);


  const p5T=document.createElement("p");
  p5T.className="card-medium";
  p5T.innerText= art.medium;

  cardBody.append(p5T);


  let buttonTd=document.createElement("button");
  buttonTd.className="card-button";
  buttonTd.innerText="Add to cart";
  buttonTd.setAttribute("data-id",art.id);

  buttonTd.addEventListener("click" ,function(){
    
    addToCartHandle(art);
  })


  cardBody.append(buttonTd);
  card.append(cardBody);

  return card;
}


function createButtons(number,query){
  paginationWrapper.innerHTML="";

  for(let i=1; i <= number; i++){
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.addEventListener("click" , (e)=>{
      fetchData(artURL,query,i);
    })
    paginationWrapper.append(pageButton);
  }
}

//ADD To CART.

let updateCartCount=(arr)=>{
  let count=document.getElementById("cart");
  count.innerText=`Cart : ${arr.length}`;
}

let cartArr=JSON.parse(localStorage.getItem("cartData"))||[];
updateCartCount(cartArr);

let addToCartHandle=(ele)=>{
  if(cartArr.includes(ele)){
    alert("Already in Cart");
  }else{
    cartArr.push(ele);
    localStorage.setItem("cartData",JSON.stringify(cartArr));
    updateCartCount(cartArr);
    alert("added to cart");
  }
}