let age=66


if (age < 0) {
    console.log("Invalid input");
}else if(age <13){
    console.log("You're a child")
}else if (13 <=age && age < 20){
    console.log("You're a teenager")
}else if (20 <= age && age < 60){
    console.log("You're an adult")
}else {
    console.log("You're a senior citizen")
}