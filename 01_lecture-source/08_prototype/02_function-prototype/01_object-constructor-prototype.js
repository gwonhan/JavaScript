/* 
생성자 함수 프로토타입
new 연산자를 사용해 만든 객체는
생성자 함수의 프로토타입 정보를 사용해[[prototupe]]을 설정한다.
 */

const user = {
    activate : true,
    login : function(){
        console.log('로그인 되었습니다. ');
    }
};

function Student(name){
    this.name = name;
}

//.prototype -> 생성자 함수와 같이 쓰이는 속성

Student.prototype = user;

// ~~.prototype 은 new~~ 을 호출할 때만 사용한다.
// new ~~ 을 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 할당한다.

//student.__proto__ = user
const student = new Student('조평훈');

console.log(student.activate);