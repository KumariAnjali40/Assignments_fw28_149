// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
let mainSection = document.getElementById("data-list-wrapper");
let getRecipesBtn = document.getElementById("fetch-recipes");
let totalResult = document.querySelector(".total-results");
const urlAllRecipes = `${baseServerURL}/recipes`;

let recipesArray = [];


async function fetchData(page){
  try{
    let res=await fetch(`${urlAllRecipes}?$_page=${page||1}&_limit=5`);
    let data=await res.json();
    mainCard(data);
  }catch(error){
    console.log(error);
  }
}
fetchData(urlAllRecipes);

if(totalResult.innerHTML==0){
  totalResult.innerHTML=+(totalResult.innerHTML)+5;
}
//create main card
function mainCard(item){
    item.forEach((data)=>{
      mainSection.append(createCard(data));
    });
}
//create card
function createCard(item){
    const card=document.createElement("div");
    card.classList.add('recipe-card');

    const imageDiv=document.createElement('div');
    imageDiv.classList.add('recipe-image');

    const image=document.createElement('img');
    image.src=item.image;
    image.alt=item.name;
    imageDiv.appendChild(image);

    const detail=document.createElement("div");
    detail.classList.add('recipe-details');

    const heading=document.createElement("h2");
    heading.classList.add('recipe-name');
    heading.textContent=item.name;

    const pTage=document.createElement('p');
    pTage.classList.add('recipe-price');
    pTage.textContent=item.price;

    detail.appendChild(heading);
    detail.appendChild(pTage);
    card.appendChild(imageDiv);
    card.appendChild(detail);

    return card;
}

let page=1;
window.addEventListener("scroll",()=>{
  let {clientHeight,scrollTop,scrollHeight}=document.documentElement;

  if(Math.ceil(clientHeight+scrollTop)>=scrollHeight){
    page++;
    fetchData(page);
    totalResult.innerHTML=+(totalResult.innerHTML)+5;
  }
})
