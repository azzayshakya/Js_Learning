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





// 
