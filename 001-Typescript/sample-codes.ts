function addTwoNumbers(num1, num2) {
  return num1 + num2;
};

console.log(addTwoNumbers(5, 6));
console.log(addTwoNumbers('5', '6'));


// ------ NUMBER DEFINITION ------
// ------ STRING DEFINITION ------
// ------ BOOLEAN DEFINITION ------
// ------ OBJECT DEFINITION ------
// Option 1
let firstObject: {
  color: string;
  age: number;
};
firstObject = {
  color: 'blue',
  age: 30
}

// Option 2
const secondObject = {
  color: 'red',
  age: 25
}

// Option 3
let thirdObject: object;
thirdObject = {
  color: 'red',
  age: 25
}

// Option 4
const fourthObject: object = {
  color: 'red',
  age: 25
}

// ------ ARRAY DEFINITION ------
