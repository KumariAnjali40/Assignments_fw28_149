// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------


let url=`${baseServerURL}/users`;

let mainSection=document.getElementById("data-list-wrapper");

let paginationWrapper=document.getElementById("pagination-wrapper");

function fetchData(url,pageNum){
   fetch(`${url}?&_limit=10&_page=${pageNum || 1}`)
   .then((res)=>{
    let totalPost=res.headers.get("X-Total-Count");
    let totalButton=Math.ceil(totalPost/10);

    createButtons(totalButton,pageNum);
    return res.json();
   })
   .then((data)=>{
    createMainCard(data);
   })
}

fetchData(url);

function createMainCard(data){
  mainSection.innerHTML="";

  let cardList=document.createElement("div");
  cardList.className="card-list";

  data.forEach(item=>{
    let card=createCard(item);
    cardList.appendChild(card);
  })

  mainSection.appendChild(cardList);
}
//
function createCard(item){

  const card=document.createElement("div");
  card.className="card";
  card.setAttribute("data-id",item.id);

  const imgCard=document.createElement("div");
  imgCard.className="card__img";

  const image=document.createElement("img");
  image.src=item.avatar;
  image.alt=`${item.firstname}${item.lastname} image`;

  imgCard.appendChild(image);
  card.appendChild(imgCard);

  const cardBody=document.createElement("div");
  cardBody.className="card__body";

  const h3Tag=document.createElement("h3");
  h3Tag.className="card__item card__title";
  h3Tag.innerText=`${item.firstname} ${item.lastname}`;

  cardBody.appendChild(h3Tag);

  const cardItem=document.createElement("div");
  cardItem.className="card__item card__description";
  cardItem.innerHTML=item.email;

  cardBody.appendChild(cardItem);

  card.appendChild(cardBody);

  return card;
}

function createButtons(number,pageNum){
  paginationWrapper.innerHTML="";

  for(let i=1;i<=number;i++){
    const pageButton=document.createElement("button");
    pageButton.textContent=i;
    pageButton.className="pagination-button";
    pageButton.setAttribute("data-page-number",i);

    pageButton.addEventListener("click",(e)=>{
      fetchData(url,i);
    })
    paginationWrapper.appendChild(pageButton);
  }
}