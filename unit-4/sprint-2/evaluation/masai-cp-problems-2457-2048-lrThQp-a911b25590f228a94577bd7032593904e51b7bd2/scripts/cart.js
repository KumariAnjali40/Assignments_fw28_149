let cartArr = JSON.parse(localStorage.getItem("cartData")) || [];

displayCart(cartArr);
updateCartCount(cartArr);
updateBillAmount(cartArr);

function updateCartCount(arr) {
    let count = document.getElementById("cart");
    count.innerText = `Cart : ${arr.length}`;
}

function updateBillAmount(arr) {
    let amount = arr.reduce((acc, cur) => {
        acc += +(cur.price);
        return acc;
    }, 0);
    let billAmount = document.getElementById("bill");
    billAmount.innerText = `Total bill amount : ${amount}`;
}

function displayCart(cartArr) {
    let body = document.getElementById("tbody");
    body.innerHTML = "";

    cartArr.forEach((ele, i) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        let img = document.createElement("img");
        img.src = ele.image;

        td1.append(img);

        let td2 = document.createElement("td");
        td2.innerText = ele.title;

        let td3 = document.createElement("td");
        td3.innerText = ele.artist;

        let td4 = document.createElement("td");
        td4.innerText = ele.year;

        let td5 = document.createElement("td");
        td5.innerText = ele.details.paintbrushes;

        let td6 = document.createElement("td");
        td6.innerText = ele.price;

        let td7 = document.createElement("td");
        td7.innerText = ele.medium;

        let td8 = document.createElement("td");
        td8.setAttribute("class", "RemoveBtn");
        td8.innerText = "Remove";

        td8.addEventListener("click", () => {
            removeEle(ele, i);
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        body.append(tr);
    });
}

function removeEle(ele, i) {
    cartArr.splice(i, 1);
    localStorage.setItem("cartData", JSON.stringify(cartArr));
    displayCart(cartArr);
    updateCartCount(cartArr);
    updateBillAmount(cartArr);
}
