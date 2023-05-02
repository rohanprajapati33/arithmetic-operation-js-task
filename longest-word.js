//  function longestvalues(string){

//  }

//  function LongestWord(string) {
//    const word = string.split(" ");
//    const longestWord = "";

//    for (let i = 0; i < word.length; i++) {
//      if (word[i].length > longestWord.length) {
//        longestWord = word[i];
//       }
//     }
//     return longestWord;
//   }
//  console.log(LongestWord("My name is Rohan  & rohantarang Prajapati. I am studying in last year of engineering  rohantarang"));

//find longest word
console.time();
const words = "My name is Rohan Prajapati Prajapati";
const spltword = words.split(" ");
spltword.sort(function (a, b) {
  return b.length - a.length;
});
console.log(spltword[0]);
console.timeEnd();

//find longest word
function findLongestWord(string) {
  const words = string.split(" ");
  const sortword = words.sort((a, b) => b.length - a.length);

  return sortword[0];
}
console.log(
  findLongestWord(
    "My name is Rohan Prajapati. I am studying in last year of engineering  rohantarang"
  )
);
