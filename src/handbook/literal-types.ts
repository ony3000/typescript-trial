console.group('Literal Types');

console.group('Literal Narrowing');
{
  // We're making a guarantee that this variable
  // helloWorld will never change, by using const.

  // So, TypeScript sets the type to be "Hello World", not string
  const helloWorld = 'Hello World';

  // On the other hand, a let can change, and so the compiler declares it a string
  let hiWorld = 'Hi World';

  console.log(helloWorld);
  console.log(hiWorld);
}
console.groupEnd();

console.group('String Literal Types');
{
  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === 'ease-in') {
        // ...
      }
      else if (easing === 'ease-out') {
        // ...
      }
      else if (easing === 'ease-in-out') {
        // ...
      }
      else {
        // It's possible that someone could reach this by ignoring your types though.
      }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, 'ease-in');
  // button.animate(0, 0, 'uneasy'); // Error

  function createElement(tagName: 'img'): HTMLImageElement;
  function createElement(tagName: 'input'): HTMLInputElement;
  function createElement(tagName: string): Element {
    // ... code goes here ...

    return new Element();
  }
}
console.groupEnd();

console.group('Numeric Literal Types');
{
  function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
  }

  const result = rollDice();

  console.log(result);

  interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
  }

  // setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
}
console.groupEnd();

console.group('Boolean Literal Types');
{
  interface ValidationSuccess {
    isValid: true;
    reason: null;
  }

  interface ValidationFailure {
    isValid: false;
    reason: string;
  }

  type ValidationResult = ValidationSuccess | ValidationFailure;
}
console.groupEnd();

console.groupEnd();
