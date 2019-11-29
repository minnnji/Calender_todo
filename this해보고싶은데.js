//오늘 날짜찍기
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();

console.log(year + "년 " + (month+1) + "월 " + date + "일");

//이번달 1일, 마지막일
var this_firstDay = new Date(year, month, 1);
var this_lastDay = new Date(year, month+1, 0);

console.log(this_firstDay, this_lastDay);

console.log("이번달 첫째날 " + this_firstDay.getDate() + "일, 이번달 마지막날 " + this_lastDay.getDate() + "일"); //1, 30


function thisInfo() {
    console.log(this.year, this.month+1, this.date); // firstDay정보 안갖고옴......
}

var firstDay = {
    year : this_firstDay.getFullYear(),
    month : this_firstDay.getMonth(),
    date : 1
}

thisInfo(firstDay);