function findMode(arr) {
    if (arr.length === 0) return null;
    
    let frequencyMap = {};
    let maxFrequency = 0;
    let mode = 0;
    
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    
        if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mode = num;
        }
    }
    
    return mode;
 };
 
 let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
 console.log(result1); // 3
 
 let result2 = findMode([7, 7, 1, 1, 7]);
 console.log(result2); // 7
 
 let result3 = findMode([7, 7, 1, 1, 7, 1]);
 console.log(result3); // 7