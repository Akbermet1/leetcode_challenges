const removeElement = require('./challenge27');
const arr1 = [0,1,2,2,3,0,4,2];
const arr2 = [1,1,3,3,4,1];

test(`removes all instances of an integer in a given array`, () => {
    expect(removeElement(arr1, 2)).toBe(5)
    expect(removeElement(arr2, 1)).toBe(3)
})