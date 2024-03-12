// Câu 4: Kiểm tra xem một đối tượng có chứa tất cả các key đã cho không?

// Input: 
// const club = {
//     name: "HIT HaUI",
//     age: 14,
//     country: "VI"
// };
// const keysToCheck = ["name", "age", "country"];

// Output: true

const club = {
    name: "HIT HaUI",
    age: 14,
    country: "VI"
};
const keysToCheck = ["name", "age", "country"];

//Solution 1
const answer1 = (obj, keyCheckArr) => {
    let keyArr = Object.keys(obj);
    return keyCheckArr.every((item) => keyArr.includes(item));
}

//Solution 2
const answer2 = (obj, keyCheckArr) => {
    for (let item of keyCheckArr) {
        if (!obj.hasOwnProperty(item)) return false;
    }
    return true;
}

// console.log(answer2(club, keysToCheck));