'use strict';

const checkForSpam = function (str) {
    const searchSpam = '[spam]';
    const searchSale = 'sale';
    const string = str;

    let strLower = string.toLowerCase();
    let strArray = strLower.split(' ');

    return strArray.includes(searchSpam) || strArray.includes(searchSale);

}

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));