function countVowels(text) {
    const lowerText = text.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of lowerText) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  let result1 = countVowels("hello");
  console.log(result1); // 2
  
  let result2 = countVowels("TECHUP");
  console.log(result2); // 2
  