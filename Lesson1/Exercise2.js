const {answer5} = require('./Exercise1.js');
// Câu 2: Tìm phần tử lớn thứ 2 của mảng.

// Input: 
// const numbers = [2, -7, 9, 5, 2, 0, 5]

// Output: [5]

const numbers = [2, -7, 9, 5, 2, 0, 5];

const answer = (arr) => {
    let ans = answer5(arr);
    return ans[1];
}
console.log(`[${answer(numbers)}]`);
