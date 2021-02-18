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
let firstArray = [] // any[]

let secondArray = ['one', 'two'] // string[]

let thirdArray = [1, 2] // number[]

let fourthArray = [true, false] // boolean[]

let fifthArray = ['one', 1, true] // (string | number | boolean)[]

let sixthArray: string[] // string[]
sixthArray = ['one', 'two']

let seventhArray: string[] = ['one', 'two']

let eigthArray: Array<number> = [3, 4, 7]


// ------ TUPLE DEFINITION ------
// Option 1
let person: [number, string];

person = [40, 'peterson'] // correct

// person =['peterson', 40] // ERROR

// person = [40, 'peterson', 'james'] // ERROR

// Option 2
let identity: [number, string] = [2, 'james']

identity = [30, 'peterson']
