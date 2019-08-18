/* (Q_N0.6) - Using divide and conquer approach
  @function sort takes in an input array and  recursively calls itself to split the array till the each element of an array represents an array of itself
  for ex: [34,45,76,8,12] => [[34],[45],[76],[8],[12]] and then uses merge method written below to sort and merge.
  @param arr Array to be sorted
  @return an array which is sorted.
*/
  function sortArr(arr) {
    if(arr.length===1) {
      return arr;
    }
    const midIndex = Math.floor(arr.length/2);
    const leftHalfArr = arr.slice(0, midIndex);
    const rightHalfArr = arr.slice(midIndex);
    return mergeArr(sortArr(leftHalfArr),sortArr(rightHalfArr));
  }

/*
  @function merge takes two sorted arrays and checks each element of both the arrays whichever is small that array element would be copied to
  the result and iteration repeats till either of the two arrays end. Later since the input arrays were already sorted, the remaing elements of either of the arrays would be simply copied to the resultant array.
  @param two sorted arrays
  @return an array which is again sorted based on the input.
*/
  function mergeArr(sortedArr1, sortedArr2 ) {
    let resultantArr = [];
    while(sortedArr1.length && sortedArr2.length) {
      if(sortedArr1[0] <= sortedArr2[0]) {
        resultantArr.push(sortedArr1.shift());
      } else {
        resultantArr.push(sortedArr2.shift());
      }
    }
    
    return [...resultantArr,...sortedArr1,...sortedArr2];
  }

  console.log(sortArr([12, 11, 13, 5, 6, 7]));
