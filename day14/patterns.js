let store = null;

for (let i = 1; i <= 5; i++) {
  store = "";
  for (let j = 1; j <= i; j++) {
    store += "* ";
  }
      console.log(store);
}

let result = null

for (let i=1; i<=5; i++){
    result = ''
    for(let j=1; j<=i; j++){
        result += j + ' '
    }
    console.log(result)
}

let ans = null

for (let i=1; i<=5; i++){
    ans = ''
    for(let j=1; j<=i; j++){
        ans += (j*2) + ' '
    }
    console.log(ans)
}

// pyramid
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

let num = 5;

for (let i = 1; i <= num; i++) {
  let save = "";
  for (let j = i; j <= num-1; j++) {
      save += " ";
    }
    for (let k = 1; k <= i; k++) {
      save += "* ";
    }
  console.log(save);
}

// inverted pyramid

let num3 = 5;
for (let i = 1; i <= num3; i++) {
  let final = "";
  for(let k=1;k<i; k++){
    final += " "
  }
  for (let j = i; j <= num3; j++) {
    final += "* ";
  }
  console.log(final);
}

// Diamond pattern
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
let input = 20;
let num2 = input / 2;

for (let i = 1; i <= num2; i++) {
  let save = "";
  for (let j = i; j <= num2 - 1; j++) {
    save += " ";
  }
  for (let k = 1; k <= i; k++) {
    save += "* ";
  }
  console.log(save);
}

for(let i =1; i<=num2; i++){
    let aftersave = ""
    for (let l = 1; l <= i; l++) {
        aftersave += " ";
    }
    for (let m = i; m <= num2-1; m++) {
        aftersave += "* ";
    }
    console.log(aftersave)
}