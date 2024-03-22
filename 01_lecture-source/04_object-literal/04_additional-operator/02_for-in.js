// for in 반복문
// 객체의 모든 키를 순회한다.

var student = {
    name : '조평훈',
    age : 20,
    getInfo : function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};

for (var key in student) {
    console.log(`key : ${key}`);    // 프로퍼티 키
    console.log(`student[key] : ${student[key]}`);  // 키에 해당하는 값
}