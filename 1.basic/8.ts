//* 타입 애일리어스와 인터페이스의 상속(extends)

//* 좀 더 정확한 예시를 들어 확인해보자
// type Animal = {
//   breath: true;
// };

// type Mammalia = {
//   breed: true;
// }

// type Human = {
//   think: true;
// };

//* 위에 동물, 포유류, 인간 3개의 타입이 있다고 가정
//* 셋 다 만족시켜야 한다면??
type Animal = {
  breath: true;
};

type Mammalia = Animal & {
  breed: true;
};

type Human = Mammalia & {
  think: true;
};

//* 이런식으로 상속,확장의 개념으로 쓸 수 있다.
const woman: Human = {
  breath: true,
  breed: true,
  think: true,
};

//* 인터페이스는 extends가 있어 확장이 가능하다.
interface Animal2 {
  breath: true;
}

interface Mammalia2 extends Animal2 {
  breed: true;
}

const c2: Mammalia2 = {
  breath: true,
  breed: true,
};

//* 인터페이스의 특징
//* 이름을 중복으로 여러개 선언할 수 있다. 그래서 선언 할 때마다 서로간에 합쳐진다.
//* 라이브러리들이 대부분 인터페이스로 이루어져있고 나중에 다른 사람의 인터페이스를 확장 할 수 있다.
interface AA {
  talk: () => void;
}

interface AA {
  eat: () => void;
}

interface AA {
  shit: () => void;
}
const aaaa: AA = {
  talk() {},
  eat() {},
  shit() {},
  sleep() {},
};

//* 추가 선언
interface AA {
  sleep: () => void;
}

// 네이밍 룰 크게 두가지가 있다. 앞에 대문자 붙이는 것과 안붙이는 것
type TType = {
  name: string;
};

interface IProps {
  name: string;
}

enum EHello {
  A,
  B,
  C,
}

//* 이런식으로 썼었지만 요즘 안쓰는 추세다.
