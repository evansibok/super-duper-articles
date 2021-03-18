![Code on a laptop screen!](https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80)

**Cover Image Credits**: Photo by *[Luca Bravo](https://unsplash.com/@lucabravo)*

For javascript developers out here, I'm certain we've all heard about the popular kids on the block. I'm talking about React (Web application Development), React Native (Cross platform mobile app development) and Typescript (The gateway to javascript superpowers).

If you haven't heard about Typescript, here's a blog post that serves as an [Introduction to Typescript and its Basic Types](./001-Typescript/intro-to-typescript.md).

For React we can take a look at it in another post. Since our focus is on React Native and Typescript, that is what we will be focusing on this post.

## Introduction
This post will show you how to start up a brand new React Native Typescript project and setup basic navigation routes for easy authentication and authorization.

We will work on a sample app, for now let's call this app: **Truth**

Without much ado, let's get started!!!

## Initialising a new React Native App
First move into a folder you want to create your application. For me, that folder is `projects`.

After moving into your folder, run the command below to create a new react native application with typescript support:
```
// If you have the react native cli installed globally in your machine
react-native init truth --template react-native-template-typescript


// If you don't have the react native cli installed globally
npx react-native init truth --template react-native-template-typescript
```

The command above uses the official `react-native-cli` to create a new application called `truth` and installs a template with typescript support.

