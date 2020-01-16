function ubahHuruf(kata) {
  // you can only write your code here!
  var huruf = 'abcdefghijklmnopqrstuvwxyz';
  var newHuruf = "";

  for (i = 0; i < kata.length; i++) {
    for(j = 0; j < huruf.length; j++){
      if(kata[i] === huruf[j]){
        newHuruf += huruf[j+1];
      }
    }
  }
  return newHuruf
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu