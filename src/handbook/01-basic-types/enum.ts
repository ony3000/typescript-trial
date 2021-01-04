export default function () {
  enum Color {
    // enum으로 정의한 데이터 타입에는, 대응되는 number 타입의 값이 각각 부여된다.
    // 기본적으로 0부터 시작해서 1씩 증가하지만, 직접 지정할 수도 있다.

    Red = 1,
    Green, // 값을 지정하지 않은 타입에는, (바로 직전 타입에 부여된 값 + 1)이 부여된다.
    Blue = 4,
  }

  let c: Color = Color.Green;

  console.log(c);

  let colorName: string = Color[2];

  console.log(colorName);
};
