/*콜백함수 <- 중요도가 있음*/

/* 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 한다.
  매개변수를 통해 함수의 외부에서 콜백함수를 전달 받은 함수는 "고차 함수" 라고 한다. 
  콜백 함수는 고차 함수에 전달되어 헬퍼 함수의 역할을 한다.
  즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
  */

  // 전달 받은 값을 증가 시켜주는 함수
  function increase(value){
    return value + 1;
  }

  // 전달 받은 값을 감소 시켜주는 함수
  function decrease(value){
    return value -1;
  }

  // 전달 받은 함수에 전달 받은 값을 적용시켜주는 고차 함수
  function apply(func, value){
    // 고차 함수는 매개변수를 통해 전달 받을 콜백 함수의 호출 시점을 결정하여 호출한다.
    // 콜백 함수는 고차 함수에 의해 호출(헬퍼)되며, 이 때 고차 함수는 
    // 필요에 따라 콜백 함수에 인수를 전달할 수 있다.
    return func(value) ;
  }

  //apply 고차 함수로 콜백 함수를 전달하며 호출

  console.log(apply(increase, 5));
  console.log(apply(decrease, 5));

  //콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로 고차함수에 전달할 수 있다.
  console.log(apply(function(value) {return value **2;}, 5 ));
