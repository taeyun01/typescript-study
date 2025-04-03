//* number
let num1: number = 123; // :number -> 타입 어노테이션 (타입 주석 이라고도 함)
let num2: number = -123;
let num3: number = 123.456;
let num4: number = -123.456;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1.toUpperCase(); // 오류 발생
num1.toFixed(); // 숫자에만 적용할 수 있는 메서드만 사용가능

//* string
let str1: string = "Hello, World!"; // 큰 따옴표
let str2: string = "Hello, World!"; // 작은 따옴표
let str3: string = `Hello, World!`; // 백틱
let str4: string = `Hello, ${num1}!`; // 템플릿 리터럴

str1.toUpperCase(); // 문자열에만 적용할 수 있는 메서드만 사용가능

//* boolean
let bool1: boolean = true;
let bool2: boolean = false;

//* null (별도의 타입으로 존재함)
let null1: null = null;

//* undefined (별도의 타입으로 존재함)
let undefined1: undefined = undefined;

// strictNullChecks옵션을 끄면 null을 넣을 수 있게 조정 가능
let numA: number = null;

//* 리터럴 타입 (값 그 자체가 타입) 리터럴은 -> "값"이라는 뜻
let numB: 10 = 10;
numB = 12; // 10이라는 값만 허용

let strA: "hello" = "hello";
strA = "world"; // "hello"라는 값만 허용

let boolA: true = false;

//* 리터럴 타입은 나중에 복합적인 타입을 만들 때 유용하게 쓰인다.
