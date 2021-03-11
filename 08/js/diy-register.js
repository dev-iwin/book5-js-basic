function newRegister() {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    // 명단에 넣기 전에 x버튼 생성
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);
    userName.value = "";

    // 명단에 넣은 후 x버튼의 기능을 넣어야 하나??
    var delBttns = document.querySelectorAll(".del");
    for(var i = 0; i = delBttns.length; i++) {
        delBttns[i].addEventListener("click", function() {
            if(this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}