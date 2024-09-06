let shoowPreview = document.querySelector(".shoowPreview");
let price = document.querySelectorAll(".price");
let totale_price=document.querySelector(".totale_price");
let dataArray = [];
//contact file json=============
const contactFIleJson = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      dataArray = data;
      console.log(dataArray);
      creatAll();
    });
};
contactFIleJson();

//creatAll()
const creatAll = () => {
  shoowPreview.innerHTML = "";
  if (dataArray.length > 0) {
    dataArray.forEach((item, index) => {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("prentPreview");
      parentDiv.innerHTML = `
       <span class="price">$${item.amount}</span>
        <span class="design" data-index="${index}"></span>
        <span class="day">${item.day}</span>
            `;
      shoowPreview.appendChild(parentDiv);
    });
    document.querySelectorAll(".design").forEach((element) => {
      element.onclick = (e) => {
        const index = e.target.getAttribute("data-index");
        showPriceVolume(index);
      };
    });
 culculaterALl()
  }
};

//shoow price ====
const showPriceVolume = (index) => {
  const prices = document.querySelectorAll(".price");
  prices.forEach((priceEle, i) => {
    if (i == index) {
      priceEle.style.display = "flex";
    } else {
      priceEle.style.display = "none";
    }
  });
};
// calculater totale price=========
const culculaterALl=()=>{
    let prices=Array.from(document.querySelectorAll(".price")).map((item)=>{
        return parseFloat(item.textContent.replace("$",""));
    })
    let totale=prices.reduce((acc,current)=>acc+current,0);
    totale_price.innerHTML="$"+totale.toFixed(2);
}