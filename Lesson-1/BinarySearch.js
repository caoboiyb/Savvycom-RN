const binarySearch = (array, key, left, right) => {
  return left > right
    ? -1
    : (() => {
        const middle = Math.floor((right + left) / 2);
        const index =
          array[middle] === key
            ? middle
            : array[middle] > key
              ? binarySearch(array, key, left, middle - 1)
              : binarySearch(array, key, middle + 1, right);
        return index;
      })();
};

const search = (input, target) => {
  return binarySearch(input, target, 0, input.length - 1);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 6

console.log(search(array, target))
