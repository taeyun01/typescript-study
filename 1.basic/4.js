//* never 타입과 느낌표(non-null assertion)
//* never타입 안나올 시 => tsconfig.json에서 "strict": true, "noImplicitAny": false 설정
// 타입스크립트 처음할 때 빈배열에 한번 당할 수 있다.
// 빈배열을 만들면 타입추론에 never[]가 나오는데, 이러면 배열에는 아무 타입도 올 수 없다.
var array = [];
array.push(1);
// never, unknown, any 타입 주의하기
// never타입에 대한 좋은 글: https://ui.toast.com/weekly-pick/ko_20220323
// 빈배열 선언할 때는 반드시 타입을 지정해주자
var array2 = [];
array2.push(1);
var array3 = [];
array3.push("하이");
// 최대한 ! 대신 if를 쓸 것
// head2를 호버해보면 타입이 Element 또는 null이 될 수 있다고 나온다.
// 왜냐면 실제로 id가 head인 요소가 없을 수도 있기 때문이다. 타입스크립트는 모든 가능성을 다 고려해서 타입을 추론해준다.
// 근데 만약 개발자가 id가 head인 요소가 있다는 걸 확신 한다면 !를 붙여줄 수 있다. (!도 js변환시 사라짐)
var head1 = document.querySelector("#head"); // Element | null이 아닌 Element만 추론된다.
// null이나 undefined가 아니라는 걸 확신할 때 !를 쓸 수 있다.
// 하지만 이거는 추천하지 않는다.
// 예를들어 <div id="head"></div> 해당 태그에서 <div id="header"></div>로 다른 사람이 수정을 하는 순간 null이 된다.
// head.innerHTML = '안녕'; 이런 코드를 실행하면 에러가 난다. (null.innerHTML = '안녕'; 이 되는것임)
// 그래서 !는 안쓰는걸 추천한다. 이런게 있다라고만 하자
//* ! 대신 안정적인 if를 쓰자
var head = document.querySelector("#head");
// head가 있으면 head.innerHTML 실행하고, 없으면 head.innerHTML가 실행되지 않으니 에러도 안나고 안전하니까
// 이런식으로 안정성을 높여줄 수 있다.
if (head) {
    head.innerHTML = "안녕";
}
// 우리가 안정성을 직접 챙겨주지 않아도 타입스크립트가 알아서 체크해주긴 한다.
head.innerHTML = "안녕";
// if를 활용하여 불안정한 상황들을 잡아주자
