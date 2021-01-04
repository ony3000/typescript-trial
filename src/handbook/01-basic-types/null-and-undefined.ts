// TS에서 undefined와 null은 각각 undefined와 null이라는 이름의 타입을 갖는다. void 타입처럼, 그 자체로는 별로 쓸모가 없다.

export default function () {
  let u: undefined = undefined;
  let n: null = null;

  // 기본적으로 null 타입과 undefined 타입은 다른 모든 타입의 하위 타입으로 간주된다.
  // 이것은 number 타입과 같은 다른 알려진 타입의 변수에 null과 undefined를 할당할 수 있음을 의미한다.

  // 하지만, TS 설정에서 `strictNullChecks`가 활성화된 경우, null과 undefined는 unknown 타입과 any 타입, 그리고 자신의 타입에만 할당할 수 있다.
  // (한 가지 예외는, undefined는 void 타입에도 할당할 수 있다.)
  // 이것은 많은 일반적인 에러를 방지하는 데 도움이 된다.
  // 만약 문자열 또는 null 또는 undefined를 전달하고 싶을 경우, union 타입 `string|null|undefined`를 사용할 수 있다.

  console.log(u);
  console.log(n);
};
