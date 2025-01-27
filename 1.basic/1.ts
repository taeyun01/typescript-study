//* 타입스크립트는 변수, 매개변수, 리턴값에 타입을 붙이는 것
//* 자바스크립트의 변수, 매개변수, 리턴 값 이 세개만 타입을 붙여 놓으면 그게 타입스크립트가 된다.

// 변수 타입 선언
const a: string = "하이";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = "하이"; // any를 쓰면 그냥 자바스크립트를 쓰는 것이므로 any를 없애는게 목적
const g: true = true; // 이렇게 고정으로 써서 무조건 true만 받고싶을 때 사용할 수도 있다. (boolean도 아닌 그냥 딱 true만 받고 싶을 때)
const h: 5 = 5; // 이렇게 고정된 원시값을 넣어줄 수 있다.

// 타입 자리 헷갈리지 않는 법. 타입자리를 없앴을때 자바스크립트 코드면 된다.

// 1. 함수 타입 선언
function add(x: number, y: number): number {
  return x + y;
}

// 1.2 화살표 함수 타입 선언
const add2: (x: number, y: number) => number = (x, y) => x + y;

// 2. 별칭을 사용한 함수 타입 선언
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;

// 3. interface를 사용한 함수 타입 선언
interface Add2 {
  (x: number, y: number): number;
}
const add4: Add2 = (x, y) => x + y;

// array 타입 선언
const arr: string[] = ["하이", "안녕"];
const arr2: number[] = [1, 2, 3];
const arr3: Array<number> = [1, 2, 3];

// 튜플 타입 선언 (튜플은 길이가 고정된 배열)
const arr4: [number, string, number] = [1, "하이", 2]; // 갯수도 맞춰줘야하고, 타입도 맞춰줘야한다.

// 객체 타입 선언
const obj: {
  lat: number;
  lon: number;
} = { lat: 37.5, lon: 127.5 };
