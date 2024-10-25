function setCurrentTime() {
  let hebdenBridge = document.querySelector("#hebden-bridge");
  let hebdenBridgeDate = hebdenBridge.querySelector(".date");
  let hebdenBridgeTime = hebdenBridge.querySelector(".time");
  let hebdenBridgeTimeZone = moment().tz("Europe/London");

  hebdenBridgeDate.innerHTML = hebdenBridgeTimeZone.format("dddd Do MMMM");
  hebdenBridgeTime.innerHTML = hebdenBridgeTimeZone.format("HH:mm");

  let oahu = document.querySelector("#oahu");
  let oahuDate = oahu.querySelector(".date");
  let oahuTime = oahu.querySelector(".time");
  let oahuTimeZone = moment().tz("Pacific/Honolulu");

  oahuDate.innerHTML = oahuTimeZone.format("dddd Do MMMM");
  oahuTime.innerHTML = oahuTimeZone.format("HH:mm");

  let bangkok = document.querySelector("#bangkok");
  let bangkokDate = bangkok.querySelector(".date");
  let bangkokTime = bangkok.querySelector(".time");
  let bangkokTimeZone = moment().tz("Asia/Bangkok");

  bangkokDate.innerHTML = bangkokTimeZone.format("dddd Do MMMM");
  bangkokTime.innerHTML = bangkokTimeZone.format("HH:mm");

  let newOrleans = document.querySelector("#new-orleans");
  let newOrleansDate = newOrleans.querySelector(".date");
  let newOrleansTime = newOrleans.querySelector(".time");
  let newOrleansTimeZone = moment().tz("America/Matamoros");

  newOrleansDate.innerHTML = newOrleansTimeZone.format("dddd Do MMMM");
  newOrleansTime.innerHTML = newOrleansTimeZone.format("HH:mm");
}

function selectCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("HH:mm"));
  if (cityTimeZone == "Africa/Maseru") {
    let firstCityElement = document.querySelector("#change-one");
    firstCityElement.innerHTML = `<div class="city city-one" >
        <div>
          <h2 id="city-one">Cape Town, South Africa</h2>
          <div class="date">${cityTime.format("dddd Do MMMM")}</div>
        </div>
        <div class="time">${cityTime.format("HH:mm")}</div>
      </div>`;
  }
  if (cityTimeZone == "Australia/Darwin") {
    let secondCityElement = document.querySelector("#change-two");
    secondCityElement.innerHTML = ` <div class="city city-two" >
          <div>
            <h2>Alice Springs, Australia</h2>
            <div class="date">${cityTime.format("dddd Do MMMM")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm")}</div>
        </div>
    `;
  }
  if (cityTimeZone == "NZ") {
    let thridCityElement = document.querySelector("#change-three");
    thridCityElement.innerHTML = `
      <div class="city city-three" id="bangkok">
        <div>
          <h2>Auckland, New Zeland</h2>
          <div class="date">${cityTime.format("dddd Do MMMM")}</div>
        </div>
        <div class="time">${cityTime.format("HH:mm")}</div>
      </div> `;
  }
  if (cityTimeZone == "America/Argentina/Buenos_Aires") {
    let fourthCityELement = document.querySelector("#change-four");
    fourthCityELement.innerHTML = `
      <div id="change-four">
        <div class="city city-four" id="new-orleans">
          <div>
            <h2>Buenos Aires, Argentina</h2>
            <div class="date">${cityTime.format("dddd Do MMMM")}</div>
          </div>

          <div class="time">${cityTime.format("HH:mm")}</div>
        </div>
      </div>
        `;
  }
}

setCurrentTime();
setInterval(setCurrentTime, 1000);

let dropBox = document.querySelector("#drop-box");
dropBox.addEventListener("change", selectCity);
