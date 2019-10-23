'use strict';

const logItems = function (array) {
    for (const value of array) {
        let i = array.indexOf(value);
        i = i + 1;
        console.log(`${i} - ${value}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);