const promiseOne = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('Async task is complete')
    resolve({"username":'pranish'})
  },1000);
})


promiseOne.then((user)=>{
console.log(user);
})



