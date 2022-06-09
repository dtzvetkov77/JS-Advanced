function addAndRemoveElements(arr) {
  let num = 0;
  newArr = [];
  for (let index = 0; index < arr.length; index++) {
    num++;
    if (arr[index] === "add") {
      newArr.push(num);
    } else {
      newArr.pop(num);
    }
  }
  if(newArr.length == 0){
      return 'Empty'
  }else{
return newArr.join("\n");
  }
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
