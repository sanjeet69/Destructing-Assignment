function findMaxAndMin (arr) {
    const max = Math.max ( ...arr);
    const min = Math.min(...arr);


    return{max, min};
}

const inputArray = [3,4,6,7,1,9];

const result = findMaxAndMin(inputArray);


console.log("maximum and minimum values:", result);