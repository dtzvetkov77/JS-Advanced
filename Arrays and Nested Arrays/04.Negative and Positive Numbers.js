function negativeAndPositive(arr){
let newArr = [];
for(let element of arr){
    if(element >= 0){
    newArr.push(element)
    }else{
        newArr.unshift(element)
    }
}
for(number of newArr){
    console.log(number);
}
}
negativeAndPositive([7, -2, 8, 9]);