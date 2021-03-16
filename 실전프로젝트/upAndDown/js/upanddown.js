var count = 0;
var num = Math.floor(Math.random() * 100 + 1);
var check = document.querySelector("#check");

check.addEventListener("click", compareNum);

function compareNum() {
    var userNum = document.querySelector("#try").value;
    if(userNum >= 1 && userNum <= 100) {
        if(num > userNum) {
            document.querySelector("#display").innerHTML = "UP";
        }
        else if(num < userNum) {
            document.querySelector("#display").innerHTML = "DOWN";
        }
        else {
            document.querySelector("#display").innerHTML = "성공!";
        }
        count++;
        document.querySelector("#counter").innerHTML = count + "회";
        document.querySelector("#try").select();
        // userNum.select(); // 이렇게는 안 되네
    }
    else {
        alert("범위에 알맞은 값을 입력해주세요.")
    }
}

/* 나의 시도

var num = Math.floor(Math.random() * 100 + 1); // 23;
// var userNum = document.querySelector("#try").value; // 함수 밖에 변수를 정의했더니, 50을 입력했을 때 UP이 나옴.
var check = document.querySelector("#check");
// var reset = document.querySelector("#reset");

check.addEventListener("click", compareNum);
// check.onclick = compareNum(); // 이렇게 했을 때는 왜 클릭도 전에 눌렸던 걸까?

function compareNum() {
    var userNum = document.querySelector("#try").value;
    if(userNum > 100) {
        document.querySelector("#display").innerHTML = "게임범위를 확인해주세요"
    }
    else if(num > userNum) {
        document.querySelector("#display").innerHTML = "UP";
    }
    else if(num < userNum) {
        document.querySelector("#display").innerHTML = "DOWN";
    }
    else if(num == userNum) {
        document.querySelector("#display").innerHTML = "게임 끝";
    }
    else {
        document.querySelector("#display").innerHTML = "숫자를 입력하세요";
    }
}
// */