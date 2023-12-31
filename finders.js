function bouncer(arr) {
    const falsy_arr= [false, null, 0, "", undefined, NaN];
    for (let i=0;i<arr.length;i++){
  if (falsy_arr.indexOf(arr[i])==-1){
    arr.splice(i);
  }
    }
    return arr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));