//* 객체 (object)

//* 객체 리터럴 타입
let user: {
  id?: number; // 선택적 프로퍼티 (옵셔널 프로퍼티)
  name: string;
} = {
  id: 1,
  name: "유태윤",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "멍멍이",
  color: "brown",
};

//* 타입스크립트는 이렇게 객체를 정의할 때 객체의 구조를 기준으로 타입을 정의한다.
//* 구조적 타입 시스템이라고 부른다. 즉, 프로퍼티 기준으로 타입을 결정하는 시스템이라는 의미
//* Property-based type system이라고도 부른다.

//* 타입스크립트는 "구조적 타입 시스템"을 사용한다. (다른 언어 c언어 같은 것들은 "명목적 타입 시스템"을 사용한다. Object이름 자체를 타입으로 결정)

user = {
  // id: 1, // 옵셔널 프로퍼티는 선택적으로 할당 가능
  name: "홍길동",
};

//* 값이 수정되면 안되는 프로퍼티가 있을 때
let config: {
  apiKey: string;
} = {
  apiKey: "1234567890",
};

//* JS는 객체의 프로퍼티에 접근해서 프로퍼티의 value를 수정할 수 있다.
config.apiKey = "100으로 바꿔버리기";

//* 값이 수정되어서는 안되는 프로퍼티는 readonly로 읽기 전용으로 설정
let config2: {
  readonly apiKey: string;
} = {
  apiKey: "1234567890",
};

config2.apiKey = "100으로 바꿔버리기";
