// in 연산자
// 프로퍼티 존재 여부 확인

var stundent = {
    name : '조평훈',
    age : 20,
    test : undefined
};

console.log(stundent.name === undefined);       // false - 존재
console.log(stundent.height === undefined);     // true - 존재하지 않음
console.log(stundent.test === undefined);
// 프로퍼티 값이 undefined 이기 때문에 프로퍼티는 존재하지만, true - 존재하지 않음으로 판별되는 문제

// in
console.log('============================')
console.log('name' in stundent);            // true - 존재한다.
console.log('height' in stundent);          // false - 존재하지 않는다.
console.log('test' in stundent);            // true - 존재한다.
