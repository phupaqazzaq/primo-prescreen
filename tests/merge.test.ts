import { merge } from '../src/merge';

test('should merge three sorted arrays', () => {
  const result = merge([0, 2, 4], [1, 3, 5], [9, 7, 6]);
  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
});

test('should handle duplicate values', () => {
  const result = merge([0, 2, 2], [1, 2], [5, 3, 0]);
  expect(result).toEqual([0, 0, 1, 2, 2, 2, 3, 5]);
});

test('should handle empty array', () => {
  const result = merge([0, 2], [], [5, 3]);
  expect(result).toEqual([0, 2, 3, 5]);
});

test('should handle all empty arrays', () => {
  const result = merge([], [], []);
  expect(result).toEqual([]);
});

test('should handle larger range', () => {
  const result = merge([0, 5, 10], [2, 7], [12, 8, 3]);
  expect(result).toEqual([0, 2, 3, 5, 7, 8, 10, 12]);
});
