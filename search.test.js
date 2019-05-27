const binarySearch = require('./binary_search');

const arr = [1, 8, 13, 21, 29, 34, 36, 52, 63, 99, 121, 178, 201, 239];

test('Index of 21 is 3', () => expect(binarySearch(arr, 21)).toBe(3));
test('Index of 121 is 10', () => expect(binarySearch(arr, 121)).toBe(10));
test('Index of 1 is 0', () => expect(binarySearch(arr, 1)).toBe(0));
test('Index of 101 is -1', () => expect(binarySearch(arr, 101)).toBe(-1));
test('Index of 239 is 13', () => expect(binarySearch(arr, 239)).toBe(13));
