// ES6 Class
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "attack with" + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);

    this.type = type;
    console.log(this);
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  makeFort() {
    return "strongest fort in the world made";
  }
}

const dolby = new Elf("Dolby", "cloth", "house");
console.log(dolby);
console.log(dolby.attack());
const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek);
console.log(shrek.makeFort());
// const peter = new Elf("Peter", "stones");
// const ogre = { ...peter };
// console.log(peter);
// console.log(ogre);
// console.log(peter.__proto__);
// console.log(ogre.__proto__);
// console.log(peter instanceof Elf);
// console.log(peter.attack());
// const sam = new Elf("Sam", "fire");
// console.log(sam.attack());
