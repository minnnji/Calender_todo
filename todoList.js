var inputText = document.getElementById('inputText');
var todoList = document.getElementById('todo');
var doneList = document.getElementById('done');
var todoArray = {};
var doneArray = {};

function todoArray_add() {
       //선택된 날짜가 key로 있으면 value 추가
    if (pickedDate in todoArray) {
        todoArray[pickedDate].unshift(inputText.value);
    }
    //선택된 날짜가 key로 없으면 key랑 배열 생성해서 추가
    else todoArray[pickedDate] = [inputText.value];
}

function add () {
    //배열에 추가
    todoArray_add();

    //뷰페이지 추가
    var addLi = document.createElement('li');
    abab = document.createTextNode(inputText.value);
    addLi.appendChild(abab);
    todoList.insertBefore(addLi, todoList.childNodes[1]);
    inputText.value = null;
}

document.getElementById('add').addEventListener('click', add);