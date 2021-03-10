var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
    var item = document.querySelector("#item").value;
    if(item != null) {
        itemList.push(item);
        document.querySelector("#item").value="";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList() {
    var list = "<ul>";
    for(var i = 0; i < itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>";

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for(var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
    // console.log(this);
    /* this 예약어는 (항상 그런 건 아니지만) 이벤트가 발생한 요소를 가리킴.
    여기선 <span class="close" id="0">X</span></li> 이런 게 나옴. */

}