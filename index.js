const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const tutSplit = tutorials.map((tutorials) => {
    return tutorials.split(" ");
    
  })
  console.log(tutSplit);
  console.log(tutSplit[0]);
}

titleCased(tutorials); 

// const nestSplit = tutSplit.map((tutSplit) => {
  //   return tutSplit.split("");
  // })