const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have Succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => value + "!!!!")
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
