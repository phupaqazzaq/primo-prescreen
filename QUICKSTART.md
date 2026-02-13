Clone github

Pre requisites
1.node --version v16 or higher
2.npm --version v8 or higher


Install Dependencies
1.npm install

Specify the directory of the folder in terminal
1. cd merge-array-ts

Compile 
1.npm run build


Run test
1.npm test

Expected output 
PASS  tests/merge.test.ts
  ✓ should merge three sorted arrays (1 ms)
  ✓ should handle duplicate values
  ✓ should handle empty array
  ✓ should handle all empty arrays
  ✓ should handle larger range

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
...
Ran all test suites.

For inspecting the test case please see the merge.test.ts file in the tests folder
For inspecting my code please see the merge.ts file in the src folder