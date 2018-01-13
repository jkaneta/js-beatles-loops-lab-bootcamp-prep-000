function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (let i = 0; i < musicians.length; i++0) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
}