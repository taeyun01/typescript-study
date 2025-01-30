//* js변환시 사라지는 부분 파악

// 변수 타입 선언
const a: string = "하이";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = "하이";
const g: true = true;
const h: 5 = 5;

const addTest = (x: number, y: number) => {
  return x + y;
};

const addTestResult = addTest(1, 2);

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

type Add = (x: number, y: number) => number;

const add3: Add = (x, y) => x + y;

interface Add2 {
  (x: number, y: number): number;
}

const add4: Add2 = (x, y) => x + y;

const arr = ["하이", "안녕"];
const arr2 = [1, 2, 3];
const arr3: Array<number> = [1, 2, 3];

const arr4: [number, string, number] = [1, "하이", 2];

const obj = { lat: 37.5, lon: 127.5 };

// type, interface, 제네릭, function, 변수 뒤에 붙는 타입 a: string 등등 이런 것들은 js로 변환하면 사라진다.

// 아래 함수를 보면 하나는 타입만 나와있고 하나는 함수만 선언 돼있는걸 볼 수있다.
// 이런 케이스가 존재할 수 있는데 이것도 js로 변환하면 타입만 선언한건 사라진다.
function testAdd(x: number, y: number): number;
function testAdd(x, y) {
  return x + y;
}

// 또 as 라는 키워드도 있는데 이것도 마찬가지로 js로 변환시 사라진다.
let aa = 123; // 자동으로 number로 추론되고 있다.
// aa = "하이"; // 문자열로 재할당 하려고 하면 에러가 난다.
aa = "하이" as unknown as number; // 이렇게 as로 앞에 타입을 강제로 바꿔줄 수 있다. js변환시 as 키워드도 사라짐

// enum, declare 등도 사라진다.

// 왜 타입들이 js로 변환했을 때 사라지는 걸 보여주느냐?
// js로 변환시 사라질때, 그 때 올바른 자바스크립트 코드여야 한다.
