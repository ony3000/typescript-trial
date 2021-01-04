// 튜플은 원소의 개수가 고정된 배열이다. 모든 원소가 같은 타입일 필요는 없다.

export default function () {
  // 튜플 선언
  let x: [string, number];

  // 초기화
  x = ["hello", 10];
  // x = [10, "hello"]; // 선언된 타입과 원소의 타입이 일치하지 않으면 컴파일 에러 발생

  console.log(x[0].substring(1));
  // console.log(x[1].substring(1)); // 선언된 타입에서 지원하지 않는 메서드 호출 시 컴파일 에러 발생

  // 튜플 범위를 벗어나는 인덱스 접근 시 컴파일 에러 발생
  // x[3] = "world";
  // console.log(x[5].toString());
};
