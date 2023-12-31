function confirmEnding(str, target) {
    let splitstr= str.split('');
    console.log( ( splitstr[splitstr.length-1])==target?true:false);
  }
  
  confirmEnding("Vindas", "s");