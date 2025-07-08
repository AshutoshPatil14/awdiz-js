

let marks = 95

switch (true) {
    case (90 < marks && marks <= 100):
        console.log("A")        
        break;
    case (80 < marks && marks <= 90):
        console.log("B")        
        break;
    case (70 < marks && marks <= 80):
        console.log("C")        
        break;
    case (60 < marks && marks <= 70):
        console.log("D")        
        break;

    default:
        console.log("F")
        break;
}
