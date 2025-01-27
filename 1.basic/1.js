//* 타입스크립트는 변수, 매개변수, 리턴값에 타입을 붙이는 것
//* 자바스크립트의 변수, 매개변수, 리턴 값 이 세개만 타입을 붙여 놓으면 그게 타입스크립트가 된다.
// 변수 타입 선언
var a = "하이";
var b = 5;
var c = true;
var d = undefined;
var e = null;
var f = "하이"; // any를 쓰면 그냥 자바스크립트를 쓰는 것이므로 any를 없애는게 목적
var g = true; // 이렇게 고정으로 써서 무조건 true만 받고싶을 때 사용할 수도 있다. (boolean도 아닌 그냥 딱 true만 받고 싶을 때)
var h = 5; // 이렇게 고정된 원시값을 넣어줄 수 있다.
// 타입 자리 헷갈리지 않는 법. 타입자리를 없앴을때 자바스크립트 코드면 된다.
// 1. 함수 타입 선언
function add(x, y) {
    return x + y;
}
// 1.2 화살표 함수 타입 선언
var add2 = function (x, y) { return x + y; };
var add3 = function (x, y) { return x + y; };
var add4 = function (x, y) { return x + y; };
// array 타입 선언
var arr = ["하이", "안녕"];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3];
// 튜플 타입 선언 (튜플은 길이가 고정된 배열)
var arr4 = [1, "하이", 2]; // 갯수도 맞춰줘야하고, 타입도 맞춰줘야한다.
// 객체 타입 선언
var obj = { lat: 37.5, lon: 127.5 };
