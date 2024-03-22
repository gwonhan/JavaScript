/* 화살표 함수 */

/*
    ES6 에서 도입 된 화살표 함수는 function 키워드 대신 화살표를 이용하여
    좀 더 간략한 방법으로 함수를 선언할 수 있다.
    화살표 함수는 항상 익명 함수(이름이 없는) 로 정의한다.
    본문이 한 줄인 함수를 작성할 때 유용하다.
*/

var message;
// 기존의 function 정의
message = function() {
    return "Hello World!!!";
}

console.log(message());

// function 키워드 생략 가능
message = () => {
    return "Arrow Function!!!";
}

console.log(message());

// 명령문이 하나만 있는 경우 중괄호 생략이 가능하다.
// 이 때 함수 몸체 내부의 명령문이 값으로 평가 될 수 있는 표현식 문이라면 암묵적으로 반환된다.
// return 키워드 생략 가능
message = () => "Arrow Function is Simple!!!!";

console.log(message());

// 매개 변수가 있는 경우
message = (val1, val2) => "Arrow" + val1 + val2;

console.log(message('Function', '!!!!!!!'));

// 매개변수가 한개면 소괄호 생략 가능
// 매개변수가 없거나, 여러 개일 경우 생략은 불가능하다.
message = val => "Arrow" + val;

console.log(message("Function is GOOD!!!"));