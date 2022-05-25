function randomWholeNum() {
  // kanang * 20 para ma limit ang number between 0 to 19 lang
  return Math.floor(Math.random() * 20);
}

var print = randomWholeNum();

console.log(print);
