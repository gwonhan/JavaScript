/* 프로퍼티 값 단축 구문 */

var id = 'user01';
var password = 'pass01';

var login = {
    id : id,
    password : password
};

console.log(login);

/* ES6에서는 프로퍼티 값으로 변수를 사용하는 경우
    변수 이름과 프로퍼티 키가 동일한 이름일 때, 프로퍼티 키를 생략할 수 있다.
    프로퍼티 키는 변수 이름으로 자동 생성된다.
*/

var login2 = { id, password };
console.log(login2);