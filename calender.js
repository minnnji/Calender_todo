//오늘 날짜찍기
var today = new Date();
var firstday = new Date(today.getFullYear(), today.getMonth(), 1);
var lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0);
var days = [];

var calendarYM = document.getElementById('calendarYM');
var td = document.querySelectorAll('td');

//테이블 그리기
var table = document.getElementById('table');
var rowlen = table.rows.length;
var rowCount = 2;

//행 초기화
function del() {
    for (var i = 0; i < rowlen+2; i++) {
        table.deleteRow(2);
        rowlen = table.rows.length;
    }
    rowCount = 2; //요일 부분까지
}

function calendar() {
    calendarYM.innerHTML = today.getFullYear() + "." + (today.getMonth()+1);
    console.log(firstday);
    console.log(lastDay);

    // var count = 1;
    // for (var i = firstday.getDay(); i < lastDay.getDate(); i++) {
    //     td[i].textContent = count;
    //     count++;
    // };

    //1일 전까지 빈 셀 생성
    var row = table.insertRow();
    for (var i = 1; i < firstday.getDay()+1; i++) {
        var cell = row.insertCell();
    }

    //1일부터 말일까지 셀 생성
    for (var i = 1; i < lastDay.getDate()+1; i++) {
        var cell = row.insertCell();
        cell.innerText = i;
        if (table.rows[rowCount].cells.length % 7 === 0 && rowCount < 6) { //? 6주차가 되면..
            var row = table.insertRow();
            rowCount++;
        }
    }
    rowlen = table.rows.length;
    };

    //한달치 날짜 배열에 넣기
    for (var i = 1; i < lastDay.getDate()+1; i++) {
        days.push(today.getFullYear() + "." + today.getMonth() + "." + i);
    };

//이전 달
function prevMM() {
    del();
    today = new Date(today.getFullYear(), (today.getMonth()-1));
    firstday = new Date(today.getFullYear(), today.getMonth(), 1);
    lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0);
    calendar();
}

//다음 달
function nextMM() {
    del();
    today = new Date(today.getFullYear(), (today.getMonth()+1));
    firstday = new Date(today.getFullYear(), today.getMonth(), 1);
    lastDay = new Date(today.getFullYear(), today.getMonth()+1, 0);
    calendar();
}

calendar();
document.getElementById('btn_pre').addEventListener("click", prevMM);
document.getElementById('btn_next').addEventListener("click", nextMM);