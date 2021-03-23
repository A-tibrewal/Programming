//Find the starting and ending indices of all repeated characters from a string.

const input1 = "hellooooloo";

function startEndIndices(str) {
  let arr = [];
  let indices = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      if (indices.length) {
        indices[1] = i + 1;
      } else {
        indices = [i, i + 1];
      }
    } else {
      if (indices[0] && indices[1]) {
        arr.push(indices);
        indices = [];
      }
    }
  }
  return arr;
}

const result1 = startEndIndices(input1);
console.log(result1);
