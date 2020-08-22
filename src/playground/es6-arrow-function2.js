// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments) only in ES5
  return a + b
}

console.log(add(55,1,2))

// this keyword - no longer bound

// const user = {
//   name: "Andrew",
//   cities: ["Pretoria", "London", "Brussels"],
//   printPlacesLived: function () {
//     // const that = this;

//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city)
//     })
//   }
// }

const user = {
  name: "Loic",
  cities: ["London", "NY", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city
    );
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
  }
};

// ARROW FUNCTIONS ALLOW TO ACCES VALUES OUTSIDE OF THE FUNCTION


// user.printPlacesLived();
console.log(user.name);
console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 10,
  multiply() {
    console.log("Executed")
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};
console.log(multiplier.numbers);
console.log(multiplier.multiply());
