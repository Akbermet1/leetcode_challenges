const removeDuplicates = require('./leetcode_challenge26');

const arr1 = [0,0,1,1,1,2,2,3,3,4];
const arr2 = [1,1,1,1,1,6];
const arr3 = [0,0,0,1,2,2,3,4,4,4,4,5,6,7,9,10,11];

test(`calculates the number of unique integers in ${arr1}`, () => {
    expect(removeDuplicates(arr1)).toBe(5)
})

test(`calculates the number of unique integers in ${arr2}`, () => {
    expect(removeDuplicates(arr2)).toBe(2)
})

test(`calculates the number of unique integers in ${arr3}`, () => {
    expect(removeDuplicates(arr3)).toBe(11)
})
