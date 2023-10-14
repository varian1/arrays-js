function addTo80(n) {
  console.log("Long time");
  return n + 80;
}

// addTo80(5);
// addTo80(5);
// addTo80(5);

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    console.log(cache[n]);
    return cache[n];
  } else {
    console.log("Long time");
    cache[n] = n + 80;
    console.log(cache[n]);
    return cache[n];
  }
}

memoizedAddTo80(5);
memoizedAddTo80(6);
memoizedAddTo80(6);
