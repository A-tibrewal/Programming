//  [[1, 2, 3], 4, [5, [6, 7,[8,[9]]]]  ==> [1, 2, 3, 4, 5, 6, 7]

function flatten(arr) {
  let finalArr = [];
  for(let i = 0; i < arr.length; i++) {
    if( Array.isArray(arr[i])) {
      let newArr = flatten(arr[i]);
      finalArr = finalArr.concat(newArr);
    } else {
        finalArr.push(arr[i]);
    }
  }
  return finalArr;
};

const arr1 = [[1, 2, 3], 4, [5, [6, 7,[8,[9]]]]];
const result1 = flatten(arr1);
console.log(result1);


const arr2 = [[1],[2],[3],[4]];
const result2 = flatten(arr2);
console.log(result2);