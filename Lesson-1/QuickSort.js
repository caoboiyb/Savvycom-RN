"use strict";

const quickSort = (arr, left, right) => {
  var len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

const partition = (arr, pivot, left, right) => {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
};

const swap = (arr, i, j) => {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const sort = input => {
  return quickSort(input, 0, input.length - 1);
};

const array = [2, 1, 5, 22, 12, -4, 3, 0];

console.log(sort(array));
