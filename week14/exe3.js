function findMax(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
        max = nums[i];
        }
    }
    return max;
    }

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2