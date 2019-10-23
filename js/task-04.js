'use strict';

const formatString = function (string) {
    const sentence = string.split('');
    const maxElements = 40;

    if (sentence.length > maxElements) {
        while (sentence.length > maxElements) {
            sentence.pop();
        }
        return sentence.join('') + `...`;
    } else {
        return string;
    }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
