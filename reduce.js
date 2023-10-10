const myArray = [1, 2, 3, 4, 5];

const intial = 10;
console.log(
  myArray.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    intial
  )
);
