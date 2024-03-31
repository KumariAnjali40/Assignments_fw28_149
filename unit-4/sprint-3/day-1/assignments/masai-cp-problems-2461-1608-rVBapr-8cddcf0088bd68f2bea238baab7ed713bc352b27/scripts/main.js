// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;

// Append div to main section
let mainSection = document.getElementById("data-list-wrapper");

//  add employees
let empNameInput = document.getElementById("employee-name");
let empImgInput = document.getElementById("employee-image");
let empDeptInput = document.getElementById("employee-dept");
let empSalaryInput = document.getElementById("employee-salary");
let empCreateBtn = document.getElementById("add-employee");

//Sorting 
let sortAtoZBtn = document.getElementById("sort-low-to-high");

sortAtoZBtn.addEventListener("click", (e) => {
  const sortingParameter = "_sort=salary&_order=asc";
  fetchData(employeeURL, sortingParameter);
});

let sortZtoABtn = document.getElementById("sort-high-to-low");

sortZtoABtn.addEventListener("click", (e) => {
  const sortingParameter = "_sort=salary&_order=desc";
  fetchData(employeeURL, sortingParameter);
});

//Filter 
let filterLessThan1LBtn = document.getElementById("filter-less-than-1L");
let filterMoreThanEqualLBtn = document.getElementById(
  "filter-more-than-equal-1L"
);

filterLessThan1LBtn.addEventListener("click", (e) => {
  fetchData(employeeURL, "_order=asc&salary_lte=99999");
});

filterMoreThanEqualLBtn.addEventListener("click", (e) => {
  fetchData(employeeURL, "_order=asc&salary_gte=100000");
});

// Update employees
let updateEmpIdInput = document.getElementById("update-employee-id");
let updateEmpNameInput = document.getElementById("update-employee-name");
let updateEmpImageInput = document.getElementById("update-employee-image");
let updateEmpDeptInput = document.getElementById("update-employee-dept");
let updateEmpSalaryInput = document.getElementById("update-employee-salary");
let updateEmpUpdateBtn = document.getElementById("update-employee");

//Update Salary
let updateScoreEmpId = document.getElementById("update-score-employee-id");
let updateScoreEmpSalary = document.getElementById(
  "update-score-employee-salary"
);
let updateScoreEmpSalaryButton = document.getElementById(
  "update-score-employee"
);

//Employee Data
let employeesData = [];



async function fetchData(url,condition){
  let res=await fetch(`${url}?${condition}`);
  let data=await res.json();
  mainCard(data);
}
fetchData(employeeURL);

function mainCard(data){
  mainSection.innerHTML="";
  const cardListDiv=document.createElement("div");
  cardListDiv.className="card-list";
  data.forEach(item=>{
    let card=createCard(item);
    cardListDiv.appendChild(card);
  })
  mainSection.appendChild(cardListDiv);
}



function createCard(employee){
  let card=document.createElement("div");
  card.className="card";
  card.setAttribute("data-id", `${employee.id}`);

  let cardImg=document.createElement("div");
  cardImg.className="card-img";

  let image=document.createElement("img");
  image.src = `${baseServerURL}${employee.image}`;

  image.alt="employee";

  cardImg.appendChild(image);
  card.appendChild(cardImg);

  let cardBody=document.createElement("div");
  cardBody.className="card-body";

  let h3Tag=document.createElement("h3");
  h3Tag.className="card-title";
  h3Tag.innerText=`${employee.name}`;

  cardBody.appendChild(h3Tag);

  let salary=document.createElement("div");
  salary.className="card-salary";
  salary.innerText=`${employee.salary}`;
  
  cardBody.appendChild(salary);

  
  let aTag = document.createElement("a");
  aTag.href = "#";
  aTag.setAttribute("data-id", `${employee.id}`);
  aTag.className="card-link"
  aTag.innerText="Edit";
  aTag.addEventListener("click",(e)=>{
    e.preventDefault();
    populateEditForms(employee);
  })
  cardBody.appendChild(aTag);
  
  card.appendChild(cardBody);

  return card;

}
async function postNewPost(url) {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: empNameInput.value,        
      image: empImgInput.value,       
      department:empDeptInput.value,  
      salary: empSalaryInput.value,    
    }),
  });
  let data = await res.json();
  // console.log(data);
}

empCreateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postNewPost(employeeURL);
});

  async function patchNewPost(url){
    try{
      let newUrl=`${url}/${updateScoreEmpId.value}`;
      let res=await fetch (newUrl,{
        method:"PATCH",
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify({
          id:updateEmpIdInput.value,
          name:updateEmpNameInput.value,
          image:updateEmpImageInput.value,
          department:updateEmpDeptInput.value,
          salary:updateEmpSalaryInput.value,
        }),
      });
      let data=await res.json();
      // console.log(data);
    }catch(error){
      console.log(error);
    }
  }
  updateEmpUpdateBtn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    patchNewPost(employeeURL);
  });

  async function updateSalary(url) {
    try {
      let newUrl = `${url}/${updateScoreEmpId.value}`;
      let res = await fetch(newUrl, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          salary: updateScoreEmpSalary.value, 
        }),
      });
    } catch (error) {  
      console.log(error);
    }
  }
  updateScoreEmpSalaryButton.addEventListener("click", (e) => {
    e.preventDefault();
    updateSalary(employeeURL);
  });
  function populateEditForms(data) {
        updateEmpIdInput.value = data.id;
        updateEmpNameInput.value = data.name;
        updateEmpImageInput.value = data.image;
        updateEmpDeptInput.value = data.department;
        updateEmpSalaryInput.value = data.salary;
        updateScoreEmpId.value = data.id;
        updateScoreEmpSalary.value = data.salary;
      
  }