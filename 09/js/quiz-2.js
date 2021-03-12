var radius = document.querySelector("#radius");
var round = document.querySelector("#round");
var area = document.querySelector("#area");
var startBttn = document.querySelector("#start");
/* 굳이 변수로 정의하지 않아도 되는 값들을 정의하려다가
입렵된 값이 없는 항목의 .value를 변수에 대입하는 실수를 해서
동작이 안 되는 일이 발생하고 있다. 차라리 DOM을 풀어서 쓰는 게
비교적 직관적으로 이해가 잘 되니까 덜 실수하게 되는 것 같다. */

startBttn.addEventListener("click", calcCircle);

function calcCircle() {
    round.value = 2 * Number(radius.value) * Math.PI;
    area.value = Math.pow(Number(radius.value), 2) * Math.PI;
}

// sol에서는 왜 굳이 반지름 값을 Number로 감싸서 변환하지?? 우선 따라하기.