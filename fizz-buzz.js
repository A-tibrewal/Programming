
// print 'fizz' if div by 5
// print 'buzz' if div by 3
// print 'FizzBuzz' if div by 3 and 5
// for all number 1 to n

function printFZ(n) {
  function fizBuzz(n) {
  if (n % 15 === 0) {
    console.log('fizBuzz');
  } else if ( n % 5 === 0) {
    console.log('Fizz');
  } else if ( n % 3 === 0) {
    console.log('Buzz');
  }
};
  for (let i = 0; i <= n ; i++) {
    fizBuzz(i)
  }
}

printFZ(15);
