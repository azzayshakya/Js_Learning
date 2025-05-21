console.log("lets start dsa");
const arr = [2, 4, 1, 7, 3, 5, 8];

// q1- find largest element

// 1
const sortedArr = arr.sort();
const length = sortedArr.length;
// console.log(arr[length - 2]);

// 2

let largestEle = arr[0];
let secLar = -Infinity;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > largestEle) {
    secLar = largestEle;
    largestEle = arr[i];
  }
}

// console.log("lrgest element ", largestEle, "2nd largest element ", secLar);

// q-2 array sorted or not

const arr2 = [1, 2, 3, 4, 5, 6, 7];

const isSorted = () => {
  for (i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] > arr2[i + 1]) {
      console.log("your array is not sorted");
      return;
    }
  }
  console.log("sorted brother");
};

// isSorted();

// q-3 remove duplicate

// 1 : two pointer (for sorted array)

const arr3 = [2, 2, 2, 6, 9, 12, 14, 16, 19, 19];

const removeDuplicateSorted = (arr) => {
  if (arr.length == 0) return [];
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;

      arr[i] = arr[j];
    }
  }
  return i + 1;
};

const k = removeDuplicateSorted(arr3);
// console.log(arr3.slice(0, k));
// console.log("Length after removing duplicates:", k);

// 2 : two loop (for un sorted array)

// Q-4 :  linear Search

const linearSearch = (arr, target) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return false;
};
let linearSearchArr = [12, 1, 65, 33, 7, 86, 88, 98, 99];

// console.log(linearSearch(linearSearchArr, 33));

// Q-5 find missing element

const findMissingElement = (arr) => {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
};

let cl = [1, 2, 3, 4, 5, 6, 8];
const missing = findMissingElement(cl);
// console.log("Missing Element:", missing);

// q - 5 max subcount in array

const MaxConsicutiveOnes = (arr) => {
  const n = arr.length;
  let count = 1;
  let MaxCount = 0;
  for (i = 0; i < n; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
      if (count > MaxCount) {
        MaxCount = count;
      }
    } else {
      count = 1;
    }
  }
  return MaxCount;
};

let MaxConsArray = [1, 1, 0, 1, 1, 1, 0, 1, 1];

// console.log(MaxConsicutiveOnes(MaxConsArray));

// 2-Sum
