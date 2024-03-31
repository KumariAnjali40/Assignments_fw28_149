// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const jobURL = `${baseServerURL}/jobs`;
let mainSection = document.getElementById("data-list-wrapper");

let paginationWrapper = document.getElementById("pagination-wrapper");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterGoogle = document.getElementById("filter-Google");
let filterMicrosoft = document.getElementById("filter-Microsoft");
let filtercapgemini = document.getElementById("filter-capgemini");


//Jobs Data
let jobsData = [];
let queryParamString = null;
let pageNumber = 1;

function fetchData(url,condition,pageNum) {
  fetch(`${url}?${condition || ""}_page=${pageNum || 1}&_limit=5`)
    .then((res) => {
     let totalPost = res.headers.get("X-Total-Count");
     let numOfButtons = Math.ceil(totalPost/5);
     createButtons(numOfButtons,condition);
     return res.json();
    })
    
    .then((data) => {
      renderJobs(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Initial fetch on page load
fetchData(jobURL);

// render job cards
function renderJobs(data) {
  // Clear existing content
  mainSection.innerHTML = "";

  const cardListDiv = document.createElement("div");
  cardListDiv.className = "card-list";

  data.forEach(item => {
    let card = createJobCard(item);
    cardListDiv.append(card);
  })
 mainSection.append(cardListDiv);
}
// Function to create a job card
function createJobCard(job) {
  const card=document.createElement("div");
  card.className="card";
  
  const cardImg = document.createElement("div");
  cardImg.className = "card-img";
  const img = document.createElement("img");
  img.src = job.image;
  img.alt = "Job";
  cardImg.appendChild(img);
  card.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const role = document.createElement("h5");
  role.className = "card-role";
  role.innerText = `Job role: ${job.role}`;
  cardBody.appendChild(role);

  const companyName = document.createElement("p");
  companyName.className = "card-companyName";
  companyName.innerText = job.companyName;
  cardBody.appendChild(companyName);

  const experience = document.createElement("p");
  experience.className = "card-experienceRequired";
  experience.innerText = `experience Required: ${job.experienceRequired} Yrs`;
  cardBody.appendChild(experience);

  const employmentType = document.createElement("p");
  employmentType.className = "card-employmentType";
  employmentType.innerText = `employment Type: ${job.employmentType}`;
  cardBody.appendChild(employmentType);

  const packageCTC = document.createElement("p");
  packageCTC.className = "card-packageCTC";
  packageCTC.innerText = job.packageCTC;
  cardBody.appendChild(packageCTC);

  const keySkills = document.createElement("p");
  keySkills.className = "card-keySkills";
  keySkills.innerText = `key Skills: ${job.keySkills}`;
  cardBody.appendChild(keySkills);

  card.appendChild(cardBody);
  return card;
}

function createButtons(number,query){
 
  paginationWrapper.innerHTML = "";
  for (let i = 1; i <= number; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.className = "pagination-button";
    pageButton.dataset.testid = `pagination-button-${i}`;
  
   pageButton.addEventListener('click',(e) => {
    fetchData(jobURL,query,i)
   })
    paginationWrapper.appendChild(pageButton);
  }
}
//filter data and sort data.
sortAtoZBtn.addEventListener("click",(e) => {
  fetchData(jobURL,"_sort=packageCTC&_order=asc&")
})
sortZtoABtn.addEventListener("click",(e) => {
  fetchData(jobURL,"_sort=packageCTC&_order=desc&")
})
filterGoogle.addEventListener("click",(e) => {
  fetchData(jobURL,"companyName=Google&")
})
filterMicrosoft.addEventListener("click",(e) => {
  fetchData(jobURL,"companyName=Microsoft&")
})
filtercapgemini.addEventListener("click",(e) => {
  fetchData(jobURL,"companyName=capgemini&")
})

