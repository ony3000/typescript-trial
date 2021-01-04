// 경우에 따라, 일부 타입 정보를 사용할 수 없거나, 그런 타입 정보를 선언함에 있어 필요 이상의 노력이 요구되기도 한다.
// (예: TS 없이 작성된 코드로부터 값을 받거나, 서드파티 라이브러리로부터 값을 받을 때)
// 이런 경우, 타입 검사를 회피하기 위해 any 타입을 사용할 수 있다.

declare function getValue(key: string): any; // 컴파일 결과에 포함되지 않는다. 선언에 대한 별도의 구현이 필요한 듯.

export default function () {
  const str: string = getValue("myString");

  // any 타입이 unknown 타입과 다른 점은, 임의의 프로퍼티를 접근하려 할 때, 그 프로퍼티의 존재 여부와 상관없이 접근이 허용된다는 것이다.
  // 이러한 프로퍼티는 함수도 포함되며, TS는 프로퍼티의 존재 여부나 타입을 검사하지 않는다.

  let looselyTyped: any = 4;
  looselyTyped.ifItExists(); // 존재하지 않는 메서드 접근으로 인해 런타임 에러 발생
  looselyTyped.toFixed();

  let strictlyTyped: unknown = 4;
  // strictlyTyped.toFixed(); // 이 변수의 타입이 불확실한 상태에서 메서드를 호출하여 컴파일 에러 발생

  // object가 any 타입이면, 하위 프로퍼티도 any 타입으로 간주된다.

  let looselyTypedObject: any = {};
  let d = looselyTypedObject.a.b.c.d;

  // any 타입을 사용한다는 것은, 편의성을 얻고 그만큼 타입 안정성을 잃는 것과 같다.
  // TS를 사용하는 주요 동기 중 하나가 타입 안정성인 만큼, 되도록이면 any 타입을 사용하지 말 것을 권장한다.
};
