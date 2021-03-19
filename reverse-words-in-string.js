//VERSION 1:
//hello I am sentence meen ==> olleh I ma ecnetnes neem

function reverse(str) {
  var newStr = '';
  let word = '';
  for(let i=0; i < str.length; i++)   {
    if ( str[i] !== ' ' ) {
      word = str[i] + word;
    } else {
      newStr =  newStr + ' ' + word;
      word = '';
    };
  }
  newStr =  newStr + ' ' + word;
  return newStr;
};


let result = reverse('hello I am sentence meen');
//olleh I ma ecnetnes neem
console.log(result);


let result1 = reverse('practice of lot a needs coding at good getting');
//ecitcarp fo tol a sdeen gnidoc ta doog gnitteg
console.log(result1);