//* js변환시 타입 사라지는 부분 파악
// 변수 타입 선언
var a = "하이";
var b = 5;
var c = true;
var d = undefined;
var e = null;
var f = "하이";
var g = true;
var h = 5;
var addTest = function (x, y) {
    return x + y;
};
var addTestResult = addTest(1, 2);
function add(x, y) {
    return x + y;
}
var add2 = function (x, y) { return x + y; };
var add3 = function (x, y) { return x + y; };
var add4 = function (x, y) { return x + y; };
var arr = ["하이", "안녕"];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3];
var arr4 = [1, "하이", 2];
var obj = { lat: 37.5, lon: 127.5 };
function testAdd(x, y) {
    return x + y;
}
// 또 as 라는 키워드도 있는데 이것도 마찬가지로 js로 변환시 사라진다.
var aa = 123; // 자동으로 number로 추론되고 있다.
// aa = "하이"; // 문자열로 재할당 하려고 하면 에러가 난다.
aa = "하이"; // 이렇게 as로 앞에 타입을 강제로 바꿔줄 수 있다. js변환시 as 키워드도 사라짐
// enum, declare 등도 사라진다.
// 왜 타입들이 js로 변환했을 때 사라지는 걸 보여주느냐?
// js로 변환시 사라질때, 그 때 올바른 자바스크립트 코드여야 한다.
