"use strict";
// public 
// readonly
// protected --> only accessible within class and its subclasses
// private  --> it can only be accessible from the class within 
// accessors: get and set
// abstract 
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        // take the properties from the class above
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    // logDetails(): void{
    //     console.log(`The player ${this.nickname} level ${this.level} is ${this.age} years old `);
    // }
    get getLevel() {
        console.log("-------GET-------");
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
    }
}
// const will = new UserAccount("Willian", 30)
// console.log(will);
// will.logDetails()
const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
console.log(john.level);
john.logDetails();
john.logCharDetails();
john.setLevel = 499;
console.log(john.getLevel);
