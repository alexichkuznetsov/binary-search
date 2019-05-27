function binarySearch(arr, searchTerm) {
  let left = 0,
    right = arr.length - 1,
    middle = null;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === searchTerm) {
      return middle;
    } else if (searchTerm < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
