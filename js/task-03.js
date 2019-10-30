'use strict';

const findLongestWord = function (string) {
    const words = string.split(' ');
    let longestWords = words[0];

    for (const word of words) {
        if (word.length > longestWords.length) {
            longestWords = word;
        }
    }
    return longestWords;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));