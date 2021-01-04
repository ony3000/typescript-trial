export default function () {
  let decimal: number = 6;
  let hex: number = 0xf00d;

  // ES2015 이상 지원됨
  let binary: number = 0b1010;
  let octal: number = 0o744;

  // ES2020 이상 지원됨
  let big: bigint = 100n;

  console.log(decimal);
  console.log(hex);
  console.log(binary);
  console.log(octal);
  console.log(big);
};
