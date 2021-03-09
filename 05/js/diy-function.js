function add(a, b) {
    var sum = a + b;
    return sum;
}

var num1 = parseInt(prompt("1st num"));
var num2 = parseInt(prompt("2nd num"));

var result = add(num1, num2);
document.write(result)