//version 2
// geeks quiz practice code ==> code practice quiz geeks

function reverse(str) {

  let word = '';
  let sentence = '';

  for (let i = 0; i < str.length; i++) {
    if ( str[i] !== ' ') {
      word = word + str[i];
    } else {
      sentence = word + ' ' + sentence;
      word = '';
    }
  };
  sentence = word + ' ' + sentence;
  return sentence;
}

let result = reverse('geeks quiz practice code');
console.log(result);


let result1 = reverse('getting good at coding needs a lot of practice');
console.log(result1);