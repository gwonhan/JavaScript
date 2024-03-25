/* Object 생성자 함수 
new 연산과 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여
반환한다.
빈 객체 생성 이후 프로퍼티 혹은 메서드를 추가하여 객체를 완성할 수 있다.
*/

/*
1. 객체 리터럴{};
2. Object 생성자 함수
3. 생성자 함수
4. Object.create 메소드
5. Class(ES6 추가)
 */

// 빈 객체 생성
const student = new Object();
console.log(student);

student.name = '조평훈',
student.age = 20;

console.log(student);

/*
Object 생성자 함수를 사용해 객체를 생성할 필요는 없다..
객체 리터럴을 사용하는 것이 더욱 간편하다.
자바스크립트는 Objdct 생성자 함수 이외에도
String,Number, Boolean, Function, Array, Date, RegExp
등등의 빌트인 Object 생성자 함수를 제공한다. 
*/