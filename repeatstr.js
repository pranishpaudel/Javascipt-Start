function repeatStringNumTimes(str, num) {
    newstr=''
    for (let i=1;i<=num;i++){
      newstr+=str;
    }
    return (newstr);
  }
  
  console.log(repeatStringNumTimes("*", 3));