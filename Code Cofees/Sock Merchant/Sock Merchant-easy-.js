// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.

// Constraints
// -> 1<= n<= 100
// -> 1<= ar[i]<100 where 0<= i < n
// Output Format

// Return the total number of matching pairs of socks that John can sell.

// Sample Input -->10 20 20 10 10 30 50 10 20

// Sample Output --> 3


const sockMerchant = (ar) => {
  let result = 0
  let resultObj = {}
  for (let i = 0; i < ar.length; i++) {
    resultObj[ar[i]] ? resultObj[ar[i]] += 1 : resultObj[ar[i]] = 1
  }
  for (let sock in resultObj) {
    if (resultObj[sock] % 2 === 0) {
      result += resultObj[sock] / 2
    } else if ((resultObj[sock] - 1) % 2 === 0 && (resultObj[sock] - 1) !== 0) {
      result += (resultObj[sock] - 1) / 2
    }
  }


  return result
}