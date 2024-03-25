/*const
 const 키워드는 상수(constant)를 선언하기 위해 사용한다.
 let 키워드와 마찬가지로 블록 레벨 스코프를 가진다.
  */

 // const 키워드는 반드시 선언과 동시에 초기화를 해야한다.
//  const x; Syntax Error 발생
const x = 10;

//  const 키워드로 선언한 변수는 재할당이 금지된다.
// x = 2;

/*상수
 재할당이 금지된 변수
 const 키워드에 의해 재할당이 금지된므로 할당된 값을 변경할 수 있는 방법은 없다.
 일반적으로 상수의 이름은 대문자로 선언하여 상수임을 명확히 나타내며
 여러 단어로 아루어진 경우 언더스코어(_) 로 구분하여 스코네이크 케이스로 표현하는 것이 일반적이다.
  */

 //할인율 변경할 수 없는 상수로 사용.
 const DISCOUNT_RATE = 0.15;

 //정가
 const price = 15000;

 //할인가격
 let discountRrice = price * (1- DISCOUNT_RATE);
 console.log(discountRrice);

 const student = {
    name : '홍길동',
    age : 20
 };

 // const 키워드로 선언된 변수에 객체를 할당한 경우 값(프로퍼티 값)은 변경할 수 있다.
 student.name ='조평훈';
 console.log(student);

 // student 의 객체의 주소값은 변경할 수 없지만, 프로퍼티들의 값은 변경할 수 있다.
//  student = {};

/* ES6
  var 라는 키워드는 사용하지 않는다.
  재할당이 필요한 경우 한정적으로 let 키워드를 사용하며, 변수의 스코프는 최대한 좁게 만든다.
  변경이 발생하지 않고, 읽기 전용으로 사용하는 원시 값과 객체에는 const 키워드를 사용한다.
  const 키워드는 재할당을 금지하므로 var, let 키워드 보다 안전하다.
  */