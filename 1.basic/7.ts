//* union(|)과 intersection(&)

//* 타입 정의
type A = {
  a: string;
};

// aa는 A 타입을 따르는 객체이다.
// 객체타이핑 방법1
const aa: A = {
  a: "hello",
};
// 객체타이핑 방법2
const aaa: {
  a: string;
} = {
  a: "hello",
};

//* 인터페이스 정의
interface B {
  a: string;
}
const bb: B = {
  a: "hello",
};

// union( | ) 또는..
// 해당 add함수에 타입이 말이 되는것 같아도 안되는 이유를 알아보자
function add(x: string | number, y: string | number): string | number {
  return x + y; // 에러 확인
}

// 또는 관계이기 때문에 이런 식으로 여러가지를 넣을 수 있는데
add(1, 2);
add("1", "2");
add(1, "2");

// 문제는 타입추론이 제대로 안된다.
// 1,2 둘다 number이기 때문에 number로 추론되어야하지만, result는 string | number라고 착각을 하게 된다.
const result: string | number = add(1, 2);

// result에 문자열 메서드를 쓰면 지금 숫자니까 에러가 나는걸 볼 수 있다.
result.charAt(2);

//* 처음 타입을 매우 잘 잡아놔야한다.
//* 그렇지 않으면 그 뒤로 줄줄이 다 꼬인다.

//* 교차(intersection)(&) &는 전부 만족해야한다.
// 타입이 string 이면서 number여야 한다?? 이런게 있을리가 없다. 당연히 안된다
// string & boolean 등등 이런것도 다 안된다.
type A2 = string & number;
const a2: A2 = 1;

//* 하지만 객체는 된다.
type ObjectA = {
  hello: "world";
} & {
  hi: "하이";
};
// 둘다 만족해야하는 타입이기 때문에 hello, hi 둘다 있어야한다.
const objA: ObjectA = {
  hello: "world",
  hi: "하이",
};

//* 놀랍게도 또는(|)도 된다. 보통 &가 되면 |가 안되고, |가 되면 &가 안되는데 여기선 &도 되고, |도 된다.

//* 근데 의미는 완전히 다르니 둘이 차이점을 알아보자
type ObjectB = { hello: "world" } | { hi: "하이" };

// hello: "world도 만족하고 hi: "하이"도 만족해서 정상적으로 된다.
const objB: ObjectB = { hello: "world", hi: "하이" };
// 여기서 차이점은 둘중 하나만 만족해도 된다.
const objC: ObjectB = { hello: "world" };

//* &일때는 둘다 만족시켜야하기 때문에 둘다 있어야하고, |일때는 둘중 하나만 만족해도 되기 때문에 하나만 있어도 된다.

//* 정리
//* &일 때는 모든 속성이 다 있어야한다.
//* |일 때는 여러개 중 하나만 만족해도 된다.
