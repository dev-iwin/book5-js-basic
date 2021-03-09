var num1 = parseInt(prompt("1st num"));
var num2 = parseInt(prompt("2nd num"));
var result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result);

function addNumber(a, b) {
    var sum = a + b;
    return sum;
}