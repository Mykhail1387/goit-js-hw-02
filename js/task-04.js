'use strict';

const formatString = function (string) {
    const maxWords = 40;
    const words = maxWords > string.length ? string : string.substring(0, 40) + '...';

    return words;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));


//=============================способ №2========================================================================================

// const formatString = function (string) {
//     const maxWords = 40;
//     const sliceString = string.slice(0, 40);
//     const words = maxWords > string.length ? string : sliceString + '...';

//     return words;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// console.log(formatString('Curabitur ligula sapien.'));

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

//==============================================================================================================================