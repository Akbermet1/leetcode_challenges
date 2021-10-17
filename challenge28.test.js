const strStr = require('./challenge28');

test('should find the index of the first occurence of needle in haystack', () => {
    expect(strStr("hello", "ll")).toBe(2)
    expect(strStr("", "")).toBe(0)
    expect(strStr("aaaaa", "bba")).toBe(-1)
    expect(strStr("blablablablah", "blah")).toBe(9)
    expect(strStr("aaaaaaaaaaaaaaa", "aaaah")).toBe(-1)
    expect(strStr("smth", "")).toBe(0)
    expect(strStr("sun", "sunshine")).toBe(-1)
})
