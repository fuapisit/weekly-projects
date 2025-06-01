
function groupAndCalculate(numbers) {
    return numbers.reduce((acc, num) => {
        if (num === 0) {
            acc.zero += 1;
        } else if (num % 2 === 0) {
            acc.even *= num;
        } else {
            acc.odd += num;
        }
        return acc;
    }, { even: 1, odd: 0, zero: 0 });
};

let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
console.log(result1); // { even: 8, odd: 8, zero: 2 }

let result2 = groupAndCalculate([0, 0, 1, 3, 5]);
console.log(result2); // { even: 1, odd: 9, zero: 2 }

let result3 = groupAndCalculate([2, 4, 6]);
console.log(result3); // { even: 48, odd: 0, zero: 0 }