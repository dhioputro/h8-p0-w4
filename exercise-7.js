function urutkanAbjad(str) {
   
  var alpha = [];
  for (let i = 0; i < str.length; i++) {
      alpha.push(str[i]);
  }

  for (let i = 0; i < alpha.length; i++) {
      for (let j = 0; j < alpha.length; j++) {
      if (alpha[j] > alpha[j + 1]) {
          var temp = alpha[j];
          alpha[j] = alpha[j + 1];
          alpha[j + 1] = temp;
      }
      }
  }

  return alpha.join('');
}

//TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'