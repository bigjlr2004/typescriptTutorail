//Classes

// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;

//   constructor(
//     name: string,
//     music: string,
//     age: number,
//     lang: string  ) {
//       this.name = name;
//       this.music = music;
//       this.age = age;
//       this.lang = lang;
//   }
// }

//class with visibility modifiers

class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const John = new Coder("John", "Rock", 45);
console.log(John.getAge());
// console.log(John.age);
// console.log(John.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Apple", "Sara", "Jazz", 25);

//Sara.name = "Sarah";
console.log(Sara.name);
// console.log(Sara.age);
// console.log(Sara.lang);
////////////////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");

console.log(Page.play("rips"));

//////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Mike = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Mike.id);
console.log(Amy.id);

//////////////////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["Motley Crue", "Guns n Roses", "Temple of the Dog", "Eminem"];
console.log(myBands.data);

myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);

//Throws custom error
//myBands.data = ["BVanHalen", 5150];
