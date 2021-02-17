### What is Typescript?

Typescript is commonly known as a Superset of Javascript. What does this mean? Typescript is a programming language built on top of Javascript. It introduces new features and advancements to the Javascript programming language. It offers the ability to use newer, more modern features when writing your Javascript code.

    Typescript can not be run in a Javascript environment like the browser.

### How then does Typescript work?

In addition to being a programming language, Typescript is also a compiler. It converts all Typescript codes to Javascript code so it can be run by environments that support Javascript, like your browser.

### Why use Typescript?

Typescript in its simplest form is just typed javascript.

Take the below code for example:

```
function addTwoNumbers(num1, num2) {
    return num1 + num2;
};

addTwoNumbers(5, 6);
addTwoNumbers('5', '6');
```

In Javascript, the function above will run and output without errors. In the first  function call, our output will be `11`, while in the second function call, the output will be the string `56`. As far as Javascript is concerned, we don't have any errors, but as you can see, our function is meant to add two numbers and not two strings. So in this case, our code fails the test silently by not throwing an error when either of num1 and num2 parameters are strings. These and other hidden issues expose the weaknesses we have in the Javascript programming language.

Typescript aims to solve this in addition to adding a superpower to Javascript.

### Typescript Basics

### Core Types and how to define them

> Number

```
8, -4, 2.8
```

Typescript regards all digits as a `number` type. Including single digits, negative integers and floating points.

To define a `number` type in typescript we can do the following:

Option 1

```
let someNumber: number;

someNumber = 10;
```

In option 1 above, we are explicitly stating the type of the variable `someNumber`. In this case, whatever value we assign to the variable in the future, typescript will treat it as a `number` type because we told typescript to do so. If we do this:

```
someNumber = 'my name';
```

typescript would throw an error as we are attempting to assign a `string` value to a variable that has a `number` type definition.

Option2

```
let someNumber = 5;
```

Option 2 is a bit different because we aren't explicitly stating the type. We just define the variable `someNumber` and assign a value to it which is `5`. In this situation, typescript does something called `Type Inference`, where it uses the value assigned to infer the type that should be assigned to the variable. This is the same in all types definitions.

> String

```
'my word', "my word", `my word`
```

All text values are considered strings, whether it's single quotes, double quotes, or the newer string literals.

For string types, we can define them as follows:

Option 1

```
let someString: string;

someString = 'this is some string';
```

Option2

```
let someString = 'this is some string';
```

We can see the exact same method of definition here like we did with the number type definition. We can either explicitly define the string variable type or let typescript infer it.

> Boolean

```
true, false
```

Boolean types can be defined as follows:

Option 1

```
let isTruthy: boolean;

isTruthy = false;
```

Option2

```
let isTruthy = true;
```

> Object

```
{
  name: 'Andy',
  age: 23,
  isEmployed: true
}
```
Objects of course look the same way as in javascript.

We can define objects in the following ways:

Option 1

```
let firstObject: {
  color: string;
  age: number;
};

firstObject = {
  color: 'blue',
  age: 30
}
```

By paying close attention to option 1 above, you notice this method of definition is a bit different. We define the object with its properties and explicitly state the types for each property. If we try to assign a different value type to the properties, of course we will get an error.

Option 2

```
const secondObject = {
  color: 'red',
  age: 25
}
```

For this definition, we are again just defining our object with properties and letting typescript infer the types based on the value we assign to the properties. I'm sure you're getting how this type definition thing works now.

> Array
```
[1, 'second', false]
```









<!-- Types -->
<!-- Include the third option of defining types -->

```
// Number Type
let myNumber: number = 5;

// String Type
let myString: string = 'this is my string';

// Boolean Type
let myBoolean: boolean = false;

// Object Type
let thirdObject: object;
thirdObject = {
  color: 'red',
  age: 25
}

// Object Type
const fourthObject: object = {
  color: 'red',
  age: 25
}
```

<!-- Dealing with typescript files in VSCode -->
