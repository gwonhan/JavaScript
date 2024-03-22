/* 메소드 단축구문 */

// ES5 에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당했다.
var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name} (은)는 ${food}를 맛나게 먹어요`);
    }
};

dog.eat('고구마');

// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
var dog2 = {
    name : '두부',
    eat(food) {
        console.log(`${this.name} (은)는 ${food}를 맛나게 먹어요`);
    }
};

dog2.eat('서브웨이');