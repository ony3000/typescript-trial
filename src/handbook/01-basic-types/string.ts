export default function () {
  let color: string = "blue";
  color = 'red';

  console.log(color);

  let fullName: string = `Bob Bobbington`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

  console.log(sentence);

  let anotherSentence: string =
    "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";

  console.log(anotherSentence);
};
