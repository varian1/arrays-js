let myArray = [1, 2, 3, 4];
myArray = myArray.map((el) => el + 1);
console.log(myArray);
myArray = myArray.map(() => {
  return "b";
});

console.log(myArray);
