// 값이 발생하지 않는 것을 나타낼 때 never 타입을 사용한다.
// (예: 항상 예외를 발생시키는 (화살표)함수 표현식, 호출하면 종료되지 않는 (화살표)함수 표현식)
// 변수의 경우, 절대 true가 될 수 없는 타입 가드에 의해 좁혀질 때 never 타입을 얻는다.

// never 타입은 다른 모든 타입의 하위 타입으로 간주되며, 따라서 never 타입은 다른 모든 타입에 할당할 수 있다.
// 하지만, 어느 타입도 never의 하위 타입으로 간주되지 않으며, 따라서 (never 자신을 제외하고는) never 타입에 할당할 수 없다.
// any 타입조차도 never에 할당할 수 없다.

export default function () {
  // never 타입을 반환하는 함수는, 그 함수의 끝에 도달할 수 없어야 한다.
  function error(message: string): never {
    throw new Error(message);
  }

  // 이 함수의 반환 타입은 정의되지 않았지만, never 타입을 반환하는 함수를 호출한 결과를 반환한다. 따라서 TS는 이 함수의 반환 타입을 never로 추론한다.
  function fail() {
    return error("Something failed");
  }

  // never 타입을 반환하는 함수는, 그 함수의 끝에 도달할 수 없어야 한다.
  function infiniteLoop(): never {
    while (true) {}
  }
};
