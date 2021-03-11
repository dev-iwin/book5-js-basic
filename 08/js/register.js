function newRegister() {
    var newP = document.createElement("p");
    var username = document.querySelector("#userName");
    var newText = document.createTextNode(username.value);
    newP.appendChild(newText);

    // 꼭 이 순서에 넣어야 하나? 그렇다! X버튼을 만든 뒤에 명단에 올려야 하니까!
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");
    // nameList.appendChild(newP); // 순서대로 삽입
    nameList.insertBefore(newP, nameList.childNodes[0]); // 기준점 앞에 삽입
    username.value = "";

    var removeBttns = document.querySelectorAll(".del");
    for(var i = 0; i < removeBttns.length; i++) {
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        });
    }
}