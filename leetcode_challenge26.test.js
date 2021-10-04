const removeDuplicates = require('./removeDuplicates');

test("calculates the number of unique integers", () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
})
