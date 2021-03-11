var bigPic = document.querySelectorAll("#prod-pic img")[0];
var smallPics = document.querySelectorAll(".small");

for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener("click", showBig);
}

function showBig() {
    bigPic.src = this.src;
}