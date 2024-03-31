// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const stateURL = `${baseServerURL}/states`;
let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");

// state
let stateNameInput = document.getElementById("state-Name");
let stateImageInput = document.getElementById("state-image");
let statecapitalInput = document.getElementById("state-capital");
let statepopulationInput = document.getElementById("state-population");
let statelanguageInput = document.getElementById("state-language");
let stateGDPRankingInput = document.getElementById("state-GDPRanking");
let stateRegionInput = document.getElementById("state-region");
let statetourismPlacesInput = document.getElementById("state-tourismPlaces");
let stateCreateBtn = document.getElementById("add-state");

// Update state
let updateStateIdInput = document.getElementById("update-state-id");
let updatestateNameInput = document.getElementById("update-state-Name");
let updateStateImageInput = document.getElementById("update-state-image");
let updateStatecapitalInput = document.getElementById("update-state-capital");
let updateStatepopulationInput = document.getElementById(
  "update-state-population"
);
let updateStatelanguageInput = document.getElementById("update-state-language");
let updateStateGDPRankingInput = document.getElementById(
  "update-state-GDPRanking"
);
let updateStateRegionInput = document.getElementById("update-state-region");

let updateStatetourismPlacesInput = document.getElementById(
  "update-state-tourismPlaces"
);
let updateStateBtn = document.getElementById("update-state");

//Update GDPRanking
let updateGDPStateId = document.getElementById("update-GDP-state-id");
let updateGDPRankingStateGDPRanking = document.getElementById(
  "update-GDP-state-GDPRanking"
);
let updateGDPRankingStateBtn = document.getElementById("update-GDP-stateBtn");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterNortheast = document.getElementById("filter-North-East-India");
let filterWest = document.getElementById("filter-West-India");
let filterNorth = document.getElementById("filter-North-India");

//Search by name/language
let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//States Data
let statesData = [];
let queryParamString = null;
let pageNumber = 1;


//my code

async function fetchData(url,condition,page){
  try{
    let res=await fetch(`${url}?${condition || ""}_page=${page ||1}&_limit=5`);

    let totalData=res.headers.get("X-Total-Count");
    let totalButtons=Math.ceil(totalData/5);
    createButton(totalButtons,condition);

    let data=await res.json();
    // console.log(data);
    mainCard(data);
  }
  catch(error){
    console.log(error);
  }
}
fetchData(stateURL);

//create Main card;

function mainCard(item){
  mainSection.innerHTML="";
  let cardList=document.createElement("div");
  cardList.className="card-list";

  item.forEach((data)=>{
    let card=createCard(data);
    cardList.appendChild(card);
  })
  mainSection.appendChild(cardList);
}





//create one card.

function createCard(item){
  let card=document.createElement("div");
  card.className="card";
  card.setAttribute("data-id",item.id);

  let cardImg=document.createElement("div");
  cardImg.className="card-img";

  let image=document.createElement("img");
  image.src=item.image;
  image.alt="state";

  cardImg.appendChild(image);
  card.appendChild(cardImg);

  let cardBody=document.createElement("div");
  cardBody.className="card-body";
   
  let h5Tag=document.createElement("h5");
  h5Tag.className="card-stateName";
  h5Tag.innerText=item.stateName;
  
  cardBody.appendChild(h5Tag);

  let p1=document.createElement("p");
  p1.className="card-capital";
  p1.innerText=item.capital;
  
  cardBody.appendChild(p1);

  let p2=document.createElement("p");
  p2.className="card-population";
  p2.innerText=item.population;
  
  cardBody.appendChild(p2);


  let p3=document.createElement("p");
  p3.className="card-region";
  p3.innerText=item.region;
  
  cardBody.appendChild(p3);

  let p4=document.createElement("p");
  p4.className="card-language";
  p4.innerText=item.language;
  
  cardBody.appendChild(p4);

  let p5=document.createElement("p");
  p5.className="card-GDPRanking";
  p5.innerText=item.GDPRanking;
  
  cardBody.appendChild(p5);

  let p6=document.createElement("p");
  p6.className="card-tourismPlaces";
  p6.innerText=item.tourismPlaces;
  
  cardBody.appendChild(p6);

  let cardLink=document.createElement("a");
  cardLink.href="#";
  cardLink.setAttribute("data-id",item.id);
  cardLink.className="card-link";
  cardLink.innerText="Edit";

  cardLink.addEventListener("click",(e)=>{
    e.preventDefault();
    updateAllField(item);
  })

  cardBody.appendChild(cardLink);

  let btn=document.createElement("button");
  btn.setAttribute("data-id",item.id);
  btn.className="card-button";
  btn.innerText="Delete";

  btn.addEventListener("click",(e)=>{
    deleteItem(item);
  })

 cardBody.appendChild(btn);
 card.appendChild(cardBody);

 return card;

}


