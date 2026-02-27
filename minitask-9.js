function processArray (arr, processor) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = processor(arr[i]);
    }
    return newArr;
}

const showNumber = num => `Number: ${num}`;
const makeDolar = num => `$${num}`;
const addFive = num => num + 5;

const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, showNumber));
console.log(processArray(numbers, makeDolar));
console.log(processArray(numbers, addFive));
