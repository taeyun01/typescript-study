//* 타입 좁히기 (타입 가드)

// a는 숫자 또는 문자열을 받을 수 있음
function numOrStr(a: number | string) {
  // a.toFixed(1); // TS는 모든 가능성을 다 고려하기 때문에 a가 number면 toFixed를 쓸 수 있는데, string일 가능성도 있기 때문에 경고를 띄어주는 것
  // (a as number).toFixed(1); // as로 타입스크립트를 안심시켰더라도 자바스크립트 단에서 에러가남
  // 예를 들어 함수 밖에서 numOrStr('123'); 호출하면 문자열에는 toFixed()를 쓸 수가 없음.
  // unknown 일 때 빼고는 as는 안쓰는게 좋음, 아니면 남이 만들어진 타입이 틀렸을 때는 어쩔 수 없이 as를 씀
  //* 이런식으로 타입 가드를 사용해서 타입 좁히기를 할 수 있음
  if (typeof a === "string") {
    a.split(","); // 문자열인것을 보장
  } else {
    a.toFixed(1); // 숫자인것을 보장
  }
}

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);
  } else {
    a.toFixed(1);
  }
}

type B1 = { type: "b"; bbb: string };
type C1 = { type: "c"; ccc: string };
type D1 = { type: "d"; ddd: string };
type A1 = B1 | C1 | D1;
function typeCheck(a: A1) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }
}

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}
const cat: Cat | Dog = { meow: 3 };
if (catOrDog(cat)) {
  console.log(cat.meow);
}
if ("meow" in cat) {
  console.log(cat.meow);
}

const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected";
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
const errors = promises.filter(isRejected);

// class인 경우 instanceof 연산자도 가능

// readonly
interface A {
  readonly a: string;
  b: string;
}

// class에 private, protected 추가됨
class B implements A {
  private a: string;
  protected b: string;
}
class C extends B {}
new C().a;
new C().b;

// abstract class, abstract method
abstract class X {
  abstract work(user: User): boolean;
}
class Y extends X {
  work(user: User): boolean {
    return true;
  }
}
