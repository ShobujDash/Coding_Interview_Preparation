// Task 2: Facebook Post-Like Tracking System
function trackLikes(n, m, initialLikes, queries) {
  // Iterate over each query
  queries.forEach((query) => {
    let [post_no, like_increase] = query;

    // Increase the likes of the given post
    initialLikes[post_no - 1] += like_increase;

    // Find the post with the maximum likes (smallest index in case of tie)
    let maxLikes = -1;
    let maxPostNo = -1;
    for (let i = 0; i < n; i++) {
      if (initialLikes[i] > maxLikes) {
        maxLikes = initialLikes[i];
        maxPostNo = i + 1; // 1-based index
      }
    }

    // Output the result for this query
    console.log(maxPostNo + " " + maxLikes);
  });
}

// Input Example:
const n = 5; // Number of posts
const m = 3; // Number of queries
const initialLikes = [10, 20, 30, 40, 50]; // Initial likes on each post
const queries = [
  [3, 25], // Post 3 receives 25 more likes
  [2, 35], // Post 2 receives 35 more likes
  [5, 10], // Post 5 receives 10 more likes
];

// Calling the function
trackLikes(n, m, initialLikes, queries);
