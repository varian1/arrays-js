const myArray = [1, 3, 5, 7, 9];

console.log(myArray.find((el) => el === 7));

console.log(myArray.find((el) => el > 4));

const peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }];

console.log(peopleArray.find((person) => person.id === 4));
