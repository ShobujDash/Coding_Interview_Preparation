// Task 1: Next Smaller Element (NSE) Detection

function nextSmallerElement(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1); 


  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        result[i] = arr[j];
        break; 
      }
    }
  }


  console.log(result.join(" "));
}

// Example 01
nextSmallerElement([4, 5, 2, 10, 8]);

// Example 02
nextSmallerElement([1, 3, 4, 2, 5, 1]);
