
let array=[1,2,3,4]

let decisionarray=array.map(num =>{

    if(num%2==0){
        return "Even"
    }else{
        return "Odd"        
    }
})

console.log(decisionarray)


// Output: [ 'Odd', 'Even', 'Odd', 'Even' ]


