console.log('==================숫자 타입으로 변환=================');

// 산술 연산자의 피연사는 모두 숫자 타입이여야 하므로
// 숫자가 아닌 값들은 암묵적으로 타입을 변환한다.

console.log(10 - '5');
console.log(10 % 'javaScript'); // 피연산자가 숫자 변환이 불가능하다. NaN(숫자가 아님.)

console.log(10 > '6');

// + 단항 연산자 : 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+'');
console.log(+'javaScript');
console.log(+true);
// console.log(+Symbol()); Cannot convert a Symbol value to a number
console.log(+{});
console.log(+[]);
console.log(+function(){});

// 빈 문자열, 빈 배열, null, false 는 0으로 반환, true 는 1로 반환
// 객체와 undefined 는 변환이 되지 않아 NaN 반환