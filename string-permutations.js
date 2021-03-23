const swap = (str, i, j) => {
  var arr = str.split("");
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
};

function permutate(str, start = 0, end = str.length) {
  if (start == end) {
    console.log(str);
    return str;
  }

  for (let i = start; i < end; i++) {
    let current = i;
    str = swap(str, start, current);
    permutate(str, start + 1, end);
    str = swap(str, start, current);
  }
}

permutate("ABCDE");
