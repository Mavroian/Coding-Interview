//merge 2 arrays into one array
//e.g., input [1,2,3,4,5] and [6,7,8,9]
// output a single array [1,2,3,4,5,6,7,8,9]

//first solution
const margeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
}