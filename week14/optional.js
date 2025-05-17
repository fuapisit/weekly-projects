function isPalindrome(base) {
    let isPalindrome = true;

    for (let start = 0, end = base.length - 1; start <= end; start++, end--) {
        if (base[start] !== base[end]) {
            isPalindrome = false;
            break;
        }
    }
    
    return isPalindrome;
}

// 🔍 เรียกใช้ function
let result1 = isPalindrome("madam");   // true
console.log(result1);

let result2 = isPalindrome("hello");   // false
console.log(result2);
