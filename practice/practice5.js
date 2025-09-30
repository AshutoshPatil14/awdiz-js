let str = "hello"
console.log(str.split("").reverse().join(""))

let str1 = "madam";
let flag = false;
let revstr = str1.split("").reverse().join("")
if (str1 == revstr) {
  flag = true;
}
console.log(flag)

let arr = [10,20,4,45,99]
let newarr = [...new Set(arr)]
newarr = newarr.sort((a,b) => b-a)
console.log(newarr[1])

let str2 = "interview"
let count = 0
for(let i=0; i<str2.length; i++){
    if(str2[i]=="a" || str2[i]=="e" || str2[i]=="i" || str2[i]=="o" || str2[i]=="u" ){
        count++
    }
}
console.log(count)

let arr2 = [1, 2, 2, 3, 4, 4, 5];
let arr3 = [];
for(let i=0; i<arr2.length; i++){
    if(!arr3.includes(arr2[i])){
        arr3.push(arr2[i])
    }
}
console.log(arr3)

function findFibonacci(n) {
  let a = 0;
  let b = 1;
  let result = [a, b];
  for (let i = 2; i < n; i++) {
    let next = a + b;
    result.push(next);
    a = b;
    b = next;
  }
  return result;
}
console.log(findFibonacci(5));

function findFactorial(n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  return fact;
}
console.log(findFactorial(5));


