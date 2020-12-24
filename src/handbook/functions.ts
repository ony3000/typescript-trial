console.group('Functions');

console.group('Typing the function');
{
  // Named function
  function add(x: number, y: number): number {
    return x + y;
  }

  // Anonymous function
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };

  console.log(add);
  console.log(myAdd);
}
console.groupEnd();

console.group('Writing the function type');
{
  let myAdd: (baseValue: number, increment: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

  console.log(myAdd);
}
console.groupEnd();

console.group('Inferring the types');
{
  // The parameters 'x' and 'y' have the type number
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };

  // myAdd has the full function type
  let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
    return x + y;
  };

  console.log(myAdd);
  console.log(myAdd2);
}
console.groupEnd();

console.group('Optional and Default Parameters');
{
  {
    function buildName(firstName: string, lastName: string) {
      return firstName + ' ' + lastName;
    }

    // let result1 = buildName('Bob'); // Error, too few parameters
    // let result2 = buildName('Bob', 'Adams', 'Sr.'); // Error, too many parameters
    let result3 = buildName('Bob', 'Adams');

    console.log(result3);
  }

  {
    function buildName(firstName: string, lastName?: string) {
      if (lastName) {
        return firstName + ' ' + lastName;
      }
      else {
        return firstName;
      }
    }

    let result1 = buildName('Bob');
    // let result2 = buildName('Bob', 'Adams', 'Sr.'); // Error, too many parameters
    let result3 = buildName('Bob', 'Adams');

    console.log(result1);
    console.log(result3);
  }

  {
    function buildName(firstName: string, lastName = 'Smith') {
      return firstName + ' ' + lastName;
    }

    let result1 = buildName('Bob');
    let result2 = buildName('Bob', undefined);
    // let result3 = buildName('Bob', 'Adams', 'Sr.'); // Error, too many parameters
    let result4 = buildName('Bob', 'Adams');

    console.log(result1);
    console.log(result2);
    console.log(result4);
  }

  {
    function buildName(firstName = 'Will', lastName: string) {
      return firstName + ' ' + lastName;
    }

    // let result1 = buildName('Bob'); // Error, too few parameters
    // let result2 = buildName('Bob', 'Adams', 'Sr.'); // Error, too many parameters
    let result3 = buildName('Bob', 'Adams');
    let result4 = buildName(undefined, 'Adams');

    console.log(result3);
    console.log(result4);
  }
}
console.groupEnd();

console.group('Rest Parameters');
{
  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + ' ' + restOfName.join(' ');
  }

  let buildNameFunc: (fname: string, ...rest: string[]) => string = buildName;

  let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie');

  console.log(employeeName);
}
console.groupEnd();

console.group('`this` and arrow functions');
{
  let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
      // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();

  console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
console.groupEnd();

console.group('`this` parameters');
{
  interface Card {
    suit: string;
    card: number;
  }

  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }

  let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();

  console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
console.groupEnd();

console.group('Overloads');
{
  let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

  function pickCard(x: any): any {
    if (typeof x === 'object') {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    else if (typeof x === 'number') {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }

  let myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 },
  ];

  let pickedCard1 = myDeck[pickCard(myDeck)];
  console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

  let pickedCard2 = pickCard(15);
  console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
}
console.groupEnd();

console.groupEnd();
