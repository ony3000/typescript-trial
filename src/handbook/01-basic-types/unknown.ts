// 코드 작성 시점에 타입을 알 수 없는 경우, "타입이 변할 수 있음"을 내포하는 unknown 타입을 사용한다.
// (예: 사용자로부터 값을 받거나, API 호출의 응답으로 값을 받을 때)

declare const maybe: unknown; // 컴파일 결과에 포함되지 않는다. 선언에 대한 별도의 구현이 필요한 듯.

export default function () {
  let notSure: unknown = 4;
  notSure = "maybe a string instead";
  notSure = false;

  // unknown 타입의 값을 알려진 타입의 변수에 할당하려 하면 컴파일 에러 발생
  // const aNumber: number = maybe;

  // unknown 타입의 변수가 있는 경우, typeof 검사나 비교 검사 등을 사용해서, 가능한 타입의 범위를 구체적으로 좁힐 수 있다.

  if (maybe === true) {
    // TS는 이 블록 안에서 maybe 변수의 타입을 boolean으로 간주한다.

    const aBoolean: boolean = maybe; // OK
    // const aString: string = maybe; // 타입 불일치로 컴파일 에러 발생
  }

  if (typeof maybe === "string") {
    // TS는 이 블록 안에서 maybe 변수의 타입을 string으로 간주한다.

    const aString: string = maybe; // OK
    // const aBoolean: boolean = maybe; // 타입 불일치로 컴파일 에러 발생
  }
};
