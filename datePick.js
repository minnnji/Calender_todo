var picked = document.querySelector('table');
var td = document.querySelectorAll('td');
var day1 = document.querySelector('.day');
var day1_ko = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
var pickedDate
//var fullDate = [];

picked.addEventListener('click', function (ev) {
    //var dayday = new Date(today.getFullYear() + "." + (today.getMonth()+1) + "." + ev.target.innerText); //dayday 선언이 안되는데 콘솔엔 찍혀..
    //console.log(dayday); ??????

    //선택된 셀이 2번째 행 이후 + 셀이 비어있지 않을 때 동작
    //선택된 날짜정보 뿌려주기
    if(ev.path[1].rowIndex > 1 && ev.target.innerText !== "") {
        ev.path[0].style.backgroundColor = "skyblue";
    
        var pickedCell = new Date(today.getFullYear() + "." + (today.getMonth()+1) + "." + ev.target.innerText);
        var pickedCellString = day1.innerText = pickedCell.getFullYear() + "년 " + (pickedCell.getMonth()+1) + "월 " + pickedCell.getDate() + "일 " + day1_ko[pickedCell.getDay()];
        pickedDate = pickedCellString;
    }
});
