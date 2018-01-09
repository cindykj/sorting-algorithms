module.exports = function () {
  // console.log('hey module'); // test that this function is firing

  return {
    quick: quick,
    // merge: merge,
  }
};

//quick sort
function quick(arr) {
  if (arr.length < 1) {
    return arr;
  }

  let pivot = arr[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < arr.length; i++) {
    // if (arr[i] < pivot) {
    if (arr[i] < arr[0]) {
      lesser.push(arr[i]);
    } else {
      (arr[i] > arr[0])
      greater.push(arr[i]);
    }

  }

// console.log('pivot ' + pivot);
// console.log('lesser ' + lesser);
// console.log('greater ' + greater);

// let final = lesser.concat(pivot, greater);
// console.log('final array ' + final);

console.log(quick(lesser).concat(pivot, quick(greater)));
return quick(lesser).concat(pivot, quick(greater));

}