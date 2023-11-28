function maxNumber (a, b) {
  if (a > b) {
    return a
  } else if (b > a) {
    return b
  } else {
    return 'a and b are equal'
  }
}
console.log(maxNumber(14, 8))
console.log(maxNumber(2, 7))
