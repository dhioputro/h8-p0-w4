
function cariModus(arr) {
  // you can only write your code here!
  var result = []
  for(i = 0; i < arr.length; i++){
      for(j = 1; j < arr.length; j++){
          if(arr[i] === arr[i+j]){
              result.push(arr[i])
          }
      }
  }
  //console.log(result)

  if(result.length > arr.length){
      return -1
  }
  else if(result.length > 0){
      return result[0]
  } else {
      return -1
  }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1