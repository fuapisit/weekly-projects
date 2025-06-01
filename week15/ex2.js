function sumEvenNumbers(numbers) {
    let evenNumbers = 0;
    
    for (let number of numbers) {
        if (number % 2 == 0) {
            evenNumbers += number;
        }
    }
    return evenNumbers;
}
 
 let result1 = sumEvenNumbers([1, 2, 3, 4]);
 console.log(result1); // 6
 
 let result2 = sumEvenNumbers([7, 11, 20, 8]);
 console.log(result2); // 28