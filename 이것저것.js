//오늘 날짜찍기
var today = new Date();
var date = today.getDate();

var calendarYM = document.getElementById('calendarYM');

function calenderHeader (month) {
    calendarYM.innerHTML = today.getFullYear() + "." + month;
}

calenderHeader(today.getMonth()+1);

var btn_pre = document.getElementById('btn_pre');
var btn_next = document.getElementById('btn_next');

btn_pre.addEventListener("click", calenderHeader(today.getMonth()-1));
btn_next.addEventListener("click", calenderHeader(today.getMonth()+1));




//달력 헤더
calendarYM.innerHTML = year + "." + (month+1);

btn_pre.addEventListener("click", function() {
    calendarYM.innerHTML = year + "." + month-- ;
});
btn_next.addEventListener("click", function() {
    calendarYM.innerHTML = year + "." + month++ ;
});



//이번달 1일, 마지막일
var this_firstDay = new Date(year, month, 1);
var this_lastDay = new Date(year, month+1, 0);

console.log(this_firstDay, this_lastDay);

console.log("이번달 첫째날 " + this_firstDay.getDate() + "일, 이번달 마지막날 " + this_lastDay.getDate() + "일"); //1, 30

//이번달 1일부터 막일까지 찍기
for (var i = 1; i < this_lastDay.getDate()+1; i++) {
    console.log(i);
}

행 추가하고 셀에 날짜 하나씩 넣기