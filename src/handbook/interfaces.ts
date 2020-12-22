console.group('Interfaces');

console.group('Our First Interface');
{
  interface LabeledValue {
    label: string;
  }

  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }

  let myObj = { size: 10, label: 'Size 10 Object' };
  printLabel(myObj);
}
console.groupEnd();

console.group('Optional Properties');
{
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width ** 2;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: 'black' });
  console.log(mySquare);
}
console.groupEnd();

console.group('Readonly properties');
{
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let p1: Point = { x: 10, y: 20 };
  // p1.x = 5; // error

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  // ro[0] = 12; // error
  // ro.push(5); // error
  // ro.length = 100; // error
  // a = ro; // error

  console.log(p1);
  console.log(a);
  console.log(ro);
}
console.groupEnd();

console.group('Excess Property Checks');
{
  {
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      return {
        color: config.color || 'red',
        area: config.width ? config.width ** 2 : 20,
      };
    }

    // let mySquare = createSquare({ colour: 'red', width: 100 }); // Error
    let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // OK, property 'opacity' will ignore
    console.log(mySquare);
  }

  {
    interface SquareConfig {
      color?: string;
      width?: number;
      [propName: string]: any;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      return {
        color: config.color || 'red',
        area: config.width ? config.width ** 2 : 20,
      };
    }

    let mySquare = createSquare({ colour: 'red', width: 100 }); // OK, property 'colour' will ignore
    console.log(mySquare);
  }

  {
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      return {
        color: config.color || 'red',
        area: config.width ? config.width ** 2 : 20,
      };
    }

    let squareOptions = { colour: 'red', width: 100 };
    let mySquare = createSquare(squareOptions); // property 'colour' will ignore
    console.log(mySquare);

    let anotherSquareOptions = { colour: 'red' };
    // let anotherMySquare = createSquare(anotherSquareOptions); // Error: variable does not have any common object property.
  }
}
console.groupEnd();

console.group('Function Types');
{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;

  mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  };

  let anotherMySearch: SearchFunc;

  anotherMySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
  }

  console.log(mySearch);
  console.log(anotherMySearch);
}
console.groupEnd();

console.group('Indexable Types');
{
  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ['Bob', 'Fred'];

  let myStr: string = myArray[0];

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  // Error: indexing with a numeric string might get you a completely separate type of Animal!
  interface NotOkay {
    [x: number]: Animal;
    // [x: string]: Dog;
  }

  interface NumberDictionary {
    [index: string]: number;
    length: number;
    // name: string; // Error
  }

  interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;
    name: string;
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  let anotherMyArray: ReadonlyStringArray = ['Alice', 'Bob'];
  // anotherMyArray[2] = 'Mallory'; // Error

  console.log(myStr);
}
console.groupEnd();

console.group('Class Types');
{
  {
    interface ClockInterface {
      currentTime: Date;
      setTime(d: Date): void;
    }

    class Clock implements ClockInterface {
      currentTime: Date = new Date();
      setTime(d: Date) {
        this.currentTime = d;
      }
      constructor(h: number, m: number) {}
    }

    console.log(Clock);
  }

  {
    interface ClockConstructor {
      new (hour: number, minute: number): ClockInterface;
    }

    interface ClockInterface {
      tick(): void;
    }

    function createClock(
      ctor: ClockConstructor,
      hour: number,
      minute: number
    ): ClockInterface {
      return new ctor(hour, minute);
    }

    class DigitalClock implements ClockInterface {
      constructor(h: number, m: number) {}
      tick() {
        console.log('beep beep');
      }
    }

    class AnalogClock implements ClockInterface {
      constructor(h: number, m: number) {}
      tick() {
        console.log('tick tock');
      }
    }

    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);

    const Clock: ClockConstructor = class Clock implements ClockInterface {
      constructor(h: number, m: number) {}
      tick() {
        console.log('beep beep');
      }
    };

    console.log(DigitalClock);
    console.log(digital);
    console.log(AnalogClock);
    console.log(analog);
    console.log(Clock);
  }
}
console.groupEnd();

console.group('Extending Interfaces');
{
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = 'blue';
  square.sideLength = 10;
  square.penWidth = 5.0;

  console.log(square);
}
console.groupEnd();

console.group('Hybrid Types');
{
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

  console.log(c);
}
console.groupEnd();

console.group('Interfaces Extending Classes');
{
  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() {}
  }

  class TextBox extends Control {
    select() {}
  }

  // Error
  // class ImageControl implements SelectableControl {
  //   private state: any;
  //   select() {}
  // }

  console.log(Button);
  console.log(TextBox);
}
console.groupEnd();

console.groupEnd();
