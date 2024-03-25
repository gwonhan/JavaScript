// length 프로퍼티

// length 요소의 갯수를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([].length);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//배열에 요소를 추가하거나 삭제하면 자동으로 갱신된다.
arr.push(6);    // 인자로 전달한 요소 추가
console.log(arr.length);
arr.pop();
console.log(arr);

//임의의 숫자 값을 명시적 할당할 수 있다.
// 배열의 길이를 줄일 수 있다.
arr.length = 3;
console.log(arr);

// 현재 length 프로퍼티 보다 큰 숫자를 할당하면 ??
arr.length =10;
console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

//자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소 배열을
//문법적으로 허용한다.
const arr2 = [,2, ,4];
console.log(arr2);

//일반 배열 length 요소의 갯수 같았지만, 희소 배열은 length 와 배열 요소의 갯수가
// 일치하지 않는다는 것을 주의하자.