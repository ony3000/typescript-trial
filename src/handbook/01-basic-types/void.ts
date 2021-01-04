// void 타입은 any 타입의 반대라고 생각하면 편하다. 어떤 타입도 가지지 않는다.
// 일반적으로, 값을 반환하지 않는 함수의 반환 타입이라고 볼 수 있다.

export default function () {
  function warnUser(): void {
    console.log("This is my warning message");
  }

  // void 타입으로 선언된 변수는 별로 쓸모가 없다. null과 undefined만 할당할 수 있기 때문이다.

  let unusable: void = undefined;

  // unusable = null; // TS 설정에서 `strictNullChecks`가 활성화되지 않았을 때만 가능

  console.log(warnUser());
  console.log(unusable);
};
