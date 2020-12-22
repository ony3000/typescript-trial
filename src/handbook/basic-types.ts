console.group('Basic Types');

console.group('Boolean');
{
  let isDone: boolean = false;

  console.log(isDone);
}
console.groupEnd();

console.group('Number');
{
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  let big: bigint = 100n;

  console.log(decimal);
  console.log(hex);
  console.log(binary);
  console.log(octal);
  console.log(big);
}
console.groupEnd();

console.group('String');
{
  let color: string = 'blue';
  color = 'red';

  let fullName: string = `Bob Bobbington`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

  let anotherSentence: string =
    "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";

  console.log(color);
  console.log(sentence);
  console.log(anotherSentence);
}
console.groupEnd();

console.group('Array');
{
  let list: number[] = [1, 2, 3];
  let anotherList: Array<number> = [1, 2, 3];

  console.log(list);
  console.log(anotherList);
}
console.groupEnd();

console.group('Tuple');
{
  // Declare a tuple type
  let x: [string, number];

  x = ['hello', 10]; // OK
  // x = [10, 'hello']; // Error
  console.log(x);
}
console.groupEnd();

console.group('Enum');
{
  enum Color {
    // By default, enums begin numbering their members starting at 0.
    // You can change this by manually setting the value of one of its members.
    Red = 1,
    Green,
    Blue,
  };
  let c: Color = Color.Green;
  let colorName: string = Color[2];

  console.log(Color);
  console.log(c);
  console.log(colorName);
}
console.groupEnd();

console.group('Unknown');
declare const maybe: unknown;
// const aNumber: number = maybe; // Error

{
  let notSure: unknown = 4;
  notSure = 'maybe a string instead';
  notSure = false;

  if (notSure === true) {
    // TypeScript knows that 'notSure' is a boolean here

    const aBoolean: boolean = notSure;
    // const aString: string = notSure; // Error
  }
  if (typeof notSure === 'string') {
    // TypeScript knows that 'notSure' is a string here

    const aString: string = notSure;
    // const aBoolean: boolean = notSure; // Error
  }

  console.log(notSure);
}
console.groupEnd();

console.group('Any');
declare function getValue(key: string): any;

// OK, return value of 'getValue' is not checked
// const str: string = getValue('myString');

{
  let looselyTyped: any = 4;
  // looselyTyped.ifItExists(); // Runtime Error: compiler doesn't check for the existence of the property
  looselyTyped.toFixed();

  let anotherLooselyTyped: any = {};
  let d = anotherLooselyTyped.a?.b?.c?.d; // type propagation: 'd' is also 'any' type

  console.log(looselyTyped);
  console.log(d);
}
console.groupEnd();

console.group('Void');
{
  function warnUser(): void {
    console.log('This is my warning message');
  }

  console.log(warnUser);
}
console.groupEnd();

console.group('Null and Undefined');
{
  let u: undefined = undefined;
  let n: null = null;

  console.log(u);
  console.log(n);
}
console.groupEnd();

console.group('Never');
{
  // Function returning never must not have a reachable end point
  function error(message: string): never {
    throw new Error(message);
  }

  // Inferred return type is never
  function fail() {
    return error('Something failed');
  }

  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }

  console.log(error);
  console.log(fail);
  console.log(infiniteLoop);
}
console.groupEnd();

console.group('Object');
declare function create(o: object | null): void;

{
  // create({ prop: 0 }); // OK
  // create(null); // OK
}
console.groupEnd();

console.group('Type assertions');
{
  let someValue: unknown = 'this is a string';

  // The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.
  let strLength: number = (someValue as string).length;
  let anotherStrLength: number = (<string>someValue).length;

  console.log(someValue);
  console.log(strLength);
  console.log(anotherStrLength);
}
console.groupEnd();

console.groupEnd();
