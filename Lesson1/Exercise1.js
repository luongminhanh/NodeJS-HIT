// Câu 1: Xoá phần tử trùng trong mảng và sắp xếp lại theo chiều giảm dần.
// Input: 
// const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];
// Output: [8, 6, 3, 2, 1, 0, -9];

const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];

// Solution 1: forEach, compare last item before push
const answer1 = (arr) => {
    let arrSort = [...arr].sort((a, b) => b - a);
    let ans = [];
    arrSort.forEach((a) => {
        if (ans.length === 0 || ans[ans.length - 1] !== a)
            ans.push(a);
    })
    return ans;
}

//Solution 2: forEach, check result array includes
const answer2 = (arr) => {
    let ans = [];
    arr.forEach((item) => {
        if (!ans.includes(item)) {
            ans.push(item);
        }
    });
    return ans.sort((a, b) => b - a);
}

//Solution 3: using set
const answer3 = (arr) => [...new Set(arr)].sort((a, b) => b - a);

//Solution 4: using filter 
const answer4 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index).sort((a, b) => b - a);

//Solution 5: using reduce
const answer5 = (arr) => {
    let arrSort = [...arr].sort((a, b) => b - a);
    return arrSort.reduce((acc, curr) => {
        let ans = [...acc];
        if (!ans.includes(curr)) {
            ans.push(curr);
        }
        return ans;
    }, []);
}

// console.log(answer1(numbers));
// console.log(answer2(numbers));
// console.log(answer3(numbers));
// console.log(answer4(numbers));
// console.log(answer5(numbers));

module.exports = {answer5};

