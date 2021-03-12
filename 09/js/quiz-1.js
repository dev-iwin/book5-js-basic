var price = 24000;
var sideMenues = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price + "원";

for(var j = 0; j < sideMenues.length; j++) {
    sideMenues[j].addEventListener("click", function() {
        if(this.checked == true) {
            price += parseInt(this.value);
        }
        else {
            price -= parseInt(this.value);
        }
        total.value = price + "원";
    });
}
