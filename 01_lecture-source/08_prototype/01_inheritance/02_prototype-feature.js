/*프로토 타입의 기능 */

const user ={
    id : 'user ',
    password : function(){
        console.log('${this.id} 님이 로그인 되었습니다');
    }
};

const student ={
    __proto__ : user
};

//프로토타입은 프로퍼티를 읽을 때만 사용하며, 프로퍼티를 추가, 수정, 삭제하는 연산은 객체에 직접한다.
student.id = 'user01';
console.log(student);
//login 메소드 내의 this는 프로토 타입에 영향을 받지 않으며
//메소드를 객체에서 호출했던, 프로토 아입에서 호출했던 상관 없이
//this 는 언제나 . 앞에 있는 객체를 가리킨다.

student.login();
// 메소드는 공유가 되지만, 객체의 상태는 공유되지 않는다.

for (let prop in student) {
    console.log(prop);

    //hasOwnProperty : 본인이 가지고 있는 프로퍼티 
    // key 에 대응하는 프로퍼티가 상속받은 프로퍼티가 아니고 객체에 직접 구현된 프로퍼티 일 경우에만 true 를 반환
    student.hasOwnProperty(prop);
    if(isOwn){
        console.log('객체 자신의 프로퍼티 : ${prop}');
    }else{
        console.log('상속 받은 프로퍼티 : ${prop}');
    }
}