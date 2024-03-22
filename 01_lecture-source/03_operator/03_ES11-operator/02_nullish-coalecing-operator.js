/*null 병합 연산자 */

/*좌항의 피연산자가 null or undefined 인 경우
 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다. 
 */

 // ?? : 좌변의 피연산자가 null undefined 일 떄 우변 반환.

 var test = null ?? '기본값';
 console.log(test);

 var value = '' ?? '기본값';
 console.log(value);