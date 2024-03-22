/* 매개변수와 전달인자(인수) */

// 함수 선언문
function hello(name) {

    //매개변수는 함수 몸체 내부에서만 참조 가능
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관이 된다.
    console.log(arguments);

    return `${name} 님 하이요~`;
}

// 매개변수는 함수 몸체 내부에서만 참조 가능
// console.log(name);

var result = hello('조평훈');
console.log(result);

// 함수는 매개변수의 갯수와 인수의 갯수가 일치하는 지 체크하지 않는다.
// 인수(전달인자) 가 부족해서 할당되지 않은 매개변수의 값은 undefined 이다.
result = hello();
console.log(result);

// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('조평훈', '아무개');
console.log(result);

function hi(name = '아무개') {

    // 인수를 전달하지 않았을 경우, undefined를 전달했을 경우 ES6에서 도입 된
    // 매개변수 기본값을 사용할 수 있다.

    // 적절한 인수가 전달 되었는 지 확인하는 방법
    if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0) {
        throw new TypeError('인수는 1개여야하고, 문자열 값이며, 빈 문자열은 허용되지 않습니다.!!');
    }

    return `${name} 안녕~~`;
}

result = hi();
// TypeError 발생시켜 인수에 대한 검증 과정
// result = hi('홍길동', '유관순');
// result = hi(1);
// result = hi('');
console.log(result);
