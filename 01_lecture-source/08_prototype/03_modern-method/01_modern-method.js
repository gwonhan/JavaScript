// Object.create(proto) : [[Prototype]] 이 proto 를 참조하는 빈 객체를 만들어준다.

const user ={
    activate : true
   
};

// 포로토타입이 user 인 새로운 객체 생성
 const student =Object.create(user);
 console.log(student.activate);

 //Object.getProtoTypeOf(obj) - obj 의[[protpotype]] 반환
 console.log(Object.getProtoTypeOf(student) === user);

 //Object.getProtoTypeOf(obj, proto)-obj 의 [[prototype]] 이 proto 가 되도록 설정
Object.setPrototypeOf(student, {}); // student 의 프토로 타입을 {} 으로 변경

 console.log(Object.getProtoTypeOf(student) === user);

