const API = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll("select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const amount = document.querySelector(".amount input");
const msg = document.querySelector(".msg");
const button = document.querySelector("button");
const swap = document.querySelector(".swap");

for (let select of dropdowns) {

    for (let currCode in countryList) {

        let option = document.createElement("option");

        option.value = currCode;
        option.innerText = currCode;

        if (select.name === "from" && currCode === "USD")
            option.selected = true;

        if (select.name === "to" && currCode === "INR")
            option.selected = true;

        select.append(option);

    }

    select.addEventListener("change", e => {

        updateFlag(e.target);

        updateExchangeRate();

    });

}

function updateFlag(element){

    let countryCode = countryList[element.value];

    element.parentElement.querySelector("img").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

}

async function updateExchangeRate(){

    let value = parseFloat(amount.value);

    if(isNaN(value)||value<=0){

        value=1;
        amount.value=1;

    }

    button.disabled=true;
    button.innerText="Loading...";

    try{

        const response = await fetch(`${API}/${fromCurr.value}`);

        const data = await response.json();

        const rate = data.rates[toCurr.value];

        const result = (value*rate).toFixed(2);

        msg.innerHTML=`
        ${value} <b>${fromCurr.value}</b>
        =
        <span style="color:#0077ff">${result}</span>
        <b>${toCurr.value}</b>
        `;

    }

    catch(error){

        msg.innerText="Unable to fetch exchange rate.";

        console.log(error);

    }

    button.disabled=false;
    button.innerText="Get Exchange Rate";

}

swap.addEventListener("click",()=>{

    let temp=fromCurr.value;

    fromCurr.value=toCurr.value;

    toCurr.value=temp;

    updateFlag(fromCurr);

    updateFlag(toCurr);

    updateExchangeRate();

});

button.addEventListener("click",(e)=>{

    e.preventDefault();

    updateExchangeRate();

});

amount.addEventListener("input",updateExchangeRate);

window.addEventListener("load",updateExchangeRate);