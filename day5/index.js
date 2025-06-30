let x = 1

do {
    console.log(x)
    x++
} while (x <=10);

// This code will print numbers from 1 to 10 using a do-while loop.

for (x = 1; x <= 10; x++) {
    console.log(x);
    
    if (x==5) {
        break
    }

}

// This code will print numbers from 1 to 10 using a for loop and break when x equals 5.

for (x=1; x <= 10; x++) {
    if (x == 5) {
        continue;
    }
    console.log(x);
}

// This code will print numbers from 1 to 10 using a for loop and skip the number 5 using continue.


let a=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b=[11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c=[21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

console.log(a)
a.push(11); 
console.log(a)
a.pop();
console.log(a)
a.shift();
console.log(a)

b.unshift(10);
console.log(b)

a.splice(2, 0, 3.5);
console.log(a)

c.slice(0, 5);
console.log(c.slice(0, 5));

c.toString();
console.log(c.toString());