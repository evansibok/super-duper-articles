## What is Typescript?

Typescript is commonly known as a Superset of Javascript. What does this mean? Typescript is a programming language built on top of Javascript. It introduces new features and advancements to the Javascript programming language. It offers the ability to use newer, more modern features when writing your Javascript code.

    Typescript can not be run in a Javascript environment like the browser.

## How then does Typescript work?

In addition to being a programming language, Typescript is also a compiler. It converts all Typescript codes to Javascript code so it can be run by environments that support Javascript, like your browser.

## Why use Typescript?

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

## Typescript Basics

### Core Types and how to define them

#### **Number**

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

In option 1 above, we are explicitly stating the type of the variable `someNumber`. This option works when we don't want to assign on the spot. In this case, whatever value we assign to the variable in the future, typescript will treat it as a `number` type because we told typescript to do so. If we do this:
`someNumber = 'my name';`, typescript would throw an error as we are attempting to assign a `string` value to a variable that has a `number` type definition.

Option 2
```
let someNumber: number = 5;

someNumber = 10;
```

Option 2 works when we are assigning a value on the spot and we still want to explicitly state the type. We can still change the value of the variable `someNumber` in the future.

Option 3

```
let someNumber = 5;
```

Option 3 is a bit different because we aren't explicitly stating the type. We just define the variable `someNumber` and assign a value to it which is `5`. In this situation, typescript does something called `Type Inference`, where it uses the value assigned to infer the type that should be assigned to the variable. This is the same in all types definitions.


#### **String**

```
'my word', "my word", `my word`
```

All text values are considered strings, whether it's single quotes, double quotes, or the newer string literals.

For string types, we can define them as follows:

Option 1
```
let someString: string;

someString = "a string value";
```

Option 2
```
let someString: string = 'first string';

someString = 'new string value';
```

Option 3
```
let name: string = 'peter';

let someString = `this is some string ${name}`;
```

We can see the exact same method of definition here like we did with the number type definition. We can either explicitly define the string variable type or let typescript infer it. We can use single quotes, double quotes or string literals as well.

#### **Boolean**

```
true, false
```
Boolean has either a true(1) or a false(0) value.

Boolean types can be defined as follows:

Option 1

```
let isTruthy: boolean;

isTruthy = false;
```

Option 2
```
let isTruthy: boolean = true;
```

Option 3

```
let isTruthy = true;
```

#### **Object**

```
{
  name: 'Andy',
  age: 23,
  isEmployed: true
}
```
Objects of course look the same way in javascript.

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
let secondObject: {
  color: string;
  age: number;
} = {
  color: 'red',
  age: 25
}
```
The definition in option 2 above becomes useful when we want to assign value on the spot. It still makes use of the object type definition with other types as properties.

Option 3

```
const thirdObject = {
  color: 'red',
  age: 25
}
```

For this definition, we are again just defining our object with properties and letting typescript infer the types based on the value we assign to the properties. I'm sure you're getting how this type definition thing works now.

#### **Array**
```
[1, 'second', false]
```

Arrays in typescript can be strict or flexible depending on how we want them.

Let's look at the type definitions below:

Option 1
```
let firstArray = []   <--- // any[]

let secondArray = ['one', 'two']   <--- // string[]

let thirdArray = [1, 2]   <--- // number[]

let fourthArray = [true, false]   <--- // boolean[]

let fifthArray = ['one', 1, true]   <--- // (string | number | boolean)[]

let sixthArray: string[]; <--- A string Array type

sixthArray = ['one', 'two']

let seventhArray: string[] = ['find', 'peace'];

```

`firstArray` is a flexible array as we did not explicitly state what kind of element the array would contain. On the other hand, `secondArray`, `thirdArray`, and `fourthArray` are strict arrays because the elements in each array are of one single type. `fifthArray` contains different element types and so typescript identifies that the array can only contain each of the three types.
In this scenario, we can modify our `fifthArray` with any element that matches each of the three types.

Option 2
```
let eightArray: Array<number>;

eightArray = [2, 6, 4]
```

The method defined above uses what is called a `generic` array type definition. This works the same `let sampleArray: number[];` works. It is also a strict type array definition. What if we want to a strict type where we only want two elements in the array of a defined type. This is where we have a new type called `Tuple`.

#### **Tuple**
```
[1, 'a string']
```

A tuple is a special type provided by typescript that aims to give us more control over defining and handling elements. Tuple exists in other programming languages like Python but is not available in Javascript.

A tuple can be defined as follows:

Option 1
```
let person: [number, string];

person = [40, 'peterson']    <--- // correct

person = ['peterson', 40]    <--- // ERROR

person = [40, 'peterson', 'james']    // ERROR --> Type '[number, string, string]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2.
```

Looking at the definition above, we can get an idea of how powerful a `Tuple` is. We can define a fixed style of data structure and use it strictly. In the `person` tuple, we can only assign elements that match the types defined, and in addition, the elements must be in exactly the same shape as the definition and the same length. Notice that if we try to add three elements to the tuple, we get an error as its only meant to have two elements.

Option 2

```
let identity: [number, string] = [2, 'james'];

identity = [20, 'Eren Yeager']; // Valid
```
For option 2, we initialize a value on the spot. A new value can be used to modify the existing tuple, as long as it matches the shape and length.

Take a look at the code below:

```
let animal = [number, string];

animal = [5, 'goats'];

animal.push('birds');
```
While a tuple is a fixed length definition, one caveat is that calling a method like `push()` on a tuple would actually work, as typescript does not throw an error when you push. This is something you should keep in mind while using tuples.

> Calling a method like `push()` on a tuple would actually work, as typescript does not throw an error when you push.
>> This is something you should keep in mind while using tuples.

### <i>Other valid but not recommended ways of defining types</i>
While there are situations where the methods below can be used, I wouldn't recommend using them, but if you have to, they should be used sparingly. The methods described above are my most recommended methods for type definitions.

```
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
If you take a look at each definition shown in this section, you would notice that they are defined in a way where we explicitly state the type. In the `object` type definitions, we state the type as `object`, while this is okay, it doesn't properly define what type each property in the object should hold. So it isn't good practice to use this method


<!-- Dealing with typescript files in VSCode -->
