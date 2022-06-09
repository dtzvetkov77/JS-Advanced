function wordsUpperCase(input) {
  let pattern = /\w+/g;
  let wordMatch = pattern.exec(input);
  let words = [];
  while (wordMatch != null) {
    let word = wordMatch[0];
    word = word.toUpperCase();
    words.push(word);
    wordMatch = pattern.exec(input);
  }
  console.log(words.join(', '));
}
wordsUpperCase("Hi, how are you?");
