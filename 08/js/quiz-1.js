var myText = document.querySelector("#myText");
myText.addEventListener("mouseover", changeEffect);
myText.addEventListener("mouseout", removeEffect);

function changeEffect() {
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";
}

function removeEffect() {
    myText.style.fontSize = "";
    myText.style.color = "";
    myText.style.backgroundColor = "";
}