const hero= fetch('https://api.ipify.org/')
.then(response=>String(response))
.then(data=>{
    console.log(data);
})
console.log(hero);