// //* 타입스크립트는 변수, 매개변수, 리턴값에 타입을 붙이는 것
// //* 자바스크립트의 변수, 매개변수, 리턴 값 이 세개만 타입을 붙여 놓으면 그게 타입스크립트가 된다.

// // 변수 타입 선언
// const a: string = "하이";
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = "하이";
// const g: true = true;
// const h: 5 = 5;

// //* 무작정 const a: string = "하이" 이렇게 쓰지 말고 타입스크크립트가 추론해주는게 맞다면 그냥 쓰고, 아니라면 우리가 직접 타입을 지정해줘서 쓰면된다.
// // 타입스트립트는 은근 바보인데 똑똑하다. 1. 이렇게 리턴의 타입을 지정해주지 않아도
// const addTest = (x: number, y: number) => {
//   return x + y;
// };

// // 2. 타입스크립트가 addTest값을 추론하여 100% number가 맞다고 판단하여 addTestResult가 number라고 추론해준다.
// // 3. 매개변수를 반드시 타입 타이핑을 해주면 리턴 타입을 생략해도 충분히 추론을 잘해준다.
// // 4. 최대한 타입스크립트가 추론해주는걸 믿어라
// const addTestResult = addTest(1, 2);

// function add(x: number, y: number): number {
//   return x + y;
// }

// const add2: (x: number, y: number) => number = (x, y) => x + y;

// type Add = (x: number, y: number) => number;
// const add3: Add = (x, y) => x + y;

// interface Add2 {
//   (x: number, y: number): number;
// }
// const add4: Add2 = (x, y) => x + y;

// // const arr: string[] 라고 안해줘도 마우스는 호버 해주면 타입스크립트가 알아서 추론해주는걸 볼 수 있다.
// const arr = ["하이", "안녕"];
// const arr2 = [1, 2, 3];
// const arr3: Array<number> = [1, 2, 3];

// // arr4에 마우스는 호버해보면 arr4: (string | number)[]라고 나온다. 이건 틀린것이니 직접 const arr4: [number, string, number] 이렇게 타입을 지정해줘야한다.
// const arr4 = [1, "하이", 2]; // 갯수도 맞춰줘야하고, 타입도 맞춰줘야한다.
// const arr5: [number, string, number] = [1, "하이", 2];

// // 객체도 이전에 썼던 타입을 지우고 마우스를 호버해봤을 때 타입 추론이 제대로 나온다.
// const obj = { lat: 37.5, lon: 127.5 };
