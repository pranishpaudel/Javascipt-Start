const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = (arr)=>{
    for (i=0;i<arr.length;i++){
        arr[i]= `<li class="text-warning">${arr[i]}</li>\n`
    }
    return arr;
    };

    // Only change code above this line
  
    return failureItems(arr);
  }
  
  const failuresList = makeList(result.failure);


  console.log(failuresList);