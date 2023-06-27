let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

guitars = stringArr;
mixedData = guitars;

let test = [];

let bands: string[] = [];
bands.push("Van Halen");

//Tuple specifies what data can be in which position

let myTuple: [string, number, boolean] = ["John", 45, false];

let mixed = ["John", 1, false];

mixed = myTuple;

//Objects

let myObj: object;

myObj = [];

console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "John",
  prop2: "45",
  prop3: false,
};

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()} you are ${guitarist.active}`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));

//Enums
//Unlike most TypeScript features, Enums are not a type-level addition ot JAvaScript but something added to the language at runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
console.log(Grade.A);
