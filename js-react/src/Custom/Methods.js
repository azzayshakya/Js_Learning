export const CustomMap = (array = [], callback) => {
  if (!Array.isArray(array)) {
    // console.log("ajju this is not array ", array);
  }
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const val = callback(array[i], i, array);
    result.push(val);
  }
  return result;
};

export const CustomFilter = (arr = [], callback) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const data = callback(arr[i]);
    console.log("ajju data", data);
    if (data == true) {
      result.push(arr[i]);
    }
  }
  console.log("ajju before filter data", arr);
  console.log("ajju filter data", result);
  return result;
};
