

let str= "HelloWorld"

let UpperCase = false
let LowerCase = false

for(let i=0; i<str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        UpperCase = true;
    }
    if(str[i] === str[i].toLowerCase()){
        LowerCase = true;
    }
}

console.log("UpperCase:", UpperCase, "LowerCase:", LowerCase);

// Output: UpperCase: true LowerCase: true