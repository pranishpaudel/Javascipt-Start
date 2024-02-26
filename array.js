function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.concat(...arr);
      
      // Only change code above this line
      num--;
    }
    return newArr;

//nowb
    //added some function
  
  console.log(copyMachine([true, false, true], 3));
