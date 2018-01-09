module.exports = function () {
  // console.log('hey module'); // test that this function is firing

  return {
    quick: quick,
    merge: merge,
  }
};


  //consider using a swap function
  // function swap (a, b) {

  // }

  //quick sort
  function quick (arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let pivot = arr[0];
    let lesser = [];
    let greater = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
      // if (arr[i] < pivot) {
        lesser.push(arr[i]);
      } else {
        arr[i] > arr[0];
        greater.push(arr[i]);
      }
      
    }

    console.log('pivot ' + pivot);
    console.log('lesser ' + lesser);
    console.log('greater ' + greater);

    let final = lesser.concat(pivot, greater);
    console.log('final array ' + final);

    // console.log(lesser);
    // console.log(greater);
    // console.log(quick(lesser).concat(pivot, quick(greater)));
    // console.log(quick(arr.slice()));
  };
  // console.log(quick(arr.slice()));




  //merge sort
  function merge(arr) {





  }





