var check = document.querySelector("#shippingInfo");
check.addEventListener("click", checkBox);

function checkBox() {
    var name = document.querySelector("#billingName").value;
    var tel = document.querySelector("#billingTel").value;
    var addr = document.querySelector("#billingAddr").value;
    // 입력 안 된 shipping폼의 값을 변수로 만드니까, 대입이 안 되더라

    if(check.checked == true) {
        document.querySelector("#shippingName").value = name;
        document.querySelector("#shippingTel").value = tel;
        document.querySelector("#shippingAddr").value = addr;
    }
    else {
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
}