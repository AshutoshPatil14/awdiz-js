const arr = [10,20,5,30]

const findLargest= (arr) => {
    let max = 0
    for (let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
    return max
}

console.log(findLargest(arr))