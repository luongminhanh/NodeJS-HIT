// Câu 5: Kiểm tra xem một đối tượng có rỗng không?

// Input:
// const cat = { name: "meow", age: 2 };
// Ouput: false

// Input: const dog = {};
// Output: true

const dog = {};

//Solution 1
const answer1 = (obj) => {
    return Object.keys(obj).length === 0;
};

//Solution 2
const answer2 = (obj) => {
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) return false;
    }
    return true;
}

//Solution 3
const answer3 = (obj) => {
    return JSON.stringify(obj) === "{}";
}

// console.log(answer3(dog));