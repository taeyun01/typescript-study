//* enum, keyof, typeof

// enum이란 타입은 그렇게 많이 쓰지는 않는다.
const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
EDirection.Up; // 0

// 첫번째를 기준으로 숫자가 매겨짐
const enum EDirection2 {
  Up = 3, // 3
  Down, // 4
  Left, // 5
  Right, // 6
}
// 무작위로 가능
const enum EDirection3 {
  Up = 3, // 3
  Down = 7, // 7
  Left = 2, // 2
  Right = 5, // 5
}
// 문자열도 가능
const enum EDirection4 {
  Up = "안녕", // 안녕
  Down = "하세요", // 하세요
  Left = "반가워요", // 반가워요
  Right = "안녕하세요", // 안녕하세요
}

// enum은 여러개의 변수들을 하나의 그룹으로 묶고 싶을 때 사용하는데,
// 일반적으로 아래처럼 객체 형태로 만들어 쓰긴한다.

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// as const를 붙이지 않으면 타입스크립트는 널널하게 그냥 number로 인식한다. ODirection에 hover해보자 (Up: number; ...)
// 이 값을 그대로 상수로 사용하고 싶다면 as const를 붙여주면 된다. ODirection에 hover해보자 (readonly Up: 0; ...) 읽기전용으로 수정도 불가능

// enum 사용하기
// Using the enum as a parameter (열거형을 매개변수로 사용하기)
// dir: EDirection은 EDirection에 지정된 4개의 타입중에 하나여야 된다. 라는 의미
function walk(dir: EDirection) {}

// enum을 쓰기 싫을때는 keyof typeof를 사용해 value들을 뽑아주면 되는데 살짝 복잡하긴하지만 별건 없다.
// It requires an extra line to pull out the keys (키를 뽑아내기 위해 추가 코드 필요)
type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left); // 출력값:2, enum
run(ODirection.Right); // 출력값:3, object

//? keyof typeof를 잠깐 알아보자
const obj = {
  a: "123",
  b: "hello",
  c: "world",
} as const;

// keyof typeof obj는 obj의 키를 뽑아준다. // 'a' | 'b' | 'c'
type Key = keyof typeof obj;

//* key들만 가져오고 싶을 때
// 1. 원래 원형은 keyof obj인데, obj가 자바스크립트 값이기 때문에 타입으로 쓸 수 없다고 에러가 난다.
// 2. 타입으로 쓰고 싶다면 앞에 typeof를 붙여줘야한다.
// 3. 거기에 keyof를 붙이면 'a' | 'b' | 'c' 키 값을 뽑아온다.
// 4. 뽑아온 키를 Key라는 타입으로 커스텀하게 만든 것이다.

// typeof obj[keyof typeof obj]는 obj의 키에 해당하는 값을 뽑아준다.
type Value = (typeof obj)[keyof typeof obj]; // '123' | 'hello' | 'world'

//* value들만 가져오고 싶을 때
// 1. key들만 가져오고 싶다면 keyof typeof obj를 썼다.
// 2. 그 반대로 value들만 가져오고 싶다면 typeof obj[keyof typeof obj]를 쓰면 된다.
