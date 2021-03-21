// write a code to insert the numbers(1-100) spirally(as in the //snake ladder game)

// SOLution 1

// print numbers in spiral order as in snake and ladder
function spiral() {
  var arr = [];
  var count = 100;
  for(let i = 1; i <= 10; i ++) {
    let subArr = [];
    for(let j = 1; j <= 10; j++) {
      subArr.push(count);
      count--;
    }
    if ( i % 2 == 0 ) {
      subArr = subArr.reverse();
    }
    arr.push(subArr);
  }
  console.table(arr);
};

//spiral();


 // SOLution 2 ( without reverse)
 
function spiral2() {
  var arr = [];
  var count = 100;
  for(let i = 10; i >= 1; i--) {
    let subArr = [];
    for(let j = 10; j >= 1; j--) {
      if ( i % 2 == 1 ) {
        subArr.push( (i * 10) - j + 1);
      } else {
        subArr.push(count);
      }
      count--;
    }
    arr.push(subArr);
  }
  console.table(arr);
};

spiral2();