// Câu 3: Chuyển mảng thành đối tượng.

// Input: 
// const hit14 = ["H", "I", "T", 1, 4]

// Output: 
// const result = {
// 	key1: "H",
// 	key2: "I",
// 	key3: "T",
// 	key4: 1,
// 	key5: 4
// }

// # đối tượng nhiều thuộc tính hơn thì tăng số sau key

const hit14 = ["H", "I", "T", 1, 4];

//Solution 1
const answer1 = (arr) => {
    let result = {};
    arr.forEach((item, index) => {
        let key = `key${index + 1}`;
        result = Object.assign(result, {[key]: item})
    })
    return result;
}

//Solution 2
const answer2 = (arr) => {
    let result = {};
    let ans = arr.reduce((acc, curr, index) => {
        let key = `key${index + 1}`;
        result = { ...acc, [key]: curr };
        return result;
    }, {})
    return ans;
}

//Solution 3
const answer3 = (arr) => {
    let result = {};
    arr.forEach((item, index) => {
        if (Array.isArray(item)) {
            result[`key${index + 1}`] = answer3(item);
        }
        else result[`key${index + 1}`] = item;
    })
    return result;
}

// console.log(answer1(hit13));
