function setCurrentTime(time) {
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

setCurrentTime();
