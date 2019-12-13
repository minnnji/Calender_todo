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

        view();
    }
});

var inputText = document.getElementById('inputText');
var todoList = document.getElementById('todo');
var doneList = document.getElementById('done');
var todoObj = {};
var todoObjId

function todoObj_add() {
       //선택된 날짜가 key로 있으면 value 추가
    if (pickedDate in todoObj) {
        todoObj[pickedDate].unshift({
            text : inputText.value,
            complete : false,
            id : todoObjId
        });
        todoObjId++;
        localStorage.setItem(pickedDate, JSON.stringify(todoObj[pickedDate])); //?덮어쓰기 말고 추가하는 형식이 낫지않을까
    //선택된 날짜가 key로 없으면 key랑 배열 생성해서 추가
    } else {
        todoObjId = 1;
        todoObj[pickedDate] = [{
            text : inputText.value,
            complete : false,
            id : todoObjId
        }];
        todoObjId++;
        localStorage.setItem(pickedDate, JSON.stringify(todoObj[pickedDate]));
    };
};

function add() {
    //객체에 추가
    todoObj_add();

    //뷰페이지 추가
    var addLi = document.createElement('li');
    abab = document.createTextNode(inputText.value);
    addLi.appendChild(abab);
    todoList.insertBefore(addLi, todoList.childNodes[1]);
    inputText.value = null;
};

function view() {
    //로컬스토리지에 데이터 있을 경우 가져와서 뿌리기
    var pickedDateString = localStorage.getItem(pickedDate);
    var pickedDateObj = JSON.parse(pickedDateString);
    if(pickedDateObj.length !== null) {
        for (var i = 0; i < pickedDateObj.length; i++) {
            var addLi = document.createElement('li');
            objText = document.createTextNode(pickedDateObj[i].text);
            addLi.appendChild(objText);
            todoList.insertBefore(addLi, todoList.childNodes[1]);
        };
    }
};

document.getElementById('add').addEventListener('click', add);