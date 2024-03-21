/*
    기본적인 연산자는 java 다르지 않다.
*/

/* 동등/일치 비교 연산자
    동등비교(==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은
    값인지 비교를 한다.
    일치비교(===, !==) 연산자는 타입과 값이 모두 일치하는 지 비교를 한다.
*/

// 숫자 1, 문자 '1', true 를 비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 === '1' : ${1 === '1'}`);
console.log(`1 == true : ${1 == true}`);
console.log(`1 === true : ${1 === true}`);

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN 이 친구는 자신과 일치하지 않는 유일한 값이다. (예외)
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);
// 빌트인 함수 Number.isNaN() 을 통해 확인해햐 한다.
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);