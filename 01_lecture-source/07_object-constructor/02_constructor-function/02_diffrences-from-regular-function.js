/*일반 함수와의 차이점 */

function Student(name, age){

    console.log(this);

    this.name =name;
    this.age =age;
    this.getInfo = function(){
        return '${this.name}은(는) ${this.age} 세 입니다';
    }

}

/*
 일반 함수와 생성자 함수의 특별한 형식적인 차이는 없다.
 - 첫 문자를 대문자로 기술하여 구별하는 관례가 있다.
  new 연산자와 함께 호출을 하게 되면 생성자 함수로 동작
  그렇지 않다면 일반 함수로 동작을 하게 된다.
   */
const student =Student('조편훈', 20);
// 일반 함수로 호출된 Student 는 반환문이 없으므로 undefined 를 반환한다.
console.log(student);
// console.log(globalThis);
// 일반 함수로 호출된 Student 내의 this 는 전역 객체를 가리킨다.
console.log(age);

const student2 = new Student('회원2', 20);
console.log(student2);

/*자바를 안 배운 이들을 위해 ES6 에서는 new.taget 이라는 것을 지원한다.
new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
new 연산자 없이 일반 함수로 호출된 함수 내부의 new.target은 undefined 이다. */

function Dog(name,age){
    // 이 함수가 new 연산자와 함께 호출되기 않으면 new.target은 undefined
    if(!new.target){
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}
const dog = Dog('뽀삐', 3);
console.log(dog);

