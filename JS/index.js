let hebdenBridge = document.querySelector("#hebden-bridge");
let hebdenBridgedate = hebdenBridge.querySelector(".date");
let hebdenBridgeTime = hebdenBridge.querySelector(".time");
let hebdenBridgeTimeZone = moment().tz("Europe/London");

hebdenBridgedate.innerHTML = hebdenBridgeTimeZone.format("dddd Do MMMM");
hebdenBridgeTime.innerHTML = hebdenBridgeTimeZone.format("HH:mm");
