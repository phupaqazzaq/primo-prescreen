"use strict";
// Example usage of the merge function
// To run this file: npm run build && node dist/example.js
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
console.log('=== Merge Arrays Example ===\n');
// Example 1: Basic usage
console.log('Example 1: Basic usage');
const result1 = (0, merge_1.merge)([1, 3, 5], [2, 4, 6], [9, 7, 0]);
console.log('Input:');
console.log('  collection_1 (ascending): [1, 3, 5]');
console.log('  collection_2 (ascending): [2, 4, 6]');
console.log('  collection_3 (descending): [9, 7, 0]');
console.log('Output:', result1);
console.log('Expected: [0, 1, 2, 3, 4, 5, 6, 7, 9]');
console.log();
// Example 2: With negative numbers
console.log('Example 2: With negative numbers');
const result2 = (0, merge_1.merge)([-5, -2, 0], [-3, 1, 4], [6, 2, -1]);
console.log('Input:');
console.log('  collection_1 (ascending): [-5, -2, 0]');
console.log('  collection_2 (ascending): [-3, 1, 4]');
console.log('  collection_3 (descending): [6, 2, -1]');
console.log('Output:', result2);
console.log('Expected: [-5, -3, -2, -1, 0, 1, 2, 4, 6]');
console.log();
// Example 3: With empty arrays
console.log('Example 3: With empty arrays');
const result3 = (0, merge_1.merge)([1, 3], [], [5, 2]);
console.log('Input:');
console.log('  collection_1 (ascending): [1, 3]');
console.log('  collection_2 (ascending): []');
console.log('  collection_3 (descending): [5, 2]');
console.log('Output:', result3);
console.log('Expected: [1, 2, 3, 5]');
console.log();
// Example 4: With duplicates
console.log('Example 4: With duplicates');
const result4 = (0, merge_1.merge)([1, 3, 3], [2, 3], [5, 3, 1]);
console.log('Input:');
console.log('  collection_1 (ascending): [1, 3, 3]');
console.log('  collection_2 (ascending): [2, 3]');
console.log('  collection_3 (descending): [5, 3, 1]');
console.log('Output:', result4);
console.log('Expected: [1, 1, 2, 3, 3, 3, 3, 5]');
console.log();
// Example 5: Large arrays
console.log('Example 5: Large arrays');
const result5 = (0, merge_1.merge)([1, 5, 10, 15, 20], [3, 7, 12, 18], [25, 22, 19, 16, 11, 8, 4, 2]);
console.log('Input:');
console.log('  collection_1 (ascending): [1, 5, 10, 15, 20]');
console.log('  collection_2 (ascending): [3, 7, 12, 18]');
console.log('  collection_3 (descending): [25, 22, 19, 16, 11, 8, 4, 2]');
console.log('Output:', result5);
console.log('Expected: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 15, 16, 18, 19, 20, 22, 25]');
//# sourceMappingURL=example.js.map