/* 프로퍼티 접근하기 */

var dog = {
    name : '초코',
    eat : function(food) {
        console.log(`${this.name} 은(는) ${food}를 맛있게 먹어요 챱챱`);
    }
};

// 마침표 표기법 
console.log(dog.name);
dog.eat('고구마');

// 대괄호 표기법 - 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용한다.
// console.log(dog[name]);
console.log(dog['name']);
dog['eat']('고구마');

// 프로퍼티의 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시!!!!
// 대괄호 표기법을 사용한다.

var obj = {
    'dash-key' : 'dash-value',
    0 : 1
};

// console.log(obj.dash-key);
console.log(obj['dash-key']);

// console.log(obj.'0');
console.log(obj['0']);
console.log(obj[0]);    // 프로퍼티 키가 숫자로 이루어진 문자열인 경우 따옴표 생략 가능.