//* unknown과 any (error)

//* unknown의 정체는 뭐고 any와 다른점이 뭘까?
//* 우선 any를 쓸바에는 unknown을 쓰는걸로 원칙적으로 알고있자.
//* 베스트는 둘 다 최대한 안쓰는게 좋다.

//* any의 문제점은 타입검사를 포기를 해버린다. 타입검사를 그냥 안하는것이라 쓰는 의미가 없다.
const anyA: any = 3;
anyA.method();

//* unknown을 쓰면 '알 수 없는 형식' 에러가 뜬다. 우리가 직접 타입을 지정해줘서 정해진 타입만 쓸 수 있게 한다.
//* 지금 당장 내가 타입을 모르겠을 때 쓰는게 unknown이다.
const anyB: unknown = 3;
anyB.method();

//* 나중에 쓸 때 타입을 지정해주면 된다.
type testType = {
  method: () => void;
};
(anyB as testType).method();

//* unknown이 나오는 흔한 경우가 try catch문에 (error)부분이다. 에러는 어떤게 나올지 모름. (우리가 대비하지 못하는 뜬금없는 에러가 나오기 때문에)
try {
  const a = 3;
} catch (error) {
  // error.message // 에러
  const errMsg = (error as Error).message; // 타입스크립트가 제공하는 기본 에러 타이핑을 써줘도됨. (Axios에러면 Axios가 제공하는 AxiosError 타이핑을 써줌)
}
