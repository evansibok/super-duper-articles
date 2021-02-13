
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

In Javascript, the function above will run and output without errors. In the first  function call, our output will be `11`, while in the second function call,  the output will be the string `56`. As far as Javascript is concerned, we don't have any errors, but as you can see, our function is meant to add two numbers and not two strings. So in this case, our code fails the test silently by not throwing an error when either of num1 and num2 parameters are strings. These and other hidden issues expose the weaknesses we have in the Javascript programming language.

Typescript aims to solve this in addition to adding a superpower to Javascript.