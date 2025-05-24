// 1 largest element

// approach 1
const largestEle = (arr) => {
  let larsgest = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larsgest) {
      larsgest = arr[i];
    }
  }
  return larsgest;
};
let arr = [2, 1, 3, 1, 1, 17, 5, 4];
// console.log(largestEle(arr));

// approach 2 :B
const largestEle2 = (arr2) => {
  let length = arr2.length;
  arr2.sort();
  return arr2[length - 1];
};
let arr2 = [2, 1, 3, 1, 19, 17, 5, 4];
// console.log(largestEle(arr2));

//2:  2nd largest element

const slr = (arr) => {
  let largest = null;
  let slar = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      slar = largest;

      largest = arr[i];
    }
  }
  return slar;
};
let arr3 = [21, 34, 54, 77, 88, 2, 32, 2];
// console.log(slr(arr3));

// 3: if array is sorted or not

// 4: remove duplicates from sorted array

// case 1:  if sorted
const RemoveDuplicate = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i);
  return arr.slice(0, i + 1);
};
const arr4 = [1, 1, 3, 3, 4, 4, 5];
// console.log(RemoveDuplicate(arr4));

// 5: left rotate array by one place

// case 1:  if sorted
const LeftRotateByOne = (arr) => {
  let temp = arr[0];
  let n = arr.length;
  for (let j = 1; j < arr.length; j++) {
    arr[j - 1] = arr[j];
  }
  arr[n - 1] = temp;

  return arr;
};
const arr5 = [1, 2, 3, 4, 5];
// console.log(LeftRotateByOne(arr5));

// 5: left rotate array by d place

// 6 moves zero to end
const MovesZeroToEnd = (arr) => {
  let i = -1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == 0) {
      i = j;
      break;
    }
  }
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] != 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;

      i++;
    }
  }
  return arr;
};
const arr6 = [1, 2, 0, 0, 3, 4, 5, 0, 0, 3];
// console.log(MovesZeroToEnd(arr6));

// Find the number that appear ones and others two

const FsingleOccNumber = (arr) => {
  let occurence = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        occurence++;
      }
    }
    if (occurence == 1) {
      return arr[i];
    }
    occurence = 0;
  }
};
const arr7 = [1, 1, 24, 6, 6, 1];

// console.log(FsingleOccNumber(arr7));

//  do it with xor too ;

// 10 : Longest Subarray with given Sum K(Positives)

// way 1 :  using two loops
const LongestSubArrayWithKpositive = (arr, k) => {
  let maxlength = 0;
  for (let i = 0; i < arr.length; i++) {
    let s = 0;
    for (let j = i; j < arr.length; j++) {
      s += arr[j];
      if (s == k) {
        maxlength = Math.max(maxlength, j - i + 1);
      }
    }
  }
  return maxlength;
};

// way 2 :  using two pointers

const LongestSubArrayWithKpositiveWay2 = (a, k) => {
  let n = a.length;

  let left = 0;
  let right = 0;
  let sum = a[0];
  let maxLen = 0;
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= a[left];
      left++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
    if (right < n) {
      sum += a[right];
    }
  }

  return maxLen;
};

const arr9 = [5, 1, 1, 1, 2, 3];
let k = 6;

// console.log(LongestSubArrayWithKpositiveWay2(arr9, k));

// Q: 2 SUM
// way :1 using two loops
const TwoSum = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      if (sum == k) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [-1, -1];
};

let arr10 = [2, 6, 5, 8, 11];
let target = 14;
// console.log(TwoSum(arr10, target));

// way : 2  using two pointers

const TwoSumT = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = 0;
    sum = arr[left] + arr[right];
    if (sum == k) {
      return [arr[left], arr[right]];
    }
    if (sum > k) {
      right--;
    }
    if (sum < k) {
      left++;
    }
  }
  return [-1, -1];
};
let arr11 = [2, 6, 5, 8, 11];
let target2 = 13;
console.log(TwoSumT(arr11, target2));
