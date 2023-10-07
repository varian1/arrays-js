const myArray = [1, 2, 3, 4, 5];

console.log(myArray.includes(3)); // return true

console.log(myArray.includes(9)); // return false

console.log(myArray.includes(2, 3)); // starting from four it's going to check if starting from four includes two, it doesn't or a fice has two which it doen't so it'll return false

console.log(myArray.includes(2, 1)); //  retrun true

const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(
  "newArray.includes({ id: 2 }) return",
  newArray.includes({ id: 2 })
);

//we point it to a different object but it looked the exact same
const obj1 = { id: 1 };
const obj2 = { id: 1 };
/* if we do object one equals object two, it's going to give us false, beacuse javascript is comparing if the reference memory is the same,
    it's not comparing whether or not this value of this object
*/
console.log("obj1 === obj2", obj1 == obj2);

const obj3 = obj2;
console.log("obj3 === obj2", obj3 == obj2);

console.log("obj2", obj2);

console.log("obj3", obj3);

const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };

const newestArray2 = [o1, o2, o3];
// the elements inside are not new objects, but they're all pointing
console.log("newestArray2", newestArray2.includes(o1));
