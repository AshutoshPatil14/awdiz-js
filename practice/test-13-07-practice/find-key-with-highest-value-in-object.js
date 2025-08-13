let obj1 = { a: 1, b: 5, c: 3 };
let obj2 = { x: 100, y: 99 };

function highest(obj) {
  let maxValue = maxKey = null;

  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return maxKey;
}



console.log(highest(obj2)); 