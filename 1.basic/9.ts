//* 타입을 집합으로 생각하자(좁은 타입과 넓은 타입)
//* 타입간에 서로 대입되는것과 안되는것들을 살펴보자

//* 큰타입에 작은타입을 넣으려고 시도할 수도 있고, 작은타입에 큰타입을 넣으려고 시도할 수도 있다.
//* 여기서 큰타입과 작은 타입 이런것을 구분할 줄 알아야한다.

// 여기서 어떤게 넓은 타입이고 어떤게 좁은타입일까?? (집합관계(벤다이어 그램)로 생각하자.)
type A3 = string | number; // 넓은타입
type B3 = string; // 좁은 타입

type C3 = string & number; // B3보다 좁은 타입

// 여기서 좁은타입에서 넓은 타입으로 대입이 가능하다. 반대로 넓은 타입에서 좁은 타입은 대입이 불가능하다.

// 객체가 좀 헷갈린다.
// 아래 객체 3개중 어떤게 넓은 타입인가?
type ObjectA1 = {
  name: string;
};

type ObjectB1 = {
  age: number;
};

type ObjectC1 = {
  name: string;
  age: number;
};

// ObjectC1가 속성이 많다고 넓은 타입이라고 생각하는 경우가 있다.
// 하지만 객체는 속성이 상세할수록 즉, 구체적일 수록 좁은 타입이다.
// 따라서 ObjectC1가 가장 좁은 타입이다.

//* 그럼 ObjectA1, ObjectB2 보다 넓은 타입을 만들어보자 (집합 관계(벤다이어 그램)로 생각하자)
type ObjectAB = ObjectA1 | ObjectB1;

//* ObjectC1는 이런식으로도 표현 가능한다.
type ObjectC2 = ObjectA1 & ObjectB1;

// 실습
const ab: ObjectAB = { name: "하이" };
const c1: ObjectC1 = { name: "하이", age: 10 };
