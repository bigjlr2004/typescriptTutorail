//Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = string | number;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types

let myName: "Dave";

let userName: "Dave" | "Amy" | "John";

userName = "Amy";

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

logMsg(subtract(77, 55));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(77, 55));

//Optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(addAll(2, 3, 7));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 4));

//Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4));

//Never type

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should not ever happen");
};
