// Task 1: Job Scheduling Problem

function jobScheduling(start, end, profit) {
  const n = start.length;

  // Combine the jobs into a single array
  const jobs = [];
  for (let i = 0; i < n; i++) {
    jobs.push({ start: start[i], end: end[i], profit: profit[i] });
  }

  // Sort jobs by end time
  jobs.sort((a, b) => a.end - b.end);

  // dp[i] will store the max profit until jobs[i]
  const dp = new Array(n).fill(0);
  dp[0] = jobs[0].profit;

  // Binary search to find the last non-conflicting job
  function binarySearch(index) {
    let low = 0,
      high = index - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (jobs[mid].end <= jobs[index].start) {
        if (jobs[mid + 1].end <= jobs[index].start) {
          low = mid + 1;
        } else {
          return mid;
        }
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }

  for (let i = 1; i < n; i++) {
    let inclProfit = jobs[i].profit;
    const l = binarySearch(i);
    if (l != -1) {
      inclProfit += dp[l];
    }
    dp[i] = Math.max(dp[i - 1], inclProfit);
  }

  return dp[n - 1];
}

// Test case
const start = [1, 2, 3, 5];
const end = [3, 5, 6, 8];
const profit = [50, 20, 70, 60];

console.log("Answer:", jobScheduling(start, end, profit)); // Output: 120
