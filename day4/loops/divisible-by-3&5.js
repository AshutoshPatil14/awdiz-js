let num=1
let count=0

for (num; num<=100; num++){
    if (num%3 ==0 && num%5 ==0){
        count++;
    }
}

console.log(count)