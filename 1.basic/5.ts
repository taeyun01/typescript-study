//* 원시 래퍼 타입, 템플릿 리터럴 타입, rest 파라미터, 튜플

//* string과 String은 다름. 소문자로 하는 것 기억하기.
const a: string = "hello";
const b: String = "hell";

//* 타입을 커스텀하게 만들어 줄 수도 있음
type World = "world";
const c: World = "world";

//* 템플릿 리터럴 타입이 존재(유니언 등 사용 가능)
// type Greeting = "hello world"
type World2 = "world" | "hell";
type Greeting = `hello ${World2}`; // "hello world"
const d: Greeting = "hello hell"; // 자동완성 확인해보면 hello world, hello hell 나온다. 이렇게 타입추천을 정교하게 만들 수 있다.

//* 배열, 튜플 문법
// 배열
let arr: string[] = [];
let arr2: Array<string> = [];

// 함수 rest 파라미터
function rest(...args: string[]) {
  console.log(args); // ["1", "2", "3"]
}
function rest2(a: number, ...args: string[]) {
  console.log(a, args); // 1 ["2", "3"]
}

rest("1", "2", "3");
rest2(1, "2", "3");

// 튜플
const tuple: [string, number] = ["1", 1];
tuple[2] = "hello"; // 3번째에 넣으려고 하니 에러남. 튜플은 고정된 길이를 가지고 있기 때문.
tuple.push("hello"); // 근데 또 push는 못 막아준다. 3번째에 요소를 추가하는건 같은데 위에는 에러를 띄어준다. 전부 막아주지 못 하는 이런 사소한 단점이 있다.
