// Given a 6 x 6 array:

// [[1 1 1 0 0 0]
// [0 1 0 0 0 0]
// [1 1 1 0 0 0]
// [0 0 0 0 0 0]
// [0 0 0 0 0 0]
// [0 0 0 0 0 0]]

// We define an hourglass  A in  to be a subset of values 
// with indices falling in this pattern in 's graphical representation:
// a b c
//   d
// e f g

// There are 16  hourglasses in the array , and an hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in  array , then print the maximum hourglass sum.

// For example, given the 2D array:

[
  [-9, -9, -9, 1, 1, 1]
  [0, -9, 0, 4, 3, 2]
  [-9, -9, -9, 1, 2, 3]
  [0, 0, 8, 6, 6, 0]
  [0, 0, 0, -2, 0, 0]
  [0, 0, 1, 2, 4, 0]
]

// We calculate the following 16 hourglass values:

// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18

// Our highest hourglass value is 28 from the hourglass:

// Function Description

// arr: an array of integers
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Output Format

// Print the largest (maximum) hourglass sum found in .

function hourGlassSUm() {
  //your code here
  let layer1 = 0
  let layer2 = 1
  let layer3 = 2
  let array = []
  let i = 0

  while (i < arr.length) {
    if (i <= 3) {
      array.push(arr[layer1][i] + arr[layer1][i + 1] + arr[layer1][i + 2] + arr[layer2][i + 1] + arr[layer3][i] + arr[layer3][i + 1] + arr[layer3][i + 2])
      i++
    }
    if (i === 4) {
      layer1++
      layer2++
      layer3++
      i = 0
    }
    if (layer1 === 4) {
      break
    }
  }

  return Math.max(...array)

}