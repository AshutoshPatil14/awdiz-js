

let array=[1,2,1,3,1,4]
let value=1
let count=0

for (let i=0; i<array.length; i++)
{
    if(array[i]===value)
    {
        count++
    }
}
console.log(count)