function fizBuzz(n) {
  if (n % 15 === 0) {
    console.log('fizBuzz');
  } else if ( n % 5 === 0) {
    console.log('Fizz');
  } else if ( n % 3 === 0) {
    console.log('Buzz');
  }
};


fizBuzz(15);
