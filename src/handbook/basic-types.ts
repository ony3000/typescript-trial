//-------- boolean --------//
let isDone: boolean = false;

//-------- number --------//
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//-------- string --------//
let color: string = 'blue';
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

//-------- array --------//
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];

//-------- tuple --------//
let x: [string, number]; // Declare a tuple type
x = ['hello', 10];

//-------- enum --------//
enum Color {
  Red = 1,
  Green,
  Blue,
};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);

//-------- unknown --------//
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false;

declare const maybe: unknown;
if (notSure === true) {
  // TypeScript knows that 'notSure' is a boolean here
}
if (typeof notSure === 'string') {
  // TypeScript knows that 'notSure' is a string here
}

//-------- any --------//
declare function getValue(key: string): any;
// const str: string = getValue('myString'); // return value of 'getValue' is not checked

let looselyTyped: any = 4;
looselyTyped.toFixed(); // compiler doesn't check for the existence of the property

//-------- void --------//
function warnUser(): void {
  console.log('This is my warning message');
}

//-------- null and undefined --------//
let u: undefined = undefined;
let n: null = null;

//-------- never --------//
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

//-------- object --------//
declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

//-------- type assertions --------//
let someValue: unknown = 'this is a string';

// The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.
let strLength: number = (someValue as string).length;
let anotherStrLength: number = (<string>someValue).length;
