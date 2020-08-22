// ES5
const square = function (x) {
  return x * x
}

// ES5 NAMED FUNCTION

function square2(x) {
  return x * x
}

console.log(square2(8))

// ES6 (arrow function always anonymous)

// const squareArrow = (x) => {
//   return x * x
// }

// NEW SYNTAX
const squareArrow = (x) => x * x

console.log(squareArrow(9))

const getFirstName = (fullName) => fullName.split(" ")[0]

console.log(getFirstName("Loic Boset"))
