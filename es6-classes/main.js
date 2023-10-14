// ES6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "attack with" + this.weapon;
  }
}

const peter = new Elf("Peter", "stones");
const ogre = { ...peter };
console.log(peter.__proto__);
console.log(ogre.__proto__);
console.log(peter instanceof Elf);
// console.log(Elf instanceof peter);
console.log(peter.attack());
const sam = new Elf("Sam", "fire");
console.log(sam.attack());
