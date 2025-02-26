function numOrStr(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
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
