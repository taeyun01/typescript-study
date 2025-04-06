//* 배열과 튜플

//* 배열
let numbArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "world"];

let boolArr: Array<boolean> = [true, false, true];

//* 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

//* 다차원 배열의 타입을 정의하는 방법 (배열 안의 배열(2차원).. 3차원 등등)
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//* 튜플 (js에는 없고 ts에서만 제공되는 타입)
//* 길이와 타입이 고정된 배열 (별도로 존재하는 자료형으로 보긴 어렵고 그냥 배열임) js로 변환될때 보면 확인 가능
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "hello", true];
// tup2 = [1, 2, false, 'hi']; // 타입이 다르거나 길이가 다르면 할당 불가능

//* 길이가 제한되어 있지만 push, pop을 사용해도 에러 표시가 되지 않음 각별히 주의하여 사용
tup1.push(3);
tup1.pop();
tup1.pop();

//* 그럼 튜플은 어떤 상황에 사용 할까?? 예시로 살펴보자
const users: [string, number][] = [
  ["유태윤", 1],
  ["홍길동", 2],
  ["김철수", 3],
  ["신짱구", 4],
  [5, "신형만"], // 타입이 다르면 할당 불가능
];

//* 튜플을 사용하면 배열을 사용할 때 인덱스에 위치에 따라서 넣어야 될 값 들이 이미 정해져있고
//* 그 순서를 지키는게 중요할 때 튜플 타입을 이용해서 값을 잘못넣지 않도록 방지해 줄 수 있음
