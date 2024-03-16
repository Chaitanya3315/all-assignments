/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let st1 = Array.from(str1.toLowerCase()).sort();
  let st2 = Array.from(str2.toLowerCase()).sort();
  console.log(st1,st2);
  if(st1.length != st2.length){
    return false;
  }else{
    return st1.toString() == st2.toString() ? true : false;
  }
}

module.exports = isAnagram;