//pagination

function createButton(totalButton,condition){
  paginationWrapper.innerHTML="";
  
  for(let i=1;i<=totalButton;i++){
    let bttn=document.createElement("button");
    bttn.className="pagination-button";
    bttn.innerText=i;

    bttn.addEventListener("click",()=>{
      fetchData(stateURL,condition,i);
    });

    paginationWrapper.appendChild(bttn);
  }
}

//problem 3=>post and get;

async function postData(url){
  try{
    let res=await fetch(url,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        stateName:stateNameInput.value,
        image:stateImageInput.value,
        capital:statecapitalInput.value,
        population:statepopulationInput.value,
        language:statelanguageInput.value,
        GDPRanking:stateGDPRankingInput.value,
        region:stateRegionInput.value,
        tourismPlaces:statetourismPlacesInput,

      })
    })
    fetchData(stateURL);
  }catch(error){
    console.error(error);
  }
}
stateCreateBtn.addEventListener("click",()=>{
  postData(stateURL);
});


//problem 4==>delete;

async function deleteItem(data){
  try{
    let res=await fetch(`${stateURL}/${data.id}`,{
      method:"DELETE",
      headers:{
        "Content-type":"application/json"
      }
    })
    fetchData(stateURL);
  }catch(error){
    console.log(error);
  }
}


//problem 5==>update all field

function updateAllField(data){
  updateStateIdInput.value=data.id;
  updatestateNameInput.value=data.stateName;
  updateStateImageInput.value=data.image;
  updateStatecapitalInput.value=data.capital;
  updateStatepopulationInput.value=data.population;
  updateStatelanguageInput.value=data.language;
  updateStateGDPRankingInput.value=data.GDPRanking;
  updateStateRegionInput.value=data.region;
  updateStatetourismPlacesInput.value=data.tourismPlaces;

  updateGDPStateId.value=data.id;
  updateGDPRankingStateGDPRanking.value=data.GDPRanking;


}

updateStateBtn.addEventListener("click",(e)=>{
  updateToData();
})

async function updateToData(){
  let res=await fetch(`${stateURL}/${updateStateIdInput.value}`,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      id:updateStateIdInput.value,
      stateName:updatestateNameInput.value,
      image:updateStateImageInput.value,
      capital:updateStatecapitalInput.value,
      population:updateStatepopulationInput.value,
      language:updateStatelanguageInput.value,
      GDPRanking:updateStateGDPRankingInput.value,
      region:updateStateRegionInput.value,
      tourismPlaces:updateStatetourismPlacesInput.value

    })
  })
  fetchData(stateURL);
}


updateGDPRankingStateBtn.addEventListener("click",(e)=>{
  rankingUpdate();
})

async function rankingUpdate(){
  let res=await fetch(`${stateURL}/${updateGDPStateId.value}`,{
    method:"PATCH",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      id:updateGDPStateId.value,
      GDPRanking:updateGDPRankingStateGDPRanking.value,

    })
  })
  fetchData(stateURL);
}


//problem 7
//sort.
sortAtoZBtn.addEventListener("click",()=>{
  fetchData(stateURL,"_sort=GDPRanking&_order=asc&");
})

sortZtoABtn.addEventListener("click",()=>{
  fetchData(stateURL,"_sort=GDPRanking&_order=desc&");
})

//problem 8 ==>filter

filterNortheast.addEventListener("click",(e)=>{
  fetchData(stateURL,"region=North East India&");
})
filterWest.addEventListener("click",(e)=>{
  fetchData(stateURL,"region=West India&");
})
filterNorth.addEventListener("click",(e)=>{
  fetchData(stateURL,"region=North India&");
})

//searching
searchByButton.addEventListener("click",(e)=>{
  fetchData(stateURL,`${searchBySelect.value}=${searchByInput.value}&`);
})