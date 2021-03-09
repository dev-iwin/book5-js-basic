var now = new Date();
var firstDay = new Date("2017-03-26");
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedDay = Math.round( (toNow - toFirst) / (1000*60*60*24));
document.querySelector("#accent").innerHTML = passedDay + "일";

calcDay(100);
calcDay(200);
calcDay(365);
calcDay(500);

function calcDay(days) {
    var future = toFirst + (days * 1000 * 60 * 60 * 24);
    var someday = new Date(future);
    var year = someday.getUTCFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector("#date" + days).innerHTML = year + "년" + month + "월" + date + "일";

}