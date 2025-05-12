console.log("lets start asd");
const arr = [2, 4, 1, 7, 3, 5, 8];

// q1- find largest element

// 1
const sortedArr = arr.sort();
const length = sortedArr.length;
console.log(arr[length - 2]);

// 2

let largestEle = arr[0];
let secLar = -Infinity;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > largestEle) {
    secLar = largestEle;
    largestEle = arr[i];
  }
}

console.log("lrgest element ", largestEle, "2nd largest element ", secLar);

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

isSorted();

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
console.log(arr3.slice(0, k));
console.log("Length after removing duplicates:", k);

// 2 : two loop (for un sorted array)
