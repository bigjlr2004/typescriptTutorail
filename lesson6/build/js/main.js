"use strict";
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
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const John = new Coder("John", "Rock", 45);
console.log(John.getAge());
// console.log(John.age);
// console.log(John.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Apple", "Sara", "Jazz", 25);
//Sara.name = "Sarah";
console.log(Sara.name);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("rips"));
//////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Mike = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Mike.id);
console.log(Amy.id);
//////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["Motley Crue", "Guns n Roses", "Temple of the Dog", "Eminem"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
//Throws custom error
//myBands.data = ["BVanHalen", 5150];
