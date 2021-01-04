// object 타입은 원시 타입이 아닌 것을 나타내는 유형이다.
// 즉, number, string, boolean, bigint, symbol, null, undefined 타입이 아닌 모든 것이 object 타입이라 할 수 있다.

declare function create(o: object | null): void;

export default function () {
  create({ prop: 0 });
  create(null);

  // 이하 타입 불일치로 컴파일 에러 발생
  // create(42);
  // create("string");
  // create(false);
  // create(undefined);

  // 하지만 일반적으로 object 타입은 사용할 필요가 없다.
};
