const reverseString = (str) => {
  //check input
  if (!str || str.length < 2 || typeof (str) === "string") {
    return -1
  }
  const result = ""
  for (let index = str.length - 1; index > 0; index--) {

    result += str[index]
  }
  return result
}