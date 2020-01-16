function cariMedian(arr) {
  // you can only write your code here!
  var arrLength = arr.length
  var rounding = Math.ceil(arrLength / 2)

  if(arrLength % 2 == 0){
      for(i = 0; i < arrLength; i ++){
        if(i == rounding){
            return (arr[i]+arr[i-1]) / 2
        }
      }
  }
  else {
      for(i = 0; i < arrLength; i ++){
      if(i == rounding){
          return arr[i-1]
      }
      }
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5