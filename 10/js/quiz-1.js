function openPopup() {
    var newWin = window.open("current.html", "", "width=400, height=50");
    if(newWin == null) {
        alert("팝업 차단 해제 요망");
    }
}

window.onload = openPopup();