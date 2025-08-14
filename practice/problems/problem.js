

// // Merge overlapping intervals


// let intervals = [[1,3],[2,6],[8,10],[15,18]];

// function mergeIntervals(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let merged = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     let last = merged[merged.length - 1];
//     if (intervals[i][0] <= last[1]) {
//       last[1] = Math.max(last[1], intervals[i][1]);
//     } else {
//       merged.push(intervals[i]);
//     }
//   }
//   return merged;
// }
// console.log(mergeIntervals(intervals)); // [[1,6],[8,10],[15,18]]




// // OR





// let intervals = [[1,3],[2,6],[8,10],[15,18]];

// function mergeIntervals(intervals) {
//   // Step 1: Sort intervals by start time
//   intervals.sort((a, b) => a[0] - b[0]);

//   let result = [];
//   let current = intervals[0]; // start with the first interval

//   // Step 2: Go through each interval
//   for (let i = 1; i < intervals.length; i++) {
//     let next = intervals[i];

//     // If they overlap, merge them
//     if (next[0] <= current[1]) {
//       current[1] = Math.max(current[1], next[1]);
//     } else {
//       // If they don't overlap, push the current one and move to next
//       result.push(current);
//       current = next;
//     }
//   }

//   // Step 3: Push the last interval
//   result.push(current);

//   return result;
// }

// console.log(mergeIntervals(intervals)); // [[1,6],[8,10],[15,18]]



