var direction = true;
var exchange = document.querySelector("#exchange");
var sUnit = document.querySelector("#s-unit");
var tUnit = document.querySelector("#t-unit");
var sValue = document.querySelector("#s-value");
var tValue = document.querySelector("#t-value");

exchange.addEventListener("click", changeDirection);
// sValue = document.createAttribute("value");
// tValue = document.createAttribute("value");
// console.log(sValue);
sValue.addEventListener("change", convert);

function changeDirection() {
    var temp = sValue.value;
    sValue.value = tValue.value;
    tValue.value = temp;
    /* var reverse = [sValue.value, tValue.value];
    sValue.value = reverse[1];
    tValue.value = reverse[0]; */
    if(direction) {
        sUnit.innerHTML = "&#8457;";
        tUnit.innerHTML = "&#8451;";
        direction = false;
    }
    else {
        sUnit.innerHTML = "&#8451;";
        tUnit.innerHTML = "&#8457;";
        direction = true;
    }
}

function convert() {
    if(direction) {
        // console.log(sValue.value) // .value를 빠트림
        tValue.value = (Number(sValue.value) * 9 / 5) + 32;
    }
    else{
        tValue.value = (Number(sValue.value) - 32) * 5 / 9;
    }
}