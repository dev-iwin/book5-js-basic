function compareNum(a, b) {
    if (a > b) {
        alert(a + "이/가 " + b + "보다 큽니다.");
    }
    else if (a == b) {
        alert(a + "와/과 " + b + "은/는 같습니다.");
    }
    else {
        alert(b + "24l이/가 " + a + "보다 큽니다.");
    }
};

var num1 = parseInt(prompt("1st num"));
var num2 = parseInt(prompt("2nd num"));

compareNum(num1, num2);