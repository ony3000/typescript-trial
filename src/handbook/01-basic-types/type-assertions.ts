// 가끔은, TS보다 값에 대해 더 많이 알게 되는 경우도 있다.
// 일반적으로, 일부 엔티티의 타입이 현재 타입보다 더 구체적일 수 있음을 알고있을 때 발생한다.

// 타입 주장이란, TS에게 "날 믿어, 내가 무슨 짓을 하고있는지 알아."라고 알려주는 방법이다.
// 다른 프로그래밍 언어의 타입 캐스팅과 유사하지만, 해당 값에 대해 특별한 검사를 수행하거나 실제 타입을 바꾸지는 않는다.
// 이것은 런타임에는 영향을 미치지 않으며, 컴파일러에서만 사용된다.
// TS는 당신(프로그래머)이 필요한 검사를 수행했다고 간주한다.

export default function () {
  // 타입 주장에는 두 가지 형식이 있다. 하나는 as 문법이고, 다른 하나는 <> 문법이다.

  let someValue: unknown = "this is a string";
  let strLength: number = (someValue as string).length;

  let anotherValue: unknown = "this is a string";
  let anotherLength: number = (<string>anotherValue).length; // TS와 JSX를 같이 사용할 때는 이 문법을 사용할 수 없음

  console.log(strLength);
  console.log(anotherLength);
};
