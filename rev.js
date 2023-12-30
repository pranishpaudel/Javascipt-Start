function largestOfFour(arr) {
    greatarray= []
    for (let i=0;i<arr.length;i++){
      greatarray.push(Math.max(...arr[i]));
    }
    console.log( arr[greatarray.indexOf(Math.max(...greatarray))]);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);