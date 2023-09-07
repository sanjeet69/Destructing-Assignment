function removeDuplicates ( arr) {
     const uniqueSet = new Set (arr) ;

     const uniqueArray = [...uniqueSet];

     return uniqueArray;
}

const numbers = [ 1, 5, 7, 3,  3, 5, 2];

const  uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers);