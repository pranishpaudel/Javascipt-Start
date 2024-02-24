function randomRange(myMin, myMax) {
    let iniitt= Math.floor(Math.random()*myMin);
    done=false;
    while (done==false){
        if (iniitt>myMin){
            return iniitt;
            done=true;
        }
    }
  }


//now

console.log(randomRange(14,15))
