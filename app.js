"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResult = [];
const strResult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); // if we omit + ,it will treated num1 and num2 as strings 
    numResult.push(result);
    const stringResult = add(num1, num2);
    strResult.push(stringResult);
    console.log(result);
    console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, strResult);
});
