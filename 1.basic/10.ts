//* void의 두가지 사용법

// 그 전에 객체리터럴에 잉여속성 검사를 알아보자
// 객체 리터럴에서는 잉여속성 검사라는게 있다.
interface Q {
  a: string;
}
const Object_Q: Q = {
  a: "하이",
  b: "바이",
};

// 잉여속성검사
// interface Q에는 a속성 밖에 없다. Object_Q에 b속성을 넣었더니 타입스크립트에서 b가 없다고 에러가 난다.
// 하지만 여기서 변수로 따로 빼면 검사를 하지 않는다.
interface Q2 {
  a: string;
}

const Object_Q2 = {
  a: "하이",
  b: "바이",
};

const Object_Q3: Q2 = Object_Q2;
//* 이런식으로 어떨땐 에러가 나고 헷갈릴 수 있는데 그럴때 쓰는게 잉여속성검사이다.

//* void 타입은 3가지로 볼 수 있다. (크게 보면 2가지, 함수, 메서드)
//* 1. 함수 리턴값이 void인거랑
//* 2. 매개변수가 void인거랑
//* 3. 메서드가 void함수인 것.

//* 1. 함수 리턴값이 void인 것: 함수의 리턴값을 넣으면 안된다. 대신 undefined는 가능하다. null은 안된다.
function testA(): void {
  return; // 가능
  // return 1; // 불가능
  // return undefined; // 가능
  // return null; // 불가능
}

const varB = testA();

//* 2. 매개변수가 void인 것
//* 의미가 다르다: 매개변수가 void인 함수 리턴값을 사용하지 않겠다. 이고, 함수 void는 리턴값이 없어야 한다는 의미다.
function testB(callback: () => void): void {
  callback();
}

//* 매개변수가 void인 함수는 리턴값이 존재해도 된다.
testB(() => {
  return 1;
});

//* 3. 메서드가 void함수인 것 : 메서드도 리턴값이 존재할 수 있다.
// Human2 인터페이스에 talk함수가 있다고 가정
interface Human2 {
  talk: () => void; // 메서드가 void함수 (리턴값이 뭐든 신경쓰지 않음)
}

const human: Human2 = {
  talk: () => {
    return "안녕"; // 리턴값이 뭐든 상관없이 무시해버림
  },
};

//* humanTalk는 자바스크립트 상에서는 "안녕"이여야 되지만, 타입스크립트는 이 값을 무시해버리기 때문에 타입이 void가 돼버린다.
//* humanTalk hover시 타입 void
//* 그래서 void면 원칙적으로 return을 넣으면 안된다.
const humanTalk = human.talk();
const humanTalk2 = human.talk() as unknown as number; // 강제로 변환할 수 있다. (내가 책임질 수 있을 경우 사용 권장)

//* 실전 예제

// 함수를 이런식으로 선언만 하고 구현부를 또 만들어줘야 하는데 그게 싫다면 declare를 써서 타입만 만들어줄 수 있다.
// 또 forEach함수를 다른데서 선언했음을 보증한다. 라는 의미로 쓰는게 declare이다. (외부에서 만들어진 애들을 타입선언하는 경우)
declare function forEach( // void와 undefined의 차이
  arr: number[],
  callback: (el: number) => undefined
): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el)); // 매개변수 함수가 undefined면 에러가 날 수밖에 없다. push는 리턴값이 number이다.

// 그럼 매개변수 함수를 number바꾸면 해결된다.
declare function forEach2( // void와 undefined의 차이
  arr: number[],
  callback: (el: number) => number // void로 선언해도 에러가 안난다. 의미는 매개변수에서 쓰는 실제 리턴값이 뭐든 상관하지 않겠다 라는 의미이다.
): void;

// 현재 push는 number로 반환하니까 리턴값을 number로 해주면 된다.
forEach2([1, 2, 3], (el) => target.push(el));

// 매개변수를 undefined로 선언했을 때 주의점
declare function forEach3(
  arr: number[],
  callback: (el: number) => undefined
): void;

// 아래 두 함수를 봤을때 둘다 정상적인 코드이다. 하지만 undefined로 선언했을 때는 둘이 서로 다른 에러가 난다.
//* 수정 : 타입스크립트 5.1에서는 해당 내용이 허용되었다. 5.0에서만 에러가 난다.
forEach3([1, 2, 3], (el) => {
  target.push(el);
});
forEach3([1, 2, 3], (el) => target.push(el));

//* 즉, 핵심은 void는 undefined와 다르다.
//* 함수에서 선언한 리턴값 void랑 매개변수의 콜백의 void는 서로 다르다.
