let array1=[1,2,3,4,5,6,7,8,9,10]

let newarray1= array1.map(number => number*5)
console.log(newarray1)
///////////////////////////////////////////////////////////

let array2=["Ted","Marshall","Barney"]

console.log(array2)
array2.forEach(name => { console.log("Hey", name)});
///////////////////////////////////////////////////////////

let array3=[67,62,84,16,9,64,683,42,897,32,765,12,3,67,96]

let evenarray3=array3.filter(num => num%2==0)
let oddarray3=array3.filter(num => num%2!=0)
evenarray3=evenarray3.sort()
oddarray3=oddarray3.sort()
console.log("Even numbers " + evenarray3)
console.log("Odd numbers " + oddarray3)
///////////////////////////////////////////////////////////

let array4=[35,57,97,356,9,80,745,35,68,8,46,97,-9]
let even=0
let odd=0
let i
let evenarray4=[] 
let oddarray4=[]

array4=array4.sort()
for (i=0; i<array4.length; i++)
    {
        if(array4[i]%2==0)
            {
                even++
                evenarray4.push(array4[i])
            }
            else
            {
                odd++
                oddarray4.push(array4[i])
            }
    }
console.log(array4.length)
console.log("Even Count = " + even + " Even numbers = " + evenarray4)
console.log("Odd Count = " + odd + " Odd numbers = " + oddarray4)
///////////////////////////////////////////////////////////